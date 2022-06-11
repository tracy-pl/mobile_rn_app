import 'fast-text-encoding';

import React, { useCallback, useMemo, useState } from 'react';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { VStack } from 'native-base';

import { Button, Container, Input, Text } from '~components';
import { useAppDispatch } from '~redux';
import { getResolver, ILoginFormSchema, loginSchema } from '~utils/validation';
import { theme } from '~theme';
import { NavigationService } from '~services';

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
  const dispatch = useAppDispatch();
  // Mock RTK query req loading
  const [loading, setLoading] = useState(false);
  const disabled = useMemo(
    () => !!errors?.email?.message || loading,
    [loading, errors?.email?.message],
  );

  const onSubmit = useCallback(
    ({ email, password }: ILoginFormSchema) => {
      Keyboard.dismiss();
      // setLoading(true);
      NavigationService.navigate('Home');
    },
    [dispatch],
  );

  const onForgot = () => NavigationService.navigate('ForgotPassword');

  return (
    <Container>
      <VStack justifyItems="center" space={theme.sizes.xSmall}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder="Your email: "
              />
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                onChangeText={onChange}
                value={value}
                onBlur={onBlur}
                placeholder="Your password: "
              />
            );
          }}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
          isDisabled={disabled}
        >
          Send
        </Button>
        <Text>{loading ? 'Loading' : errors?.email?.message}</Text>
        <Button onPress={onForgot}>Forgot Password</Button>
      </VStack>
    </Container>
  );
};

export default LoginScreen;
