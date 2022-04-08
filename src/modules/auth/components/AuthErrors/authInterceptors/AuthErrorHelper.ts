import { XyoApiError } from '@xyo-network/sdk-xyo-client-js'

type AuthError = Error | XyoApiError

interface FormattedAuthError {
  reAuthenticate: boolean
  error: AuthError
  dialogMessage: string
}

const isXyoError = (error: AuthError): error is XyoApiError => {
  return (error as XyoApiError)?.isXyoError
}

class AuthErrorHelpers {
  public static handleAuthError = (error: AuthError): FormattedAuthError => {
    if (isXyoError(error) && error.response?.status === 401) {
      return {
        dialogMessage:
          'Invalid Credentials or session expired.  Please verify your credentials and try to log in again.',
        error,
        reAuthenticate: true,
      }
    }

    if (isXyoError(error) && error.response?.status === 403) {
      return {
        dialogMessage: 'Unfortunately, you do not have access to this content.',
        error,
        reAuthenticate: true,
      }
    }
    return {
      dialogMessage: 'Please verify your credentials and try to log in again.',
      error,
      reAuthenticate: false,
    }
  }
}

export { AuthErrorHelpers }
export type { AuthError, FormattedAuthError }