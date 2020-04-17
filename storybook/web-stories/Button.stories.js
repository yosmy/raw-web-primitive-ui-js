import React from 'react';
import Progress from "../Progress";

import Button from '../Button';

export default {
  title: 'Button',
  component: Button,
};

const Template = ({...props}) => {
  return <Button
      onClick={(value) => {
        console.log(value)
      }}
      {...props}
  >
    Ok
  </Button>
};

export const Default = Template.bind({});

export const WithBorder = Template.bind({});
WithBorder.args = {
  border: 1
}

export const WithBackground = Template.bind({});
WithBackground.args = {
  background: "red",
}

export const WithProgress = ({...props}) => {
  return <Button {...props}>
    Ok
    <Progress />
  </Button>
}

export const AsUpload = Template.bind({});
AsUpload.args = {
  upload: true
}