import React from 'react'
import { Image, View, Text } from 'react-native'
import { menuHeaderStyle } from './menu-header.style'
import NubankLogo from '../../assets/svg/nu-icon.svg'
import ArrowDown from '../../assets/svg/arrow-down.svg'

export const MenuHeader = ({ username }) => {

    return (
        <View style={menuHeaderStyle.menuHeader} >
            <View style={menuHeaderStyle.logoNameContainer} >
                <Image style={menuHeaderStyle.nubankLogo} source={NubankLogo} />
                <Text style={menuHeaderStyle.usernameText} > {username} </Text>
            </View>

            <Image style={menuHeaderStyle.arrowDown} source={ArrowDown} />
        </View>
    )

}
