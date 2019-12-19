import { StyleSheet } from 'react-native'
import { colors } from '../../style'

export const menuOptionStyle = StyleSheet.create({

    menuOptionContainer: {
        width: 100,
        height: '65%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        borderRadius: 5,
        padding: 7,
        marginRight: 8,
        backgroundColor: colors.primaryLighter
    },

    optionCardTitle: {
        fontSize: 13,
        color: colors.secondary,
        textAlign: 'left'
    },

    optionIcon: {
        width: 38,
        height: 30
    }

})
