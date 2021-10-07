import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { priveteRoutes, publicRoutes, RouteNames } from '../routes';

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        isAuth
            ?
        <Switch>
            {priveteRoutes.map(route => 
                <Route path={route.path} 
                       exact={route.exact} 
                       component={route.component}
                       key={route.path}/>
            )}
            <Redirect to={RouteNames.TABLE}/>
        </Switch>
            :
        <Switch>
            {publicRoutes.map(route => 
                <Route path={route.path} 
                       exact={route.exact} 
                       component={route.component}
                       key={route.path}/>
            )}
            <Redirect to={RouteNames.LOGIN}/>
        </Switch>
    );
};

export default AppRouter;