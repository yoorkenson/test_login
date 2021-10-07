import axios from "axios";
import { AppDispatch } from "../..";
import { IData } from "../../../models/IData";
import {DataActionsEnum, SetDataAction, SetDataErrorAction, SetDataIsLoadingAction} from "./types";

export const DataActionCreators = {
    setData: (data: IData[]): SetDataAction => ({type: DataActionsEnum.SET_DATA, payload: data}),
    setDataIsLoading: (payload: boolean): SetDataIsLoadingAction => ({type: DataActionsEnum.SET_IS_LOADING, payload}),
    setError: (error: string): SetDataErrorAction => ({type: DataActionsEnum.SET_ERROR, payload: error}),
    fetchData: () => async (dispatch: AppDispatch) => {
        try {
            dispatch(DataActionCreators.setDataIsLoading(true))
            setTimeout(async () => {
                const response = await axios.get<IData[]>('./data.json')
                if (response && response.data.length !== 0) {
                    dispatch(DataActionCreators.setData(response.data))
                } else {
                    dispatch(DataActionCreators.setError('таблицы нет'))
                }
                dispatch(DataActionCreators.setDataIsLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(DataActionCreators.setError('Ошибка'))
        }
    }
}