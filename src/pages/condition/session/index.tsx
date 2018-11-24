/**
 * @desc 好友动态
 * @author Ys
 */

import * as React from 'react';
import './index.scss';

const sessionList = [
    {
        session: 'friendsCondition',
        sessionName: '好友动态',
        avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543055308817&di=8755f07e3eae9bdf17f8fc8a8450fcf5&imgtype=0&src=http%3A%2F%2Fwww.sj520.cn%2Fsc%2Fima%2Fqq_sj520_02.jpg',
    }

]

export interface ConditionSessionProps {
    prefixCls?: string;
};

export interface ConditionSessionStates {
    list: any[];
};

export default class ConditionSession extends React.Component<ConditionSessionProps, ConditionSessionStates> {
    static defaultProps: ConditionSessionProps  = {
        prefixCls: 'conditon-session',
    };

    state: ConditionSessionStates = {
        list: sessionList,
    }

    getItems() {
        let { list } = this.state;

        return list.map((session) => (
            <li className='condition-session'>
                <img className='avatar' src={session.avatar} alt="" />
                <div className='name'>{session.sessionName}</div>
                <span className="arrow icon" dangerouslySetInnerHTML={{ __html: '&#xe75c;' }}></span>
            </li>
        ));
    }


    render() {
        let { list } = this.state;
        let { prefixCls } = this.props;

        const items = this.getItems();
        const childrenList: Array<React.ReactNode> = [];

        React.Children.forEach(items, (child: any, index) => {
            childrenList.push(React.cloneElement(child, {
                key: list[index].session,
            }))
        });

        return (
            <ul className={`${prefixCls}-inner`}>
                { childrenList }
            </ul>
        )
    }
}