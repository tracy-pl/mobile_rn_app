import { Container } from '~components';
import { View } from 'react-native'
import { Heading, Text, Flex, Image } from 'native-base';

const MainScreen = () => {
  return (
    
    <Container>
      <Flex
        direction="row"
        justify="space-between"
        align="center"
      >
        <View>
          <Heading
            size="2xl"
            bold
          >
            Trasy
          </Heading>
          <Text
            fontSize="lg"
            color="#aaa"
          >
            Egzaminacyjne
          </Text>
        </View>

        <Image
          size="sm"
          borderRadius={100} 
          source={{ uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" }}
          alt="Header Avatar"
        />
      </Flex>
    </Container>
  );
};

export default MainScreen;
