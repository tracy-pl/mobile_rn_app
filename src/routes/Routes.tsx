import { Initial } from '~screens';
import { useAppSelector } from '~redux/hooks';

import Main from './navigation';

const RootNavigation = () => {
  const { checkedIn } = useAppSelector(state => state.app);

  if (!checkedIn) return <Initial />;

  return <Main />;
};

export default RootNavigation;
