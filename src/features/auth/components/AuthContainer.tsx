import React from 'react';
import { Keyboard, Platform, TouchableWithoutFeedback } from 'react-native';
import { Center, Heading, KeyboardAvoidingView, VStack } from 'native-base';
import { Container } from '~components';

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
        <Container>
          <Center flex={1}>
            <VStack w="100%" pb={4}>
              <Heading mb="3">{title}</Heading>
              {children}
            </VStack>
          </Center>
        </Container>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default AuthContainer;
