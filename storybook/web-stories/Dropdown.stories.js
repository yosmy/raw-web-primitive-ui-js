import React from 'react';

import Dropdown from '../Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const Template = ({...props}) => {
  return <Dropdown
      value="2"
      data={[
        {label: "1", value: "1"},
        {label: "2", value: "2"},
        {label: "3", value: "3"},
      ]}
      onChange={(value) => {
        console.log(value);
      }}
      {...props}
  />
};

export const Default = Template.bind({});
