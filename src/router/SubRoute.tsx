import * as React from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../components/asyncComponent/index';
// https://reacttraining.com/react-router/web/example/route-config;
const SubRoute = (route: any): any => {
    let Component = asyncComponent(route.component);
    return (
        <Route
            path={route.url}
            render={props => (
                <Component {...props} routers={route.children} />
            )}
        />
    )
}

export default SubRoute;