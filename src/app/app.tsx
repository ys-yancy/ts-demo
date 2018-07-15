import * as React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import RouterContainer from '../router/RouterContainer';

export default class App extends React.Component<{}> {
    render(): any {
        return (
            <BrowserRouter>
                <React.Fragment>
                    <RouterContainer />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}