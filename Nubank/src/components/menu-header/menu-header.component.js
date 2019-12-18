import React from 'react'
import { Image, View, Text } from 'react-native'
import { MenuHeaderStyle } from './menu-header.style'
import NubankLogo from '../../assets/img/nubank-logo.png'

export const MenuHeader = ({ username }) => {

    return (
        <View style={MenuHeaderStyle.menuHeader} >
            <Image style={MenuHeaderStyle.nubankLogo} source={NubankLogo} />
            <Text style={MenuHeaderStyle.usernameText} > {username} </Text>
        </View>
    )

}
