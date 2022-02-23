import { useEffect, useState } from 'react'

import { themeOptions } from '../../../theme'
import { AuthThemeExtender } from '../AuthThemeExtender'
import { AuthErrorDialog } from './AuthErrorDialog'

export interface AuthErrorsWrapperProps {
  apiDomain: string
}

const AuthErrorsWrapper: React.FC<AuthErrorsWrapperProps> = ({ apiDomain, children }) => {
  const reAuthState = useState(false)
  const [reAuth, setReAuth] = reAuthState

  useEffect(() => {
    if (reAuth) {
      // Relying on window and localStorage so router is not a dependency and
      // avoids nesting within a context to cause rerenders and multiple interceptors
      localStorage.setItem('returnUrl', window.location.pathname)
      window.location.pathname = '/login'
    }
  }, [reAuth])

  return (
    <AuthThemeExtender themeOptions={themeOptions}>
      {children}
      <AuthErrorDialog apiDomain={apiDomain} setReAuth={setReAuth} />
    </AuthThemeExtender>
  )
}

export { AuthErrorsWrapper }
