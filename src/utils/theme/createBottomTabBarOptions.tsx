import { ReactElement } from 'react';
import { Center, Circle } from 'native-base';
import { DefaultTheme } from 'styled-components';
import { RouteProp } from '@react-navigation/core/lib/typescript/src/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ParamListBase } from '@react-navigation/routers';
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { ROUTES } from '~constants';
import { Text } from '~components';

const getNavigationIcon = (color: string): { [key: string]: ReactElement } => {
  return {
    [ROUTES.MAIN]: (
      <FontAwesome5 name="location-arrow" size={18} color={color} />
    ),
    [ROUTES.MY_ROUTES]: (
      <MaterialCommunityIcons
        name="arrow-right-top-bold"
        size={26}
        color={color}
      />
    ),
    [ROUTES.SUBSCRIPTION]: (
      <Ionicons name="md-newspaper-outline" size={24} color={color} />
    ),
    [ROUTES.SETTINGS]: (
      <Ionicons name="ios-settings-outline" size={24} color={color} />
    ),
  };
};

const createBottomTabBarOptions =
  (theme: DefaultTheme) =>
  ({ route }: { route: RouteProp<ParamListBase> }) => ({
    // eslint-disable-next-line react/no-unstable-nested-components
    tabBarIcon: ({ color }: { color: string }) => {
      if (route.name === ROUTES.TRACKING) {
        return (
          <Circle mt={2} size="45px" bg="#2E9AFF">
            <AntDesign name="plus" size={25} color="white" />
          </Circle>
        );
      }

      return (
        <Center mt={2}>
          {getNavigationIcon(color)[route.name]}
          <Text fontSize="xs">{route.name}</Text>
        </Center>
      );
    },
    tabBarShowLabel: false,
    headerShown: false,
    tabBarInactiveTintColor: theme.colors.text,
    tabBarActiveTintColor: '#2E9AFF',
    tabBarStyle: {
      backgroundColor: theme.colors.background,
    },
  });

export default createBottomTabBarOptions;
