import { action } from '@storybook/addon-actions';
import Button from './Button'

export default {
    title: 'Common/Button',
    component: Button,
    argTypes: {
        color: {
            options: ['primary', 'default', 'danger'],
            control: { type: 'select'},
        },
        size: {
            options: ['sm', 'base', 'lg'],
            control: { type: 'select'},
        },
        backgroundColor: {
            control: { type: 'color'},
        },
        // onClick: {
        //     action: 'clicked',
        // }
    }
};
const something = action('something');

const Template = (args) => {
    const handleClick = (e) => {
        something(e, 'test');
    }
    return <Button {...args} handleClick={handleClick} />
};
export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Danger = Template.bind({});
Danger.args = {
  children: 'Danger',
  color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  children: 'Large',
  color: 'primary',
  size: 'lg',
};
