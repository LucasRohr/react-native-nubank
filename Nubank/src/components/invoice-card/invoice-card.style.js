import { StyleSheet } from 'react-native'
import { colors } from '../../style'

export const invoiceCardStyle = StyleSheet.create({

    invoiceCardContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    creditCard: {
        width: 35,
        height: 35
    },

    creditCardLabel: {
        fontSize: 13,
        color: 'grey'
    },

    creditCardContainer: {
        width: '75%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    invoiceCardBody: {
        width: '100%',
        height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '7%'
    },

    invoiceCardBodyValuesContainer: {
        width: '80%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },

    invoiceContainerLabel: {
        fontSize: 15,
        color: colors.invoice,
        fontWeight: 'bold'
    },

    invoiceValue: {
        fontSize: 35,
        color: colors.invoice
    },

    invoiceValueBold: {
        fontWeight: 'bold'
    },

    limitLabel: {
        color: 'grey'
    },

    limit: {
        fontSize: 16,
        color: colors.limit,
        fontWeight: 'bold'
    }

})