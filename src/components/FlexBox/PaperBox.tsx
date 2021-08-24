import { Box, Paper, PaperProps, useTheme } from '@material-ui/core'
import React from 'react'

import BoxlikeComponentProps from '../../BoxlikeComponentProps'
import BusyComponentProps from '../../BusyProps'
import mergeBoxlikeStyles from '../../mergeBoxlikeStyles'
import BusyBoxBody from './BusyBoxCircularProgress'

interface PaperBoxProps extends PaperProps, BoxlikeComponentProps, BusyComponentProps {}

const PaperBox: React.FC<PaperBoxProps> = (props) => {
  const theme = useTheme()
  const {
    children,
    busySize,
    busyOpacity = 0.85,
    busy,
    ...rootProps
  } = mergeBoxlikeStyles<PaperBoxProps>(theme, props, { position: 'relative' })
  return (
    <Box component={Paper} {...rootProps}>
      {children}
      {busy ? <BusyBoxBody opacity={busyOpacity} size={busySize} /> : null}
    </Box>
  )
}

export { PaperBox }
export type { PaperBoxProps }
