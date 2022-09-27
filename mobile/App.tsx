import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from '@expo-google-fonts/inter'

import {Home} from './src/screens/Home'
import { Background } from './src/components/Background';
import { Loading } from './src/components/Loading';
import { GameProvider } from './src/hooks/useGames';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoad] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })
  return (
    <GameProvider>
      <Background >
        <StatusBar
          barStyle="light-content"
          backgroundColor='transparent'
          translucent
        />
        {fontsLoad ? <Routes /> : <Loading/>}
      
      </Background>
    </GameProvider>
  );
}

