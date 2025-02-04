import React, { useEffect } from 'react';
import { useStytch, StytchUI, useStytchUser, RNUIProducts, OTPMethods, OAuthProviders } from '@stytch/react-native';
import { navigate } from 'expo-router/build/global-state/routing';



const Login = (): JSX.Element  => {
  console.log("LOGIN!")
  const config = {
    productConfig: {
      products: [RNUIProducts.emailMagicLinks, RNUIProducts.oauth, RNUIProducts.passwords, RNUIProducts.otp],
      emailMagicLinksOptions: {},
      oAuthOptions: {
        providers: [OAuthProviders.Google, OAuthProviders.Apple, OAuthProviders.Github],
      },
      otpOptions: {
        methods: [OTPMethods.SMS, OTPMethods.WhatsApp],
        expirationMinutes: 10,
      },
      sessionOptions: {
        sessionDurationMinutes: 30,
      },
      passwordOptions: {},
    },
  };
  const stytch = useStytch();
  const { user } = useStytchUser();
  useEffect(() => {
    if (user) {
        console.log("Logged in!")
    //   navigate('(tabs)');
    }
  }, [user]);

  return (
    <StytchUI client={stytch} config={config}></StytchUI>
  );
};

export default Login;


