import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Button from './Button'
import { within } from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import { expect } from '@storybook/jest'

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
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: '説明'
            }
        }
    },
    // decorators: [
    //     (Story) => (
    //         <div
    //         style={{
    //             display: 'flex',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             height: '100vh',
    //         }}
    //         >
    //             <Story />
    //         </div>
    //     )
    // ]
};
const something = action('something');

const Template = (args) => {
    const handleClick = (e) => {
        something();
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
Primary.parameters = {
    backgrounds: {
        values: [
            { name : 'red', value: '#f00'},
            { name : 'green', value: '#0f0'},
            { name : 'blue', value: '#00f'},
        ]
    }
}

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: 'Small',
  color: 'primary',
  size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.play = async ({args, canvasElement}) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button'));
    // await expect(args.handleClick).toHaveBeenCalled();
}
PrimaryLarge.args = {
  children: 'Large',
  color: 'primary',
  handleClick: something,
  size: 'lg',
};
