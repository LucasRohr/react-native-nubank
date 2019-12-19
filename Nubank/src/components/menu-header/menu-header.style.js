import { StyleSheet } from 'react-native'
import { colors } from '../../style'

export const menuHeaderStyle = StyleSheet.create({

    menuHeader: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15%'
    },

    usernameText: {
        fontSize: 23,
        color: colors.secondary,
        fontFamily: "Neue Helvetica",
        fontWeight: 'bold'
    },

    nubankLogo: {
        width: 52,
        height: 39
    },

    logoNameContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    arrowDown: {
        width: 18,
        height: 12,
        marginTop: '3%'
    }

})
