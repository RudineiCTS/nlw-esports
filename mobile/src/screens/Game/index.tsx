import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context'
import {useNavigation, useRoute} from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'
import { GameParams } from '../../@types/navigation';

import { Background } from '../../components/Background';
import { Heading } from '../../components/Heading';

import logoImg from '../../assets/logo-nlw-esports.png'
import { THEME } from '../../theme';
import { styles } from './styles';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { useEffect, useState } from 'react';
import api from '../../server/api';


export function Game() {
  const navigation = useNavigation()
  const route = useRoute();
  const game = route.params as GameParams;
  const [gameInfo, setGameInfo] = useState<DuoCardProps[]>();
  
  useEffect(() => {
    api.get(`/games/${game.id}/ads`)
    .then(response => setGameInfo(response.data));
  },[])

  function handleGoBack() {
    navigation.goBack();
  }
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name='chevron-thin-left'
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />

          </TouchableOpacity>
          <Image
            source={logoImg}
            style={styles.logo}
          />
        <View style={styles.right}/>
        </View>
        
        <Image 
          source={{uri:game.bannerUrl}}
          style={styles.cover}
          resizeMode='cover'
        />
        <Heading
          title={game.title}
          subtitle='Conecte-se e comece a jogar!'
        />
        <FlatList
          data={gameInfo}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contetList}
          style={styles.containerList}
          renderItem={({item}) => (
            <DuoCard
              data={item}
              onConnect={()=>{}}
            />
          )}
        />
       

      </SafeAreaView>
    </Background>
  );
}