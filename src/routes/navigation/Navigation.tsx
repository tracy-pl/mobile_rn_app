import 'react-native-gesture-handler';

import { useAuth } from '~utils/hooks';
import { Main, Auth } from '~screens';

export default function App() {
  const user = useAuth();

  if (!user) return <Auth />;

  // TODO: ADD NAV STACK
  // return <RootStack />;
  return <Main />;
}
