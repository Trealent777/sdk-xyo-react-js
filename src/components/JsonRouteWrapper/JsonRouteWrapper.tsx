import { ButtonEx, ErrorDialog, FlexBoxProps, FlexCol, FlexRow, useAsyncEffect } from '@xylabs/sdk-react'
import { AxiosError } from 'axios'
import { lazy, Suspense, useState } from 'react'
import { ReactJsonViewProps } from 'react-json-view'
import { useSearchParams } from 'react-router-dom'

const JsonView = lazy(() => import(/* webpackChunkName: "jsonView" */ 'react-json-view'))

export interface JsonFromPromiseProps extends FlexBoxProps {
  callback: () => Promise<object>
  noBackButton?: boolean
  noJsonButton?: boolean
  jsonViewProps?: ReactJsonViewProps
}

export const JsonRouteWrapper: React.FC<JsonFromPromiseProps> = ({
  callback,
  children,
  noBackButton = false,
  noJsonButton = false,
  jsonViewProps,
  ...props
}) => {
  const [apiResponse, setApiResponse] = useState<object>()
  const [apiError, setApiError] = useState<AxiosError>()
  const [searchParams, setSearchParams] = useSearchParams()
  const active = searchParams.get('json') === 'true'

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useAsyncEffect(async () => {
    try {
      const response = await callback()
      setApiResponse(response)
    } catch (err) {
      setApiError(err as AxiosError)
    }
  }, [callback])

  return (
    <FlexCol {...props}>
      {active ? (
        <>
          <Suspense fallback={null}>
            {apiResponse && <JsonView src={apiResponse} collapseStringsAfterLength={64} {...jsonViewProps} />}
          </Suspense>
          {!noBackButton && (
            <FlexRow marginY={3}>
              <ButtonEx flexDirection="row" variant="outlined" onClick={() => setSearchParams({ json: '' })}>
                Back
              </ButtonEx>
            </FlexRow>
          )}
          <ErrorDialog
            title="Error Fetching JSON"
            error={apiError}
            open={!!apiError}
            onAction={() => setApiError(undefined)}
          />
        </>
      ) : (
        <>
          {children}
          {!noJsonButton && (
            <FlexRow marginY={3}>
              <ButtonEx flexDirection="row" variant="outlined" onClick={() => setSearchParams({ json: 'true' })}>
                JSON
              </ButtonEx>
            </FlexRow>
          )}
        </>
      )}
    </FlexCol>
  )
}
