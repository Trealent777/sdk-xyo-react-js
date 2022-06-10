import { Collapse, CollapseProps } from '@mui/material'
import { FlexBoxProps, FlexCol, FlexRow } from '@xylabs/react-flexbox'
import { WithChildren } from '@xylabs/react-shared'
import { useState } from 'react'

import { SystemControlsType } from '../SystemControlsType'

interface SystemControlProps extends FlexBoxProps {
  controlElement: React.ReactNode
  systemControlsType?: SystemControlsType
}

const SystemControl: React.FC<WithChildren<SystemControlProps>> = ({ children, controlElement, systemControlsType = SystemControlsType.WindowShade, ...props }) => {
  const [toggleControls, setToggleControls] = useState(false)

  let orientation: CollapseProps['orientation'] = 'vertical'

  switch (systemControlsType) {
    case SystemControlsType.Left: {
      orientation = 'horizontal'
      break
    }
  }

  return (
    <FlexRow className="controls" {...props}>
      <Collapse in={toggleControls} orientation={orientation} timeout={500}>
        <FlexRow bgcolor="primary.main" className="control">
          {controlElement}
        </FlexRow>
      </Collapse>
      <FlexCol style={{ cursor: 'pointer' }} onClick={() => setToggleControls(!toggleControls)}>
        {children}
      </FlexCol>
    </FlexRow>
  )
}

export { SystemControl }
