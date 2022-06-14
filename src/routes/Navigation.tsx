import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
  AntDesign,
} from '@expo/vector-icons';

import { navigationRef } from '~services/navigation.service';
// import { useAppSelector } from '~redux';
import {
  LoginScreen,
  ForgotPasswordScreen,
  Main,
  MyTracks,
  Subscription,
  Settings,
  Add,
} from '~screens';
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
    screenOptions={{
      headerShown: false,
      // tabBarShowLabel: false,
      tabBarActiveTintColor: '#2E9AFF',
    }}
  >
    {/* <Stack.Screen name={ROUTES.MAIN} component={Main} /> */}
    <Stack.Screen
      name="Trasy"
      component={Main}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome5 name="location-arrow" size={18} color={color} />
        ),
      }}
    />
    <Stack.Screen
      name="Moje trasy"
      component={MyTracks}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons
            name="arrow-right-top-bold"
            size={26}
            color={color}
          />
        ),
      }}
    />
    <Stack.Screen
      name="Add"
      component={Add}
      options={{
        tabBarIcon: ({ color }) => (
          <AntDesign
            // style={{
            //   backgroundColor: '#2E9AFF',
            // }}
            name="plus"
            size={30}
            color={color}
            // color="#fff"
          />
        ),
      }}
    />
    <Stack.Screen
      name="Subskrypcja"
      component={Subscription}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="md-newspaper-outline" size={24} color={color} />
        ),
      }}
    />
    <Stack.Screen
      name="Ustawienia"
      component={Settings}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-settings-outline" size={24} color={color} />
        ),
      }}
    />
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
