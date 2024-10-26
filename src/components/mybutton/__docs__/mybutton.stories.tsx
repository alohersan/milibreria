import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "MyButton",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        text: "MyButton 1",
        txtcolor: 'red',
        bgcolor: 'black',
        bordercolor:'white',
        borderwidth:'2px',
        hovertxtcolor:'yellow',
        hoverbgcolor:'gray',
        disabled: false,
        size: "small",
        onClick: () => alert("Mybutton 1"),
    },
};
export const Secondary: Story = {
    args: {
        text: "Mi boton 2",
        txtcolor: 'white',
        bgcolor: 'pink',
        bordercolor: 'red',
        borderwidth: '1px',
        hovertxtcolor:'blue',
        hoverbgcolor:'lightgray',
        disabled: false,
        size: "small",
        onClick: () => alert("Button secondary"),
    },
};