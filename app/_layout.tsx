import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as React from 'react';
import { router, Slot, Stack } from 'expo-router';
import { StytchClient, StytchProvider, useStytchUser } from '@stytch/react-native';
import { useEffect } from 'react';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';
import { View } from 'react-native';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const stytch = new StytchClient(process.env.EXPO_PUBLIC_STYTCH_PUBLIC_TOKEN ?? "");

const App = ():JSX.Element => {
  return (
    <StytchProvider stytch={stytch}>
      <View style={
        {
          alignContent: "center",
          justifyContent: "center",
          flex: 1
        }
      }>
        <Slot></Slot>
      </View>
  
    </StytchProvider>
  );
}
export default App;