import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { appActions } from '~redux/app';
import { trackingActions } from '~features/tracking/redux';

const allActions = {
  ...appActions,
  ...trackingActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
