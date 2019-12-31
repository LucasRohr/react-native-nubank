import React from 'react'
import { Text } from 'react-native'
import { connect } from "react-redux"

const BuysCounter = (props) => {

    return <Text> Você tem {props.buys.length} compras até agora </Text>

}

const mapStateToProps = state => ({
    buys: state.buys
})

export default connect(mapStateToProps)(BuysCounter)
