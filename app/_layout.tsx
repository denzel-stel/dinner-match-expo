import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as React from 'react';
import { router, Slot, Stack } from 'expo-router';
import { StytchClient, StytchProvider, useStytchUser } from '@stytch/react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView, Text } from 'react-native';
import SessionAuthentication from '@/components/SessionAuthentication';
// Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

const stytch = new StytchClient(process.env.EXPO_PUBLIC_STYTCH_PUBLIC_TOKEN ?? "");

const App = ():JSX.Element => {
  return (
    <GestureHandlerRootView>
      <StytchProvider stytch={stytch}>
        <SessionAuthentication>
          <Slot></Slot>
          </SessionAuthentication>
      </StytchProvider>
    </GestureHandlerRootView>
  );
}
export default App;