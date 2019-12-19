import React from 'react'
import { View, Text } from 'react-native'
import { menuCardStyle } from './menu-card.style'
import { MenuCards } from '../../enums'

const renderInvoiceCard = () => {
    return <Text>a</Text>
}

const renderAccountCard = () => {
    return <Text>b</Text>
}

const renderRewardsCard = () => {
    return <Text>c</Text>
}

const renderCardBasedOnProp = (item) => {
    switch (item.type) {
        case MenuCards.INVOICE:
            return renderInvoiceCard()

        case MenuCards.ACCOUNT:
            return renderAccountCard()

        case MenuCards.REWARDS:
            return renderRewardsCard()

        default:
            break;
    }
}

export const MenuCard = ({ item }) => {

    return (
        <View style={menuCardStyle.menuCardContainer} >
            {renderCardBasedOnProp(item)}
        </View>
    )

}
