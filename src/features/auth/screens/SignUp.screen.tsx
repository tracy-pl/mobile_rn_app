import React, { useCallback, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Center } from 'native-base';

import { AuthContainer, InputField } from '../components';
import { Button, Text } from '~components';
import {
  getResolver,
  ISignUpFormSchema,
  signUpSchema,
} from '../utils/validation';
import { NavigationService } from '~services';
import { ROUTES } from '~constants';

const SignUpScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpFormSchema>({
    resolver: getResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  // const dispatch = useAppDispatch();
  // Mock RTK query req loading
  const [loading] = useState(false);
  const disabled = useMemo(
    () => !!errors?.email?.message || loading,
    [loading, errors?.email?.message],
  );

  const onSubmit = useCallback((body: ISignUpFormSchema) => {
    console.info({ body });
  }, []);

  return (
    <AuthContainer title="Registration">
      <InputField name="email" placeholder="Email Address" control={control} />
      <InputField name="password" placeholder="Password" control={control} />
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
        <Text onPress={() => NavigationService.navigate(ROUTES.LOGIN)}>
          Back to Sign in
        </Text>
      </Center>
    </AuthContainer>
  );
};

export default SignUpScreen;
