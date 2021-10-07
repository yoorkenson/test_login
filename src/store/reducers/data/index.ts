import { IData } from "../../../models/IData"
import { DataAction, DataActionsEnum, DataState } from "./types"

const initialState: DataState = {
    data: [] as Array<IData>,
    isLoading: false,
    error: ''
}

export default function dataReducer(state = initialState, action: DataAction): DataState {
    switch (action.type) {
        case DataActionsEnum.SET_DATA:
            return {...state, data: action.payload, isLoading: false}
        case DataActionsEnum.SET_ERROR:
            return {...state, error: action.payload, isLoading: false}
        case DataActionsEnum.SET_IS_LOADING:
            return {...state, isLoading: action.payload}
        default: 
        return state
    }
}