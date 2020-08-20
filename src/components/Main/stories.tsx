import { Story, Meta } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Component1: Story = (args) => <Main {...args} />

export const Component2: Story = (args) => <Main {...args} />

Component2.args = {
  title: 'Title Default',
  description: 'description default'
}
