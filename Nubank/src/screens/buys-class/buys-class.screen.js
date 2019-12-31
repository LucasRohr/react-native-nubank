import React, { PureComponent } from 'react'
import { Text, TextInput, Button, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import * as buyActions from '../../storage/actions'
import { bindActionCreators } from 'redux';
import BuysCounter from '../../components/buys-counter/buys-counter.component'

class BuysClass extends PureComponent {
    
    constructor(props) {
        super(props)
        this.state = {
            lastBuy: ''
        }
    }

    setLastBuy = (lastBuy) => {
        this.setState({ lastBuy })
    }

    mapBuysFromStorage = () => (
        this.props.buys.map((buy, key) => (
            <Text key={key} > {buy} </Text>
        ))
    )

    addBuy = () => {
        this.props.addBuy(this.state.lastBuy)

        this.setState({ lastBuy: '' })
    }

    render() {
        return (
            <ScrollView>
                <Text> Digite uma compra: </Text>
                <TextInput placeholder="Digite aqui" onChangeText={(text) => this.setLastBuy(text)} value={this.state.lastBuy} />
                <Button title="Registrar" onPress={this.addBuy} />
                <BuysCounter/>

                {this.mapBuysFromStorage()}

            </ScrollView>
        )
    }

}

const mapStateToProps = state => (
    {
        buys: state.buys
    }
)

const mapDispatchToProps = dispatch => bindActionCreators(buyActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BuysClass);
