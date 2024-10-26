import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
    title: "MyFavouriteBorder",
    component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        color:"info",
        disabled: false,
        onClick: () => alert("MyFavouriteBorder1"),
    },
};
export const Secondary: Story = {
    args: {
        color:"success",
        disabled: false,
        onClick: () => alert("MyFavouriteBorder2"),
    },
};