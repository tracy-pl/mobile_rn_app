import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { useForm } from 'react-hook-form';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Center, ChevronLeftIcon, HStack } from 'native-base';
import { AuthContainer, InputField } from '../../components';
import {
  getResolver,
  ISignUpFormSchema,
  signUpSchema,
} from '../../utils/validation';
import { NavigationService } from '~services';
import { ROUTES } from '~constants';
import { ButtonText, Login, RegisterButton, Terms } from './styles';
import { colors } from '~theme';

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
    // eslint-disable-next-line prettier/prettier
    [loading, errors?.email?.message]
  );

  const onSubmit = useCallback((body: ISignUpFormSchema) => {
    console.info({ body });
  }, []);

  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 12, height: '45%' }}>
        <Text onPress={() => NavigationService.navigate(ROUTES.LOGIN)}>
          <HStack space={2}>
            <ChevronLeftIcon size="5" mt="0.5" color={colors.blue2} />
          </HStack>
          <Login>Zaloguj się</Login>
        </Text>
        <ImageBackground
          source={require('../../../../../assets/images/signup-screen-img.png')}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            zIndex: -1,
            position: 'absolute',
            left: -20,
            top: 20,
          }}
        />
      </View>
      <View style={{ height: '55%' }}>
        <AuthContainer title="Zarejestruj się ✍️">
          <InputField
            name="email"
            placeholder="Email Address"
            control={control}
          />
          <InputField name="password" placeholder="Hasło" control={control} />
          <InputField name="name" placeholder="Imię" control={control} />
          <RegisterButton
            onPress={handleSubmit(onSubmit)}
            isLoading={loading}
            isDisabled={disabled}
          >
            <ButtonText>Zarejestruj się</ButtonText>
          </RegisterButton>
          <Text>
            {loading
              ? 'Loading'
              : errors?.email?.message || errors?.password?.message}
          </Text>
          <Center>
            <Text style={{ textAlign: 'center' }}>
              By signing up you agree to our <Terms>Privacy Policy</Terms> and{' '}
              <Terms>Terms of Use</Terms>
            </Text>
          </Center>
        </AuthContainer>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
