import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { useTheme } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useAppSelector } from '~hooks';
import { isLoggedIn } from '~redux/user/user.selectors';
import { navigationRef } from '~services/navigation.service';
import { MainScreen, MyTracks, Subscription, Settings } from '~screens';

import {
  LoginScreen,
  ForgotPasswordScreen,
  SignUpScreen,
} from '~features/auth/screens';
import PreTrackingScreen from '~features/tracking/screens/PreTracking.screen';

import { ROUTES, STACKS } from '~constants';
import { createBottomTabBarOptions } from '~utils/theme';
import TrackingScreen from '~features/tracking/screens/Tracking.screen';

const Stack = createStackNavigator();
const AuthStack = createStackNavigator();
const RootStack = createBottomTabNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator
    initialRouteName={ROUTES.LOGIN}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
    <Stack.Screen name={ROUTES.SIGNUP} component={SignUpScreen} />
    <Stack.Screen
      name={ROUTES.FORGET_PASSWORD}
      component={ForgotPasswordScreen}
    />
  </AuthStack.Navigator>
);

const RootNavigator = () => {
  const theme = useTheme();

  return (
    <RootStack.Navigator screenOptions={createBottomTabBarOptions(theme)}>
      <Stack.Screen name={ROUTES.MAIN} component={MainScreen} />
      <Stack.Screen name={ROUTES.MY_ROUTES} component={MyTracks} />
      <Stack.Screen
        name={ROUTES.PRE_TRACKING}
        component={PreTrackingScreen}
        options={{ tabBarStyle: { display: 'none' } } as StackNavigationOptions}
      />
      <Stack.Screen name={ROUTES.SUBSCRIPTION} component={Subscription} />
      <Stack.Screen name={ROUTES.SETTINGS} component={Settings} />
    </RootStack.Navigator>
  );
};

const App = () => {
  const _isLoggedIn = useAppSelector(isLoggedIn);

  console.info({ _isLoggedIn });

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* TODO: add loading screen and auth logic */}
        <Stack.Screen name={STACKS.AUTH} component={AuthNavigator} />
        <Stack.Screen name={STACKS.ROOT} component={RootNavigator} />
        {/* TODO: move later */}
        <Stack.Screen
          name={ROUTES.TRACKING}
          component={TrackingScreen}
          options={
            {
              headerShown: false,
              tabBarStyle: { display: 'none' },
            } as StackNavigationOptions
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
