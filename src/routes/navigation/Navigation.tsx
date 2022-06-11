import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from '~services/navigation.service';
import { useAppSelector } from '~redux';
import { LoginScreen, ForgetPswScreen, Main } from '~screens';

const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
const AppStack = createStackNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false, animationEnabled: false }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="ForgotPassword" component={ForgetPswScreen} />
  </AuthStack.Navigator>
);

const AppNavigator = () => (
  <AppStack.Navigator>
    <Stack.Screen name="Home" component={Main} />
  </AppStack.Navigator>
);

const App = () => {
  const isLoggedIn = useAppSelector(state => state.user.loggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animationEnabled: false }}
      >
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={AppNavigator} />
        ) : (
          <Stack.Screen name="Test" component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
