import { TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient'
import { styles } from './styles';
import { THEME } from '../../theme';
import { GameInterface } from '../../types/gamesInterface';



interface Props extends TouchableOpacityProps {
  data: GameInterface
}

export function GameCard({data, ...rest}:Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground 
        style={styles.cover}
        source={{uri: data.bannerUrl}}
      >

        <LinearGradient
          colors={THEME.COLORS.FOOTER}
          style={styles.footer}
        >
          <Text style={styles.name}>
            {data.title}
          </Text>
          <Text style={styles.ads}>
            {data._count.Ads} Anúncios
          </Text>

        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}