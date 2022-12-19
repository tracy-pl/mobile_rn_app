import { MaterialIcons } from '@expo/vector-icons';
import { Icon, Input } from 'native-base';
import { useState } from 'react';
import { Pressable } from 'react-native';

export const PasswordInput = ({ onChangeText, value, onBlur, placeholder }) => {
  const [show, setShow] = useState(false);

  return (
    <Input
      borderRadius="xl"
      mb={4}
      type={show ? 'text' : 'password'}
      onChangeText={onChangeText}
      value={value}
      onBlur={onBlur}
      placeholder={placeholder}
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
