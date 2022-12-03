import { VStack } from 'native-base';

import { Container, Text } from '~components';
import { useAppDispatch, finishIntroduction } from '~redux';
import LocationPermissionForm from '../../components/LocationPermissionForm';

const InitialScreen = () => {
  const dispatch = useAppDispatch();

  const onFinish = () => {
    dispatch(finishIntroduction());
  };

  return (
    <Container>
      <VStack>
        <Text>Onboarding screen</Text>
        <LocationPermissionForm onSubmit={onFinish} btnText="Finish" />
      </VStack>
    </Container>
  );
};

export default InitialScreen;
