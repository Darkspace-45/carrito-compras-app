import {StyleSheet} from 'react-native';
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from '../src/commons/constants';

//Gestionar los estilos

export const styles = StyleSheet.create({
    globalTitle:{
        color: SECONDARY_COLOR,
        fontSize: 27,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    contentBody:{
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingTop: 30
    },
    titleHeaderBody:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'black'
    },
    textBody:{
        fontSize: 15,
        fontWeight: 'bold'
    },
    inputText:{
        backgroundColor: INPUT_COLOR,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    contentInput:{
        marginTop: 30,
        gap: 20,
    },
    button:{
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 10,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 20,
        width: '40%',
        alignSelf: 'center',
    },
    buttonText:{
        color: SECONDARY_COLOR,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },
    iconpassword:{
        position: 'absolute',
        right: 20,
        zIndex: 1,
        marginTop: 10
    },
});