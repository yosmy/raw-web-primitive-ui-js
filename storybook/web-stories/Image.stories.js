import React from 'react';

import Image from '../Image';

export default {
  title: 'Image',
  component: Image,
};

const common = {
  source: "https://www.publicdomainpictures.net/pictures/130000/nahled/red-box-background.jpg"
}

const Template = ({...props}) => {
  return <Image
      {...common}
      {...props}
  />
};

export const Default = Template.bind({});

export const WithBorder = Template.bind({});
WithBorder.args = {
  border: {
    radius: 10
  }
};
