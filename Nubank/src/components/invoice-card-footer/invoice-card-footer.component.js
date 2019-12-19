import React from 'react'
import { invoiceCardFooterStyle } from './invoice-card-footer.style'
import { Text, TouchableOpacity, Image } from 'react-native'
import Utensils from '../../assets/svg/utensils.svg'

export const InvoiceCardFooter = ({ recentBuy }) => {

    return (
        <TouchableOpacity style={invoiceCardFooterStyle.invoiceCardFooterContainer} >
            <Image style={invoiceCardFooterStyle.recentBuyIcon} source={Utensils} />
            <Text style={invoiceCardFooterStyle.invoiceCardFooterDescription} > {recentBuy.description} </Text>
        </TouchableOpacity>
    )

}
