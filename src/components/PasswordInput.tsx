import { MaterialIcons } from '@expo/vector-icons';
import { Icon, Input } from 'native-base';
import { useState } from 'react';
import { Pressable } from 'react-native';
import { colors, fonts } from '~theme';

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
      _focus={{
        borderColor: colors.blue2,
        backgroundColor: colors.white,
      }}
      style={{
        height: 64,
        fontFamily: fonts.inter.medium,
        fontWeight: '500',
        paddingLeft: 24,
        fontSize: 16,
      }}
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
