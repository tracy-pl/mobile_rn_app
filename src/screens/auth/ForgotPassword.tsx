import React, { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Center } from 'native-base';
import { toggleTheme, useAppDispatch } from '~redux';

import { AuthContainer, InputField } from './components';
import { Button, Text } from '~components';
import {
  getResolver,
  forgetPasswordSchema,
  IForgetPswFormSchema,
} from '~utils/validation';
import { NavigationService } from '~services';
import { ROUTES } from '~constants';

const ForgotPasswordScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgetPswFormSchema>({
    resolver: getResolver(forgetPasswordSchema),
    defaultValues: {
      email: 'test@gmail.com',
    },
  });
  const dispatch = useAppDispatch();
  // Mock RTK query req loading
  const [loading, setLoading] = useState(false);
  const disabled = useMemo(
    () => !!errors?.email?.message || loading,
    [loading, errors?.email?.message],
  );

  // TODO: add real API call
  const onSubmit = useCallback(
    (body: IForgetPswFormSchema) => {
      // eslint-disable-next-line no-console
      console.log(body);
      dispatch(toggleTheme());
    },
    [dispatch],
  );

  return (
    <AuthContainer title="Forget password">
      <InputField name="email" placeholder="Email Address" control={control} />
      <Button
        onPress={handleSubmit(onSubmit)}
        isLoading={loading}
        isDisabled={disabled}
      >
        Send
      </Button>
      <Text>{loading ? 'Loading' : errors?.email?.message}</Text>
      <Center>
        <Text onPress={() => NavigationService.navigate(ROUTES.LOGIN)}>
          Back to login
        </Text>
      </Center>
    </AuthContainer>
  );
};

export default ForgotPasswordScreen;
