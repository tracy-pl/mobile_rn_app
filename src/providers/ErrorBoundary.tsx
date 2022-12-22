import { Alert } from 'react-native';
import { HStack } from 'native-base';
import React, { ErrorInfo } from 'react';

import { store } from '~redux/store';
import { restart } from '~utils/restart';
import { userActions } from '~redux/user';
import { NavigationService } from '~services';
import { IS_DEV_ENV, STACKS } from '~constants';
import { Button, Container, Text } from '~components';

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren,
  {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
  }
> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = {
      error: null,
      hasError: false,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      error,
      hasError: true,
      errorInfo,
    });
  }

  handleBackToSignIn = () => {
    store.dispatch(userActions.logout());
    restart();
  };

  render() {
    const { hasError, error, errorInfo } = this.state;

    if (IS_DEV_ENV) {
      Alert.alert(error?.message);
      Alert.alert(errorInfo?.componentStack);
      Alert.alert(error?.stack);
    }

    if (hasError) {
      return (
        <Container>
          <HStack flex={1} justifyContent="center">
            <Text>Something went wrong</Text>
            <Button onPress={() => NavigationService.navigate(STACKS.ROOT)}>
              Back to home screen
            </Button>
            <Button onPress={this.handleBackToSignIn}>Restart?</Button>
          </HStack>
        </Container>
      );
    }

    return this.props.children; // eslint-disable-line react/destructuring-assignment
  }
}
