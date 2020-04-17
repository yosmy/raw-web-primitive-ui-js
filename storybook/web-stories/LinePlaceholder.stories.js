import React from 'react';

import LinePlaceholder from '../LinePlaceholder';

export default {
  title: 'LinePlaceholder',
  component: LinePlaceholder,
};

const Template = ({...props}) => {
  return <LinePlaceholder {...props} />;
};

export const Default = Template.bind({});
Default.args = {
    width: 100,
    height: 10
};
