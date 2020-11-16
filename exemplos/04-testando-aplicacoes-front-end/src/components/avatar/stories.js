import React from 'react';

import Avatar from '.';
import { profile } from '../../mocks/profile';

export default {
  title: 'Components/Avatar',
  component: Avatar
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: profile.avatar
};

export const WithoutPhoto = Template.bind({});


