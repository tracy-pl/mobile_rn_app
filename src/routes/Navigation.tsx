import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { navigationRef } from '~services/navigation.service';
// import { useAppSelector } from '~redux';
import { LoginScreen, ForgotPasswordScreen, Main } from '~screens';
import { ROUTES, STACKS } from '~constants';

const Stack = createStackNavigator();

const AuthStack = createStackNavigator();
const RootStack = createBottomTabNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName={ROUTES.LOGIN}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
    <Stack.Screen
      name={ROUTES.FORGET_PASSWORD}
      component={ForgotPasswordScreen}
    />
  </AuthStack.Navigator>
);

const RootNavigator = () => (
  <RootStack.Navigator
    initialRouteName={ROUTES.MAIN}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={ROUTES.MAIN} component={Main} />
  </RootStack.Navigator>
);

const App = () => {
  // const isLoggedIn = useAppSelector(state => state.user.loggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TODO: add loading screen and auth logic */}
        {/* {!isLoggedIn ? ( */}
        <Stack.Screen name="AuthStack" component={AuthNavigator} />
        {/* ) : ( */}
        <Stack.Screen name={STACKS.ROOT} component={RootNavigator} />
        {/* )} */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
