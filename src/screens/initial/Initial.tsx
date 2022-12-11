import { VStack } from 'native-base';

import { Container, Text, LocationPermissionForm } from '~components';
import { useActions } from '~hooks';

const InitialScreen = () => {
  const { finishIntroduction } = useActions();

  return (
    <Container>
      <VStack>
        <Text>Onboarding screen</Text>
        <LocationPermissionForm
          onSubmit={finishIntroduction}
          btnText="Finish"
        />
      </VStack>
    </Container>
  );
};

export default InitialScreen;
