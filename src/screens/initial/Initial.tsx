import { Button } from 'react-native';

import { Container, Text } from '~components';
import { useAppDispatch } from '~redux/hooks';
import { finishIntroduction } from '~redux/slices';

const InitialScreen = () => {
  const dispatch = useAppDispatch();

  const onFinish = () => {
    dispatch(finishIntroduction());
  };

  return (
    <Container>
      <Text>InitialScreen</Text>
      <Button title="Finish" onPress={onFinish} />
    </Container>
  );
};

export default InitialScreen;
