import React, { useEffect } from 'react';
import { useStytch, StytchUI, useStytchUser, RNUIProducts, OTPMethods, OAuthProviders } from '@stytch/react-native';
import { router } from 'expo-router';
import stytchStyle from '@/assets/styles/stytch';
import { createUser, getUser, getUserByStych } from '@/controllers/users';
import UsersService from '@/services/UsersService';
import StytchService from '@/services/StytchService';
import AsyncStorageService from '@/services/AsyncStorageService';
import api from '@/controllers/axios';



const Login = (): JSX.Element  => {
  console.log("login screen!")
  const config = {
    styles: stytchStyle,
    productConfig: {
      products: [RNUIProducts.passwords],
      emailMagicLinksOptions: {},
      oAuthOptions: {
        providers: [OAuthProviders.Google, OAuthProviders.Apple, OAuthProviders.Github],
      },
      otpOptions: {
        methods: [OTPMethods.SMS, OTPMethods.WhatsApp],
        expirationMinutes: 10,
      },
      sessionOptions: {
        sessionDurationMinutes: 60,
      },
      passwordOptions: {},
    },
  };
  const stytch = useStytch();

  const { user } = useStytchUser();
  
  stytch.session.onChange(StytchService.onSessionChange)

  
  useEffect(() => {
    // user is authenticated
    if (user) {
      const tokens = stytch.session.getTokens()

      if (tokens) {
        AsyncStorageService.saveToken(tokens.session_jwt);
        console.log("session token", tokens.session_jwt)

         // Set authentication header when 
        api.defaults.headers.common['Authorization'] = `Bearer ${tokens.session_jwt}`
      }

      UsersService.persistStytchUserLocally(user);
      router.navigate("/(app)/(tabs)");
    }
  }, [user])
  
  return (
    <StytchUI client={stytch} config={config}></StytchUI>
  );
};

export default Login;


