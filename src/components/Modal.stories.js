import React from "react";

import Modal from "./Modal";

export default {
  title: "Example/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "My Modal",
};
