import React from 'react'
import { View, Text } from 'react-native'
import { menuCardStyle } from './menu-card.style'
import { MenuCards } from '../../enums'
import { InvoiceCard } from '../'

const renderInvoiceCard = (user) => {
    return <InvoiceCard user={user} />
}

const renderAccountCard = () => {
    return <Text>b</Text>
}

const renderRewardsCard = () => {
    return <Text>c</Text>
}

const renderCardBasedOnProp = (type, user) => {
    switch (type) {
        case MenuCards.INVOICE:
            return renderInvoiceCard(user)

        case MenuCards.ACCOUNT:
            return renderAccountCard()

        case MenuCards.REWARDS:
            return renderRewardsCard()

        default:
            break;
    }
}

export const MenuCard = ({ item, user }) => {

    return (
        <View style={menuCardStyle.menuCardContainer} >
            {renderCardBasedOnProp(item, user)}
        </View>
    )

}
