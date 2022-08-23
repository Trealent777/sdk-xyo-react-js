import { FlexCol } from '@xylabs/react-flexbox'
import { WithChildren } from '@xylabs/react-shared'
import { AxiosLoggedError } from '@xyo-network/react-auth'
import { ApiErrorAlert } from '@xyo-network/react-shared'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { XyoApiErrorRenderProps } from './Props'
import { ReAuth } from './ReAuth'

export const XyoApiErrorRender: React.FC<WithChildren<XyoApiErrorRenderProps>> = ({
  apiError,
  apiFailure,
  noErrorDisplay = false,
  noReAuth = false,
  customError = null,
  children,
  ...props
}) => {
  const location = useLocation()
  useEffect(() => {
    // ensure we end up at the same place we are now after logging in
    location.state = {
      from: {
        pathname: window.location.pathname,
      },
    }
  }, [location])

  if (apiError) {
    const loggedError = apiError as AxiosLoggedError
    loggedError.logged = loggedError.logged = new Date().toISOString()

    return (
      <FlexCol alignItems="stretch" {...props}>
        {noErrorDisplay ? (
          customError
        ) : (
          <FlexCol alignItems="center" {...props}>
            <ApiErrorAlert call={loggedError} />
          </FlexCol>
        )}
      </FlexCol>
    )
  } else if (apiFailure) {
    return (
      <FlexCol alignItems="stretch" {...props}>
        {noErrorDisplay ? (
          customError
        ) : (
          <FlexCol alignItems="start" {...props}>
            {apiFailure.status === 401 && !noReAuth && <ReAuth apiFailure={apiFailure} />}
          </FlexCol>
        )}
      </FlexCol>
    )
  } else {
    return <>{children}</> ?? null
  }
}
/** @deprecated use XyoApiErrorRender instead */
export const AxiosErrorHandler = XyoApiErrorRender
