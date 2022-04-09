import { Story, Meta } from '@storybook/web-components';
import { Mouse, MouseProps } from './Mouse';
import object from './object';

export default {
  title: 'Core/Mouse',
  argTypes: {
  },
} as Meta;

const Template: Story<Partial<MouseProps>> = (args) => new Mouse(args);

export const Default = Template.bind({});
Default.args = {
  header: 'Object',
  target: object,
};