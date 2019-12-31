import { BuysStorageEnum } from "../../../enums"

const initialState = []

export const buysReducer = (state = initialState, action) => {

    switch (action.type) {

        case BuysStorageEnum.ADD_BUY:
            return [
                ...state,
                action.payload
            ]

        case BuysStorageEnum.GET_BUYS:
            return state;

        default:
            return state
    }

}
