import React from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { CheckCircle} from 'phosphor-react-native';
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string
    onClose:() => void
}

export function DuoMatch({discord,onClose, ...rest}:Props) {
  return (
    <Modal
    transparent
    statusBarTranslucent
    {...rest}
    >
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity 
                    style={styles.closeIcon}
                    onPress={onClose}
                >
                    <MaterialIcons
                        name='close'
                        size={20}
                        color={THEME.COLORS.CAPTION_500}
                    />
                </TouchableOpacity>

                <CheckCircle
                    size={64}
                    color={THEME.COLORS.SUCCESS}
                    weight='bold'
                /> 
                <Heading 
                    style={{alignItems:'center', marginTop:24}}
                    title='Lets Play!'
                    subtitle='Agora é só começar a jogar!'
                />

                <TouchableOpacity
                style={styles.discordButton}>
                    <Text style={styles.label}>
                        Adicione seu Discord
                    </Text>
                </TouchableOpacity>

            

                <Text style={styles.discord}>
                    {discord}
                </Text>
            </View>
        </View>
    </Modal>
  );
}