import { LogBox } from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ignoreWarnings from 'ignore-warnings';

ignoreWarnings('warn', ['ViewPropTypes', '[react-native-gesture-handler]']);

LogBox?.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  'Remote debugger',
]);
