import TextField from "./TextField";

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    size: {
        type: 'string',
        defaultValue: 'large',
        options: ['small', 'medium'],
        control: {
            type: 'radio'
        }
    },
    variant: {
        type: 'string',
        defaultValue: 'text',
        options: ['standard', 'outlined', 'filled'],
        control: {
            type: 'radio'
        }
    },
  },
};



const Template = (args) => <TextField {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: 'standard',
    color: 'warning',
    size: 'medium',
    error: false,
    helperText: 'error',
    required: false,
    fullWidth: false,
    disabled: false,
    placeholder: 'placeholder',
    label:"Required"
};