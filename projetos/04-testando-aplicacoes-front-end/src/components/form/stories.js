import React from 'react';

import Form from '.';
import schema from '../../mocks/schema';

export default {
  title: 'Components/Form',
  component: Form,
  args: {
    schema
  },
};

const Template = (args) => <Form {...args} />;

export const WithSchemaMock = Template.bind({});
