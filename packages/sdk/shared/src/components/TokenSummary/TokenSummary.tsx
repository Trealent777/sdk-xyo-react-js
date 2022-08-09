import { Paper, PaperProps, Typography } from '@mui/material'
import { FlexBoxProps, FlexCol, FlexRow } from '@xylabs/react-flexbox'

export interface TokenSummaryProps extends FlexBoxProps {
  icon?: string
  symbol?: string
  imgBgProps?: PaperProps
}

export const TokenSummary: React.FC<TokenSummaryProps> = ({ imgBgProps, icon, symbol, children, ...props }) => {
  return (
    <>
      <FlexRow className="TokenSummary-root" paddingBottom={3} width="100%" justifyContent="flex-start" {...props}>
        <Paper component={FlexCol} padding={1} className="token-logo-bg" height="40px" width="40px" sx={{ borderRadius: '50%' }} {...imgBgProps}>
          <img src={icon} height="25px" />
        </Paper>
        <Typography variant="h6" fontWeight={300} textTransform="uppercase" paddingLeft={1}>
          {symbol}
        </Typography>
      </FlexRow>
      {children}
    </>
  )
}
