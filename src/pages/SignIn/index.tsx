/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useRef} from 'react';
import {defaultTheme} from './../../styles/theme';

import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
  Alert,
} from 'react-native';
import * as Yup from 'yup';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import {useAuth} from '../../hooks/auth';
import {useNavigation} from '@react-navigation/native';
import SocialButton from '../../components/SocialButton';

import FeatherIcon from 'react-native-vector-icons/Feather';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  CreateAccount,
  CreateAccountText,
  SocialButtonsContainer,
  ForgotPassword,
  ForgotPasswordText,
} from './styles';
import getValidationErrors from '../../utils/getValidationError';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();
  const {signInWithEmailAndPassword, signInWithGoogle} = useAuth();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signInWithEmailAndPassword(data.email, data.password);
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);

          formRef.current?.setErrors(errors);

          return;
        }
        Alert.alert('Autenticação recusada.', 'Email ou senha inválidos');
      }
    },
    [signInWithEmailAndPassword],
  );

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        keyboardShouldPersistTaps="handled">
        <Container>
          <View>
            <Title>Faça seu logon</Title>
          </View>

          <Form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              width: '100%',
            }}>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="E-mail"
              keyboardType="email-address"
              name="email"
              icon="mail"
              returnKeyType="next"
            />

            <Input
              secureTextEntry
              placeholder="Senha"
              name="password"
              icon="lock"
              textContentType="newPassword"
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />

            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              Entrar
            </Button>
          </Form>

          <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>

          <SocialButtonsContainer>
            <SocialButton
              iconType="font-awesome"
              buttonTitle="Entrar com o Google"
              btnType="google"
              color="#de4d41"
              backgroundColor="#f5e7ea"
              onPress={() => signInWithGoogle()}
            />

            <SocialButton
              iconType="feather"
              buttonTitle="Entrar com o Telefone"
              btnType="phone"
              color="#617feb"
              backgroundColor="#e7eaf5"
              onPress={() => navigation.navigate('PhoneSignIn')}
            />
          </SocialButtonsContainer>
        </Container>

        <CreateAccount onPress={() => navigation.navigate('SignUp')}>
          <FeatherIcon
            name="log-in"
            size={20}
            color={defaultTheme.colors.white}
          />
          <CreateAccountText>Criar uma conta</CreateAccountText>
        </CreateAccount>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
