import { StyleSheet } from 'react-native'
import { colors } from '../../style'

export const menuCardStyle = StyleSheet.create({

    menuCardContainer: {
        width: '100%',
        height: '100%',
        marginBottom: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: colors.secondary
    }

})
