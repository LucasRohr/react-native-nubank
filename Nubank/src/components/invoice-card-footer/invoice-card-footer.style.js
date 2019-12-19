import { StyleSheet } from 'react-native'

export const invoiceCardFooterStyle = StyleSheet.create({

    invoiceCardFooterContainer: {
        width: '100%',
        height: '21%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e4e6eb',
        padding: '10%'
    },

    invoiceCardFooterDescription: {
        fontSize: 13,
        color: '#6f7073'
    },

    recentBuyIcon: {
        width: 32,
        height: 38,
        marginRight: 10
    }

})