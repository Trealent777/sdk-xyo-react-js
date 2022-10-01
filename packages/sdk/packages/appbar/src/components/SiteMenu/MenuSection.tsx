import { Collapse, ListSubheader } from '@mui/material'
import { FlexBoxProps, FlexCol } from '@xylabs/react-flexbox'

import { SiteMenuListItem, SiteMenuListItemProps } from './MenuItems'

export interface MenuSectionProps extends FlexBoxProps {
  title: string
  listItems: SiteMenuListItemProps[]
  showTitle?: boolean
}

export const MenuSection: React.FC<MenuSectionProps> = ({ title, listItems, showTitle = true, ...props }) => {
  return (
    <FlexCol alignItems="stretch" {...props}>
      <Collapse in={showTitle} timeout={700}>
        <ListSubheader>{title}</ListSubheader>
      </Collapse>

      {listItems.map((item, index) => (
        <>
          <SiteMenuListItem key={index} {...item}></SiteMenuListItem>
        </>
      ))}
    </FlexCol>
  )
}