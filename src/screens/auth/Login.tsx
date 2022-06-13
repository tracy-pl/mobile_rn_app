import React, { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Center } from 'native-base';

import { AuthContainer, InputField } from './components';
import { Button, Text } from '~components';
// import { useAppDispatch } from '~redux';
import { getResolver, ILoginFormSchema, loginSchema } from '~utils/validation';
import { NavigationService } from '~services';
import { ROUTES, STACKS } from '~constants';

const LoginScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormSchema>({
    resolver: getResolver(loginSchema),
    defaultValues: {
      email: 'test@gmail.com',
      password: '123456789',
    },
  });
  // const dispatch = useAppDispatch();
  // Mock RTK query req loading
  const [loading] = useState(false);
  const disabled = useMemo(
    () => !!errors?.email?.message || loading,
    [loading, errors?.email?.message],
  );

  // TODO: add real API call
  const onSubmit = useCallback((body: ILoginFormSchema) => {
    // eslint-disable-next-line no-console
    console.log(body);
    NavigationService.navigate(`${STACKS.ROOT}`);
  }, []);

  return (
    <AuthContainer title="Login">
      <InputField name="email" placeholder="Email Address" control={control} />
      <InputField name="password" placeholder="Password" control={control} />
      <Button
        onPress={handleSubmit(onSubmit)}
        isLoading={loading}
        isDisabled={disabled}
      >
        Send
      </Button>
      <Text>
        {loading
          ? 'Loading'
          : errors?.email?.message || errors?.password?.message}
      </Text>
      <Center>
        <Text
          onPress={() => NavigationService.navigate(ROUTES.FORGET_PASSWORD)}
        >
          Forgot Password
        </Text>
      </Center>
    </AuthContainer>
  );
};

export default LoginScreen;
