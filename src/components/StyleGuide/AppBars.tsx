import { Menu as MenuIcon } from '@mui/icons-material'
import { Button, IconButton, Toolbar, Typography } from '@mui/material'
import { AppBarEx, FlexCol } from '@xylabs/sdk-react'

export const AppBars = () => {
  const contextToolbar = (
    <Toolbar disableGutters>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit" component="div">
        Photos
      </Typography>
    </Toolbar>
  )

  const systemToolbar = <Button variant="contained">Get Started</Button>

  return (
    <FlexCol alignItems="stretch">
      <Typography variant="subtitle1">App Bar</Typography>
      <AppBarEx elevation={0} contextToolbar={contextToolbar} systemToolbar={systemToolbar} />
    </FlexCol>
  )
}
