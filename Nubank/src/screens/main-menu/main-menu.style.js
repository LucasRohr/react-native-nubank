import { StyleSheet } from 'react-native'
import { colors } from '../../style'

export const mainMenuStyle = StyleSheet.create({

    mainMenuContainer: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.primary,
        paddingVertical: 20,
        paddingLeft: 20
    },

    menuOptionsContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    }

})