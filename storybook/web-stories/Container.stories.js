import React from 'react';

import Container from '../Container';
import Button from '../Button';
import Text from '../Text';

export default {
  title: 'Container',
  component: Container,
};

export const WithAutoWith = ({...props}) => {
  return <Container
      flow="column"
      align={{
        cross: "flex-start"
      }}
      {...props}
  >
    <Container
        border={1}
    >
      <Text>Text</Text>
    </Container>
  </Container>
};

export const WithBorder = ({...props}) => {
  return <Container
      border={1}
      {...props}
  >
    <Text>Text</Text>
  </Container>
};

export const WithBackground = ({...props}) => {
  return <Container
      background="red"
      {...props}
  >
    <Text>Text</Text>
  </Container>
};

export const WithPercentWidth = ({...props}) => {
  return <Container
      flow="row"
      background="red"
      {...props}
  >
    <Container
        background="blue"
    >
      <Text>1</Text>
    </Container>
    <Container
      background="green"
      width="100%"
    >
      <Text>2</Text>
    </Container>
  </Container>
};

export const AsTable = ({...props}) => {
  const common = {
    margin: {
      left: 10
    }
  };

  return <Container table {...props}>
    <Container row>
      <Container cell>
        <Text {...common}>1</Text>
      </Container>
      <Container cell>
        <Text {...common}>2</Text>
      </Container>
    </Container>
    <Container row>
      <Container cell>
        <Text {...common}>3</Text>
      </Container>
      <Container cell>
        <Text {...common}>4</Text>
      </Container>
    </Container>
  </Container>
};


