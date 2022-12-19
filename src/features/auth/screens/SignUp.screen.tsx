import React, { useCallback, useMemo, useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Center, ChevronLeftIcon, HStack } from 'native-base';

import { AuthContainer, InputField } from '../components';
import { Button, Text } from '~components';
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
    // eslint-disable-next-line prettier/prettier
    [loading, errors?.email?.message]
  );

  const onSubmit = useCallback((body: ISignUpFormSchema) => {
    console.info({ body });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'flex-start' }}>
      <View style={{ paddingHorizontal: 12 }}>
        <Text onPress={() => NavigationService.navigate(ROUTES.LOGIN)}>
          <HStack space={2}>
            <ChevronLeftIcon size="5" mt="0.5" color={colors.blue2} />
          </HStack>
          <Text
            style={{
              fontFamily: fonts.inter.regular,
              fontSize: 22,
              color: colors.blue2,
            }}
          >
            Zaloguj się
          </Text>
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
        <Button
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
          isLoading={loading}
          isDisabled={disabled}
        >
          <Text
            style={
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              styles.buttonText
            }
          >
            Zarejestruj się
          </Text>
        </Button>
        <Text>
          {loading
            ? 'Loading'
            : errors?.email?.message || errors?.password?.message}
        </Text>
        <Center>
          <Text style={{ textAlign: 'center' }}>
            By signing up you agree to our{' '}
            <Text
              style={
                // eslint-disable-next-line @typescript-eslint/no-use-before-define
                styles.boldBlueText
              }
            >
              Privacy Policy
            </Text>{' '}
            and{' '}
            <Text
              // eslint-disable-next-line @typescript-eslint/no-use-before-define
              style={styles.boldBlueText}
            >
              Terms of Use
            </Text>
          </Text>
        </Center>
      </AuthContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.blue1,
    width: '100%',
    borderRadius: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: fonts.inter.semiBold,
  },
  boldBlueText: {
    fontFamily: fonts.inter.bold,
    color: colors.blue1,
    fontWeight: '700',
  },
});

export default SignUpScreen;
