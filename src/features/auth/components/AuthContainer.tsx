import React from 'react';
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';
import { KeyboardAvoidingView, VStack } from 'native-base';
import { fonts } from '~theme';

interface IAuthContainerProps {
  children: React.ReactNode;
  title: string;
}

const AuthContainer: React.FC<IAuthContainerProps> = ({ children, title }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        flex={1}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={{ paddingHorizontal: 12 }}>
          <VStack w="100%" pb={4}>
            <Text
              style={{
                fontWeight: '700',
                fontFamily: fonts.inter.bold,
                fontSize: 32,
                marginBottom: 24,
              }}
            >
              {title}
            </Text>
            {children}
          </VStack>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AuthContainer;
