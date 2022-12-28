import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/native';
import { Center, ChevronLeftIcon, HStack } from 'native-base';

import { AuthContainer, InputField } from '../components';
import { Button, Container } from '~components';
import {
  getResolver,
  ISignUpFormSchema,
  signUpSchema,
} from '../utils/validation';
import { NavigationService } from '~services';
import { ROUTES } from '~constants';
import { colors, fonts } from '~theme';

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
    <Container>
      <View style={{ paddingHorizontal: 12 }}>
        <Text onPress={() => NavigationService.navigate(ROUTES.LOGIN)}>
          <HStack space={2}>
            <ChevronLeftIcon size="5" mt="0.5" color={colors.blue2} />
          </HStack>
          <Login>Zaloguj się</Login>
        </Text>
        <ImageBackground
          source={require('../../../../assets/images/signup-screen-img.png')}
          resizeMode="cover"
          style={{ width: 268, height: 268, marginTop: -20, zIndex: -1 }}
        />
      </View>
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
    </Container>
  );
};
const Login = styled.Text`
  font-family: ${fonts.inter.regular};
  font-size: 22px;
  color: ${colors.blue2};
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;
const RegisterButton = styled(Button)`
  background-color: ${colors.blue1};
  width: 100%;
  border-radius: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const Terms = styled.Text`
  font-family: ${fonts.inter.bold};
  color: ${colors.blue1};
  font-weight: 700;
`;

export default SignUpScreen;
