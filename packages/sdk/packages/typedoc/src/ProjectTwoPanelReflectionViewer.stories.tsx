import { ComponentMeta, ComponentStory } from '@storybook/react'
// eslint-disable-next-line import/no-internal-modules
import clientDocs from '@xyo-network/core/dist/docs.json'
import { BrowserRouter } from 'react-router-dom'
import { ProjectReflection } from 'typedoc'

import { ProjectTwoPanelReflectionViewer } from './ProjectTwoPanelReflectionViewer'

const StorybookEntry = {
  argTypes: {},
  component: ProjectTwoPanelReflectionViewer,
  parameters: {
    docs: {
      page: null,
    },
  },
  title: 'typedoc/TypeDocViewer/ProjectTwoPanelReflectionViewer',
} as ComponentMeta<typeof ProjectTwoPanelReflectionViewer>

const Template: ComponentStory<typeof ProjectTwoPanelReflectionViewer> = ({ reflection, ...props }) => {
  return (
    <BrowserRouter>
      <ProjectTwoPanelReflectionViewer height="90vh" reflection={reflection} {...props} />
    </BrowserRouter>
  )
}

const Client = Template.bind({})
const clientDocsWithProject = { ...clientDocs }
Client.args = {
  reflection: clientDocsWithProject as unknown as ProjectReflection,
}

export { Client }

// eslint-disable-next-line import/no-default-export
export default StorybookEntry
