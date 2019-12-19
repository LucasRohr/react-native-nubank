import React from 'react'
import { invoiceCardFooterStyle } from './invoice-card-footer.style'
import { Text, TouchableOpacity } from 'react-native'

export const InvoiceCardFooter = ({ recentBuy }) => {

    return (
        <TouchableOpacity style={invoiceCardFooterStyle.invoiceCardFooterContainer} >
            <Text style={invoiceCardFooterStyle.invoiceCardFooterDescription} > {recentBuy.description} </Text>
        </TouchableOpacity>
    )

}
