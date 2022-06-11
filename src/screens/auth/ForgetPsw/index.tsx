import 'fast-text-encoding';

import React, { useCallback, useMemo, useState } from 'react';
import { Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { VStack } from 'native-base';

import { Button, Input, Text } from '~components';
import { toggleTheme, useAppDispatch } from '~redux';
import {
  getResolver,
  forgetPasswordSchema,
  IForgetPswFormSchema,
} from '~utils/validation';
import { theme } from '~theme';

const ForgetPswScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForgetPswFormSchema>({
    resolver: getResolver(forgetPasswordSchema),
  });
  const dispatch = useAppDispatch();
  // Mock RTK query req loading
  const [loading, setLoading] = useState(false);
  const disabled = useMemo(
    () => !!errors?.email?.message || loading,
    [loading, errors?.email?.message],
  );

  const onSubmit = useCallback(
    ({ email }: IForgetPswFormSchema) => {
      Keyboard.dismiss();
      // setLoading(true);
      dispatch(toggleTheme());
    },
    [dispatch],
  );

  return (
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
      <Button
        onPress={handleSubmit(onSubmit)}
        isLoading={loading}
        isDisabled={disabled}
      >
        Send
      </Button>
      <Text>{loading ? 'Loading' : errors?.email?.message}</Text>
    </VStack>
  );
};

export default ForgetPswScreen;
