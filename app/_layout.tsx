import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as React from 'react';
import { router, Stack } from 'expo-router';
import { StytchClient, StytchProvider, useStytchUser } from '@stytch/react-native';
import { useEffect } from 'react';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const stytch = new StytchClient(process.env.EXPO_PUBLIC_STYTCH_PUBLIC_TOKEN ?? "");
console.log("token", process.env.EXPO_PUBLIC_STYTCH_PUBLIC_TOKEN)
const App = ():JSX.Element => {
  const { user } = useStytchUser();
  useEffect(() => {
    if (user) console.log("user!");
    else {
      console.log("No user!")
    }
    if (user) {
      router.replace('/(tabs)/Recipes')
    }
    else {
      router.replace('/login/Login');
    }
  }, [user])

  const defaultOptions: any = {headerShown:true};
  return (
    <StytchProvider stytch={stytch}>
      <Stack>
        <Stack.Screen name="login/Login"  options={defaultOptions} />
        <Stack.Screen name="(tabs)" options={defaultOptions} />
      </Stack>
    </StytchProvider>
  );
}
export default App;