import { ReactElement } from 'react';
import { Center, Circle } from 'native-base';
import { RouteProp } from '@react-navigation/core/lib/typescript/src/types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ParamListBase } from '@react-navigation/routers';
import {
  AntDesign,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

import { ThemeInterface } from '~theme';
import { Text } from '~components';
import { IS_ANDROID, IS_IOS, ROUTES } from '~constants';

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
  (theme: ThemeInterface) =>
  ({ route }: { route: RouteProp<ParamListBase> }) => ({
    tabBarIcon: ({ color }: { color: string }) => {
      const iconMarginTop = IS_IOS ? 4 : 0;

      if (route.name === ROUTES.PRE_TRACKING) {
        return (
          <Circle mt={iconMarginTop} size="45px" bg={theme.allColors.blue1}>
            <AntDesign name="plus" size={25} color="white" />
          </Circle>
        );
      }

      return (
        <Center mt={iconMarginTop}>
          {getNavigationIcon(color)[route.name]}
          <Text fontSize="xs">{route.name}</Text>
        </Center>
      );
    },
    tabBarShowLabel: false,
    headerShown: false,
    tabBarInactiveTintColor: theme.colors.text,
    tabBarActiveTintColor: theme.allColors.blue1,
    tabBarStyle: {
      backgroundColor: theme.colors.background,
      height: IS_ANDROID ? 65 : 75,
    },
  });

export default createBottomTabBarOptions;
