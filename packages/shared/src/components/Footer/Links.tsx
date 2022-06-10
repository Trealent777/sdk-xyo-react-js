import { Typography } from '@mui/material'
import { FlexBoxProps, FlexCol } from '@xylabs/react-flexbox'

export const FooterLinks: React.FC<FlexBoxProps> = ({ children, title, ...props }) => {
  return (
    <FlexCol margin={1} justifyContent="flex-start" title={title} {...props}>
      <Typography margin={0.5} variant="h6" noWrap>
        {title}
      </Typography>
      {children}
    </FlexCol>
  )
}
