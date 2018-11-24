/**
 * @desc session
 * @author Ys
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './session.scss';

export interface SessionInterface {
    name: string;
    avatar: string;
    sessionId: string;
    sessionName: string;
    lastMessage?: string;
};

export interface SessionItemProps {
    prefixCls?: string;
    session: SessionInterface;
};

export interface SessionItemStates {
    [key: string]: any;
};

@cssModules(styles, { allowMultiple: true })
export default class SessionItem extends React.Component<SessionItemProps, SessionItemStates> {
    static defaultProps = {
        prefixCls: 'app-session',
    };

    render() {
        let { session, prefixCls } = this.props;
        let { avatar, sessionName, lastMessage } = session;

        return (
            <Link to="/chat">
                <li styleName={`${prefixCls}-session-item`}>
                    <div className='avatar-wrapper'>
                        <div className='img-wrapper'>
                            <img className='img' src={avatar} alt="" />
                        </div>
                    </div>
                    <div className='content-wrapper'>
                        <div className='name-time'>
                            <span className='name'>{sessionName}</span>
                            <span className='time'>17:53</span>
                        </div>
                        <div className='message-count'>
                            <span className='message'>{lastMessage}</span>
                            <span className='count'>2</span>
                        </div>
                    </div>
                </li>
            </Link>
        )
    }
}