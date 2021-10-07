import Login from "../pages/Login"
import Table from "../pages/Table"

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    TABLE = '/'
}

export const publicRoutes: IRoute[] = [
    {
        path: RouteNames.LOGIN, exact: true, component: Login
    }
]

export const priveteRoutes: IRoute[] = [
    {
        path: RouteNames.TABLE, exact: true, component: Table
    }
]