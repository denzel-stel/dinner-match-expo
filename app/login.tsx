import React, { useEffect } from 'react';
import { useStytch, StytchUI, useStytchUser, RNUIProducts, OTPMethods, OAuthProviders } from '@stytch/react-native';
import { router } from 'expo-router';
import stytchStyle from '@/assets/styles/stytch';


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
  
  return (
    <StytchUI client={stytch} config={config}></StytchUI>
  );
};

export default Login;


