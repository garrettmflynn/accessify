import { Story, Meta } from '@storybook/web-components';
import { Mouse, MouseProps } from './Mouse';
import object from './object';

export default {
  title: 'Core/Mouse',
  argTypes: {
  },
} as Meta;

const Template: Story<Partial<MouseProps>> = () => new Mouse();

export const Default = Template.bind({});
Default.args = {
  header: 'Object',
  target: object,
};