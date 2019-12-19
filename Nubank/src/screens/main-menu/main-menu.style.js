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
        width: '100%',
        height: '20%'
    },

    paginationCarouselContainer: {
        width: '100%',
        height: '60%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '10%'
    },

    carouselContainer: {
        width: '100%',
        height: '75%',
        marginTop: '20%'
    }

})