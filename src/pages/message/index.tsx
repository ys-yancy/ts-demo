import * as React from 'react';
import SessionList from '../../components/session-list/index';
import './index.scss';

export default class MainContainer extends React.Component<any> {
    constructor(options: any) {
        super(options);
    };

    render() {
        return (
            <div className='page-message'>
                <SessionList />
            </div>
        )
    }
}