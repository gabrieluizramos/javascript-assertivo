import React from 'react';

import Snackbar from '.';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    children: {
      type: 'string'
    }
  }
};

const Template = (args) => <Snackbar onExit={() => { console.log('saiu') }} {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Mensagem de snackbar',
};
