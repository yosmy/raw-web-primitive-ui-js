import React, {useState} from 'react';

import Input from '../Input';
import Container from '../Container';

export default {
  title: 'Input',
  component: Input,
};

const Template = ({...props}) => {
  const [text, setText] = useState(null);

  return <Container
      background="red"
      flow="row"
  >
    <Input
        value={text}
        onChange={(value) => {
          setText(value);
        }}
        {...props}
    />
  </Container>
};

export const Default = Template.bind({});

export const FullWidth = Template.bind({});

FullWidth.args = {
  flex: 1
};

export const WithSize = Template.bind({});

WithSize.args = {
  size: 20
};

export const WithColor = Template.bind({});

WithColor.args = {
  placeholder: "Input the text",
  color: "red"
};

export const WithBorder = Template.bind({});

WithBorder.args = {
  border: 1
};

export const WithBorderRadius = Template.bind({});

WithBorderRadius.args = {
  padding: 10,
  border: {
    width: 0,
    color: "black",
    style: "solid",
    radius: 8
  }
};

