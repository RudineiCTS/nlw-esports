import { Image, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigation} from '@react-navigation/native'


import { useGame } from '../../hooks/useGames';

import { Background } from '../../components/Background';
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png'
import { styles } from './styles';
import { GameInterface } from '../../types/gamesInterface';

export function Home() {
  const navigation = useNavigation()
  const {games}= useGame()

  function HandleOpenGame({id, title,bannerUrl }:GameInterface){
    navigation.navigate('game',{id, title, bannerUrl})
  }
  return (
    <Background>
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.imageLogo}
      />
      <Heading
        title='Encontre seu Duo!'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        renderItem={({item})=>(
          <GameCard 
          data={item}
          onPress={() => HandleOpenGame(item)}
        />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
     
    </SafeAreaView>
    </Background>
  );
}