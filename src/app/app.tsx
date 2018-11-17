import * as React from 'react';
import { Router, HashRouter } from 'react-router-dom';
import RouterContainer from '../router/RouterContainer';
import customHistory from '../common/customBrowserHistory/index';

export default class App extends React.Component<any, any> {
    render(): any {
        return (
            <Router history={customHistory}>
                <React.Fragment>
                    <RouterContainer />
                </React.Fragment>
            </Router>
        )
    }
}