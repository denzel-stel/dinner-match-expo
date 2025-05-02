import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import * as React from 'react';
import { router, Slot, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// Prevent the splash screen from auto-hiding before asset loading is complete.
const App = ():JSX.Element => {
  return (
    <GestureHandlerRootView>
        <Slot></Slot>
    </GestureHandlerRootView>
  );
}
export default App;