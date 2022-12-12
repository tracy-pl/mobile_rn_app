import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appActions } from '~redux/app';
import { userActions } from '~redux/user';
import { trackingActions } from '~features/tracking/redux';

const allActions = {
  ...appActions,
  ...userActions,
  ...trackingActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
