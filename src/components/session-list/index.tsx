import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import SessionItem, { SessionInterface } from '../session/session';
import styles from './index.scss';

export interface SessionListProps {
	prefixCls?: string;
	dataSource: SessionInterface[];
	renderEmpty?: string;
}

export interface SessionListStates {
	sessionList: SessionInterface[];
}

@cssModules(styles, { allowMultiple: true })
export default class SessionList extends React.Component<SessionListProps, SessionListStates> {
	static SessionItem: typeof SessionItem = SessionItem;

	static defaultProps: SessionListProps = {
		prefixCls: 'app-session-list',
		dataSource: [],
		renderEmpty: '当前没有数据',
	};

	state: any = {
		sessionList: []
	};

	shouldComponentUpdate(nextProps: any, currProps: any) {
		nextProps = JSON.stringify(nextProps);
		currProps = JSON.stringify(currProps);

		if (nextProps === currProps) {
			return false;
		} else {
			return true;
		}
	};

	componentWillReceiveProps(nextProps: SessionListProps) {
		let { dataSource: sessionList } = nextProps;

		this.setState({
			sessionList,
		})
	}

	renderEmpty() {
		let { renderEmpty } = this.props;
		return (
			<li styleName="session-list_empty">
				<p>{ renderEmpty }</p>
			</li>
		);
	}

	render() {
		let { sessionList } = this.state;
		let content = null;

		if (sessionList.length) {
			content = sessionList.map((session: SessionInterface) => 
				(<SessionItem key={session.sessionId} session={session}/>)
			);
		} else {
			content = this.renderEmpty();
		}

		return (<ul styleName="session-list">
			{ content }
		</ul>)
	}
}