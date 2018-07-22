import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import asyncComponent from '../components/asyncComponent/index';
import routers from '../router/index';

interface FadingRouteParams {
    [propName: string]: any;
};

export default class RouterContainer extends React.Component<{}> {
    protected FadingRoute: (params: FadingRouteParams) => any = function (params: FadingRouteParams): any {
        const { component: Component, routers: routers, ...reset } = params;
        return (
            <Route exact {...reset} render={(props: any): any => {
                return (
                    <Component {...props} routers={routers}/>
                )
            }}/>
        );
    };

    public componentDidMount(): void{
    };

    render(): any {
        return (
            <Switch>

                {
                    <Route exact path='/index' render={(): any => {
                        return <Redirect to='index/message' />
                    }} />
                }
                
                {
                    routers.map((item: any, index: number): any => {
                        // https://reacttraining.com/react-router/web/example/route-config;
                        let routers = item.children;
                        if (item.component) {
                            const component: any = asyncComponent(item.component);
                            return <this.FadingRoute path={item.url} component={component} key={index} routers={routers} />
                        }
                    })
                }

                {
                    <Route exact path='' render={(): any => {
                        return <Redirect to='index/message' />
                    }} />
                }

            </Switch>
        )
    }

}