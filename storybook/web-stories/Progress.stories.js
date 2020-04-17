import React from 'react';
import Progress from '../Progress';

export default {
  title: 'Progress',
  component: Progress,
};

const Template = ({...props}) => {
  return <Progress {...props} />;
};

export const Default = Template.bind({});

