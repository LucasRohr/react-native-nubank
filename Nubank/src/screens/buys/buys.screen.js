import React, { useState, useCallback, useEffect } from 'react'
import { View, Text, TextInput, Button, ToastAndroid, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addBuy, getBuys } from '../../storage/actions'
import { getBuysFromStore } from '../../storage/reducers/buys/buys.reducer'

mapBuysFromStorage = (buys) => {
    return (
        buys.map((buy, key) => {
            return <Text key={key} > {buy} </Text>
        })
    )
}

export const BuysScreen = () => {

    const [lastBuy, setLastBuy] = useState('')
    const buysList = useSelector(state => state)

    const dispatch = useDispatch()
    const addBuyToStore = useCallback(() => dispatch(addBuy(lastBuy)), [dispatch])

    return (
        <ScrollView>
            <Text> Digite sua última compra: </Text>
            <TextInput placeholder="Digite aqui" onChangeText={setLastBuy} value={lastBuy} />
            <Button title="Registrar" onPress={addBuyToStore} />

            {mapBuysFromStorage(buysList)}

        </ScrollView>
    )
}
