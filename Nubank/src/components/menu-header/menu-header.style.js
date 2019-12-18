import { StyleSheet } from 'react-native'
import { colors } from '../../style'

export const MenuHeaderStyle = StyleSheet.create({

    menuHeader: {
        width: '100%',
        height: '15%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5%'
    },

    usernameText: {
        fontSize: 25,
        color: colors.secondary,
        fontFamily: "Neue Helvetica",
        fontWeight: 'bold'
    },

    nubankLogo: {
        width: '45%',
        height: '100%'
    }

})
