import React from 'react';

import Profile from '.';
import { profile } from '../../mocks/profile';

export default {
  title: 'Components/Profile',
  component: Profile,
  args: {
    ...profile
  }
};

const Template = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  editable: false
};

export const Editable = Template.bind({});
Editable.args = {
  editable: true
};
