import { useState } from 'react';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

// import { useAppDispatch } from '~redux/hooks';
// import { authenticate } from '~redux/slices';
import { IUser } from '~types/models';

// const auth = getAuth();

// TODO: Refactor auth method
export const useAuth = (): IUser => {
  // const { loggedIn } = useAppSelector(state => state.user);
  const [
    user,
    // setUser
  ] = useState<IUser>(null);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   return onAuthStateChanged(auth, data => {
  //     if (data) {
  //       setUser(data);
  //       dispatch(authenticate(data));
  //     }
  //   });
  // }, [dispatch]);

  return user;
};
