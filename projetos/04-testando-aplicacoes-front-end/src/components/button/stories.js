import React from 'react';

import { Check } from '@styled-icons/bootstrap/Check';
import { Trash2Outline } from '@styled-icons/evaicons-outline/Trash2Outline';

import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click',
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  children: 'Deletar',
  icon: <Trash2Outline />,
  iconType: 'start',
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: 'Confirmar',
  icon: <Check />,
  iconType: 'end',
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  icon: <Check />
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Desabilitado',
  disabled: true,
};

