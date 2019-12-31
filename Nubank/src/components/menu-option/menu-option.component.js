import React from 'react'

import { TouchableOpacity, Text, Image } from 'react-native'
import { menuOptionStyle } from './menu-option.style'

export function MenuOption({ icon, title }) {

    return (
        <TouchableOpacity style={menuOptionStyle.menuOptionContainer} >
            <>
                <Image style={menuOptionStyle.optionIcon} source={icon} />

                <Text style={menuOptionStyle.optionCardTitle} > {title} </Text>
            </>
        </TouchableOpacity>
    )

}
