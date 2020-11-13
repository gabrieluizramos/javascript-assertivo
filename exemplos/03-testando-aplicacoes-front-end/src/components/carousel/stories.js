import React from 'react';

import Carousel from '.';
import { profileList } from '../../mocks/profile';

export default {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    items: profileList
  },
};

const Template = (args) => <Carousel {...args} />;

export const Default = Template.bind({});

export const Editable = Template.bind({});
Editable.args = {
  editable: true,
};
