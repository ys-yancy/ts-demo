import * as React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import { getSessionList } from './mobx';
import styles from './item.scss';

interface Session {
    name: string;
    avatar: string;
    lastMessage: any;
    sessionId: string;
    sessionName: string;
}

interface Props {
    list: Session[];
}

@CssModules(styles, { allowMultiple: true })
export default class SessionItem extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }

    hideLoading() {
        this.setState({
            loading: false,
        });
    }

    componentWillReceiveProps(nextProps: Props) {
        
    }

    render() {
        const { list } = this.props;
        const Items = list.map((item: Session) => {
            const {
                name,
                avatar,
                lastMessage,
                sessionId,
                sessionName,
            } = item;
            return (
                <Link key={item.sessionId} to="/chat">
                    <li className='session-item'>
                        <div className='avatar-wrapper top'>
                            <div className='img-outer-wrapper'>
                                <div className='img-wrapper'>
                                    <img className='img' src={avatar} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className='content-wrapper bottom'>
                            <div className='name-and-time'>
                                <span className='name'>{name}</span>
                                <span className='time'>17:53</span>
                            </div>
                            <div className='message-and-count'>
                                <span className='message'>{lastMessage}</span>
                                <span className='count'>2</span>
                            </div>
                        </div>
                    </li>
                </Link>
            );
        });

        const session_list_classes = classnames({
            'session-list': true,
        });

        return (
            < ul styleName={ session_list_classes }>
                {Items}
            </ul>
        )
	}
}