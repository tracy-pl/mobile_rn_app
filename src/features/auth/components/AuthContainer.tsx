import React from 'react';
import styled from 'styled-components/native';
import {
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
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
            <Title>{title}</Title>
            {children}
          </VStack>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const Title = styled.Text`
  font-family: ${fonts.inter.bold};
  font-size: 32px;
  margin-bottom: 24px;
`;

export default AuthContainer;
