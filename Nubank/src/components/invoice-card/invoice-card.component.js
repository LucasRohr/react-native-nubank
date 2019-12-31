import React from 'react'
import { View, Text, Image } from 'react-native'
import CreditCard from '../../assets/svg/credit-card.svg'
import { invoiceCardStyle } from './invoice-card.style'
import { InvoiceCardFooter } from '../invoice-card-footer/invoice-card-footer.component'

const formatInvoice = (invoice) => {
    const replacedValue = invoice.replace('.', ',')

    return (
        <Text>
            <Text style={invoiceCardStyle.invoiceValueBold} >{replacedValue.substring(0, 2)}</Text>
            {replacedValue.substring(2, replacedValue.length)}
        </Text>
    )
}

const formatAccountValue = (value, isInvoice) => {
    const valueAsString = value.toString()
    return isInvoice ? formatInvoice(valueAsString) : valueAsString.replace('.', ',')
}

const returnInvoiceBodyValues = (user) => {
    return (
        <View style={invoiceCardStyle.invoiceContainer} >
            <Text style={invoiceCardStyle.invoiceContainerLabel} > FATURA ATUAL </Text>

            <Text style={invoiceCardStyle.invoiceValue} > R$ {formatAccountValue(user.invoice, true)} </Text>

            <Text style={invoiceCardStyle.limitLabel} >
                Limite disponível <Text style={invoiceCardStyle.limit} > R$ {formatAccountValue(user.limit, false)} </Text>
            </Text>
        </View>
    )
}

export const InvoiceCard = ({ user }) => {   

    return (
        <View style={invoiceCardStyle.invoiceCardContainer} >

            <View style={invoiceCardStyle.invoiceCardBody} >
                <View style={invoiceCardStyle.invoiceCardBodyValuesContainer} >

                    <View style={invoiceCardStyle.creditCardContainer} >
                        <Image style={invoiceCardStyle.creditCard} source={CreditCard} />
                        <Text style={invoiceCardStyle.creditCardLabel} > Cartão de crédito </Text>
                    </View>

                    {returnInvoiceBodyValues(user)}

                </View>
            </View>

            <InvoiceCardFooter recentBuy={user.recentBuy} />
        </View>
    )

}
