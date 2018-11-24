import * as React from 'react';
import SessionList from '../../components/session-list/index';
import * as sessionListApi from '../../components/session-list/mobx';
import './index.scss';

export default class MainContainer extends React.Component<any, any> {
    state: any = {
        sessionList: [],
    };

    constructor(options: any) {
        super(options);
    };

    componentWillMount() {
        this.getSessionList();
    };

    async getSessionList() {
        let sessionList = await sessionListApi.getSessionList();
        this.setState({
            sessionList: sessionList
        });
    }

    render() {
        let { sessionList } = this.state;

        return (
            <div className='message-page'>
                <SessionList dataSource={sessionList} />
            </div>
        )
    }
}