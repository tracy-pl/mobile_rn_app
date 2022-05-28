import { useState } from 'react';
import { IUser } from '~types/models';

// TODO: Refactor auth method
const useAuth = (): IUser => {
  // const { loggedIn } = useAppSelector(state => state.user);
  const [
    user,
    // setUser
  ] = useState<IUser>(null);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  // }, [dispatch]);

  return user;
};

export default useAuth;
