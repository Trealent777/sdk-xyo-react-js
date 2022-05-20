import { Paper, Typography, useMediaQuery, useTheme } from '@mui/material'
import { FlexBoxProps, FlexCol, FlexGrowRow, FlexRow, QuickTipButton } from '@xylabs/sdk-react'
import { XyoPayload } from '@xyo-network/core'
import { lazy, Suspense } from 'react'
import { ReactJsonViewProps } from 'react-json-view'

import { Property } from '../../../property'

const JsonView = lazy(() => import(/* webpackChunkName: "jsonView" */ 'react-json-view'))

export interface PayloadJsonDetailsProps extends FlexBoxProps {
  payload?: XyoPayload
  jsonViewProps?: ReactJsonViewProps
}

export const PayloadJsonDetails: React.FC<PayloadJsonDetailsProps> = ({ jsonViewProps, payload = {}, ...props }) => {
  const { breakpoints } = useTheme()
  const belowSm = useMediaQuery(breakpoints.down('sm'))

  return (
    <FlexCol alignItems="stretch" {...props}>
      <FlexRow margin={1} justifyContent="flex-start">
        <Typography>JSON</Typography>
        <QuickTipButton title="Payload JSON">The raw JSON of the payload</QuickTipButton>
      </FlexRow>
      <Paper variant="outlined">
        <Suspense fallback={<FlexGrowRow />}>
          <JsonView src={payload} enableClipboard collapseStringsAfterLength={belowSm ? 24 : 32} {...jsonViewProps} />
        </Suspense>
      </Paper>
    </FlexCol>
  )
}
