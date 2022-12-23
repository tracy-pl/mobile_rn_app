import React, { useState } from 'react';
import { Icon } from 'native-base';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
// import { IInputProps } from 'native-base/src/components/primitives/Input/types';

import Input from './Input';

export const PasswordInput = props => {
  const [show, setShow] = useState(false);

  return (
    <Input
      {...props}
      borderRadius="xl"
      mb={4}
      type={show ? 'text' : 'password'}
      style={{ height: 64 }}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          <Icon
            as={<MaterialIcons name={show ? 'visibility' : 'visibility-off'} />}
            size={5}
            mr="2"
            color="muted.400"
          />
        </Pressable>
      }
    />
  );
};
