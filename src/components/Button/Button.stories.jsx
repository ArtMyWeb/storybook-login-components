import Button from "./Button";

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    size: {
        type: 'string',
        defaultValue: 'large',
        options: ['small', 'medium', 'large'],
        control: {
            type: 'radio'
        }
    },
    variant: {
        type: 'string',
        defaultValue: 'text',
        options: ['contained', 'outlined', 'text'],
        control: {
            type: 'radio'
        }
    },
    color: {
        type: 'string',
        defaultValue: 'primary',
        options: ['inherit', 'primary', 'secondary', 'error', 'info', 'warning', 'success'],
        control: {
            type: 'radio'
        }
    },

  },
};


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Login',
    variant: 'outlined',
    color: 'primary',
    size: 'medium',
    disabled: false
};