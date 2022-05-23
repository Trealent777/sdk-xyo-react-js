import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { IconButton, Menu, MenuItem } from '@mui/material'
import { FlexRow } from '@xylabs/sdk-react'
import { useState } from 'react'

import { PropertyActionsProps } from './PropertyActionsProps'

export const PropertyActionsMenu: React.FC<PropertyActionsProps> = ({ actions, ...props }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = !!anchorEl

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return actions && actions?.length > 0 ? (
    <FlexRow {...props}>
      <IconButton size="small" color="inherit" onClick={handleClick}>
        <MoreHorizIcon fontSize="inherit" />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {actions?.map((action) => {
          return (
            <MenuItem
              key={action.name}
              onClick={() => {
                action?.onClick?.()
                handleClose()
              }}
            >
              {action.name}
            </MenuItem>
          )
        })}
      </Menu>
    </FlexRow>
  ) : null
}
