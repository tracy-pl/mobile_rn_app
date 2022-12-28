import React, { useState } from 'react';
import { Icon, IInputProps } from 'native-base';
import { Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import Input from './Input';
import { colors } from '~theme';

export const PasswordInput: React.FC<IInputProps> = props => {
  const [show, setShow] = useState(false);

  return (
    <Input
      {...props}
      borderRadius="xl"
      mb={4}
      type={show ? 'text' : 'password'}
      style={{ height: 64 }}
      _focus={{
        borderColor: colors.blue2,
        backgroundColor: colors.white,
      }}
      InputRightElement={
        <Pressable onPress={() => setShow(!show)}>
          {props.value && (
            <Icon
              as={
                <MaterialIcons name={show ? 'visibility' : 'visibility-off'} />
              }
              size={7}
              mr="5"
              color="muted.400"
            />
          )}
        </Pressable>
      }
    />
  );
};
