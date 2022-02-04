import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navigator } from './src/navigator/Navigator';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import QuicksandRegular from './assets/fonts/Quicksand-Regular.ttf';
import QuicksandBold from './assets/fonts/Quicksand-Bold.ttf';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Quicksand-Regular': QuicksandRegular,
    'Quicksand-Bold': QuicksandBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <StatusBar />
      <Navigator />
    </NavigationContainer>
  );
}
