import { IData } from "../../../models/IData";

export interface DataState {
    data: Array<IData>;
    isLoading: boolean;
    error: string;
}

export enum DataActionsEnum {
    SET_DATA = 'SET_DATA',
    SET_ERROR = 'SET_ERROR',
    SET_IS_LOADING = 'SET_IS_LOADING'
}

export interface SetDataAction {
    type: DataActionsEnum.SET_DATA;
    payload: Array<IData>
}

export interface SetDataErrorAction {
    type: DataActionsEnum.SET_ERROR;
    payload: string
}

export interface SetDataIsLoadingAction {
    type: DataActionsEnum.SET_IS_LOADING;
    payload: boolean
}

export type DataAction = 
    SetDataAction |
    SetDataErrorAction |
    SetDataIsLoadingAction