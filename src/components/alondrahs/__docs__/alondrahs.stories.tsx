import Example from "./example"
import {Meta,StoryObj} from "@storybook/react";
const meta:Meta<typeof Example>={
    tile:"AlondraHS",
    component:Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
    args: {
        message:"Snackbar happy",
        messagecolor:"black",
        color:"green",
        icon:"happy",
    },
};
export const Secondary: Story = {
    args: {
        message:"Snackbar sad",
        messagecolor:"white",
        color:"red",
        icon:"sad",
    },
};