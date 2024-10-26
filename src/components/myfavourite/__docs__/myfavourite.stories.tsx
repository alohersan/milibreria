import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "MyFavourite",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        color:"info",
        disabled: false,
        onClick: () => alert("MyFavourite1"),
    },
};
export const Secondary: Story = {
    args: {
        color:"success",
        disabled: false,
        onClick: () => alert("MyFavourite2"),
    },
};