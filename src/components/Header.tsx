import { View } from 'react-native';
import { Heading, Text, Flex, Avatar } from 'native-base';

const Header = () => {
  return (
    <Flex direction="row" justify="space-between" align="center">
      <View>
        <Heading size="2xl" bold>
          Trasy
        </Heading>
        <Text fontSize="lg" color="#aaa">
          Egzaminacyjne
        </Text>
      </View>

      <Avatar
        bg="cyan.500"
        alignSelf="center"
        size="lg"
        source={{
          uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        }}
      >
        HS
      </Avatar>
    </Flex>
  );
};

export default Header;
