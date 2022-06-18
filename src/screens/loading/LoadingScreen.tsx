import { Spinner, HStack } from 'native-base';

import { Container } from '~components';

const LoadingScreen = () => {
  return (
    <Container>
      <HStack flex={1} justifyContent="center">
        <Spinner size="lg" />
      </HStack>
    </Container>
  );
};

export default LoadingScreen;
