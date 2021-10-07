import { AuthActionCreators } from "./auth/action-creators";
import { DataActionCreators } from "./data/action-creators";

export const alLActionCreators = {
    ...AuthActionCreators,
    ...DataActionCreators
}