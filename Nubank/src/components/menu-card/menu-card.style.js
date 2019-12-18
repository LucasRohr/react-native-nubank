import { StyleSheet } from 'react-native'
import { colors } from '../../style'

export const menuCardStyle = StyleSheet.create({

    menuCardContainer: {
        width: '90%',
        height: '35%',
        marginBottom: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: colors.secondary
    }

})
