import { useCallback } from 'react';
import { Button, TouchableNativeFeedback } from 'react-native';

import { Container, Text } from '~components';
import { useAppDispatch } from '~redux/hooks';
import { toggleTheme } from '~redux/slices';

const AuthScreen = () => {
  const dispatch = useAppDispatch();

  const handlePress = useCallback(() => {
    dispatch(toggleTheme());
  }, [dispatch]);

  return (
    <Container>
      <Text>AuthScreen</Text>
      <TouchableNativeFeedback>
        <Button onPress={handlePress} title="Toggle theme" />
      </TouchableNativeFeedback>
    </Container>
  );
};

export default AuthScreen;
