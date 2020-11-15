import React from 'react';

import Input from '.';

export default {
  title: 'Components/Input',
  component: Input,
};

const Template = (args) => (
  <div style={{ width: 300 }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
