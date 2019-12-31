import { BuysStorageEnum } from '../../../enums'

export const addBuy = (buy) => {
    return {
        type: BuysStorageEnum.ADD_BUY,
        payload: buy
    }
}

export const getBuys = () => {
    return {
        type: BuysStorageEnum.GET_BUYS
    }
}
