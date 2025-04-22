import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as React from 'react';
import { router, Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { ClerkProvider } from '@clerk/clerk-expo'
// Prevent the splash screen from auto-hiding before asset loading is complete.
const App = ():JSX.Element => {
  return (
    <GestureHandlerRootView>
        <ClerkProvider tokenCache={tokenCache}>
            <Slot></Slot>
        </ClerkProvider>
    </GestureHandlerRootView>
  );
}
export default App;