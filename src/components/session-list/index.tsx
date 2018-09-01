import * as React from 'react';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import SessionItem from './Item';
import { getSessionList } from './mobx';

interface Session {
	name: string;
	avatar: string;
	lastMessage: any;
	sessionId: string;
	sessionName: string;
}

interface Props {

}

interface State {
	loading: boolean;
	sessionList: Session[];
}

export default class SessionList extends React.Component<Props, State> {
	static Items = SessionItem;
	constructor(props: Props) {
		super(props);

		this.state = {
			loading: true,
			sessionList: [],
		}
	}

	//todo 编辑不支持async 之后具体改进一下
	componentDidMount() {
		this.getSessionList();
	}

	getSessionList() {
		getSessionList().then(list => {
			this.hideLoading();
			this.setState({
				sessionList: list
			});
		});
	}

	hideLoading() {
		this.setState({
			loading: false,
		});
	}


	render() {
		const { loading: isShowLoading, sessionList: list } = this.state;

		return (
			isShowLoading ? 
				<span style={{ display: 'block', height: '5rem', paddingTop: '2rem', textAlign: 'center', fontSize:'.42rem'}}>加载中...</span>:
				<SessionItem list={list} />
		);
	}
}