import {Fragment, useState} from 'react';
import Modal from '../Modal';
import Text from '../Text';
import Button from '../Button';

export default {
  title: 'Modal',
  component: Modal,
};

const Template = ({...props}) => {
  const [modal, setModal] = useState(false)

  return <Fragment>
    <Button onClick={() => {setModal(true);}}><Text>Open</Text></Button>
    {modal && <Modal
        onClose={() => {setModal(false);}}
        {...props}
    >
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Text>Text</Text>
      <Button onClick={() => {setModal(false);}}><Text>Close</Text></Button>
    </Modal>}
  </Fragment>
};

export const Default = Template.bind({});
Default.args = {
  padding: 20,
};

export const Full = Template.bind({});
Full.args = {
  full: true,
  margin: 20,
  padding: 40,
  border: 1
};

export const WithWidthAndHeight = Template.bind({});
WithWidthAndHeight.args = {
  width: 200,
  height: 200,
};