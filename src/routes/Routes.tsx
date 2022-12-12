import { Initial } from '~screens';
import { useAppSelector } from '~hooks';
import { isIntroductionFinished } from '~redux/app';

import Main from './Navigation';

const RootNavigation = () => {
  const introductionFinished = useAppSelector(isIntroductionFinished);

  if (!introductionFinished) return <Initial />;

  return <Main />;
};

export default RootNavigation;
