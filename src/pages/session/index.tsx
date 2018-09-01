/**
 * 联系人
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tip from '../../components/SessionTip/index';
import Routes from '../../components/SessionRoutes/index';
import Title from './title';
import Group from './group';
import getTitleList, { getGroupList, Group as GroupInterface, Title as Titleface } from './mobx';


class Item extends React.Component<any>{
    getItems() {
        let items: string[] = ['好友', '家人'];

        return items.map((item: string, index: number) => {
            return (
                <div className="group-item" key={index}>
                    <span className="name"></span>
                    <div className="session-list">

                    </div>
                </div>
            )
        })
    }
    render() {
        return {

        }
    }
}

export default class Session extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.clickTitle = this.clickTitle.bind(this);

        this.state = {
            groupList: []
        }
    }

    componentWillMount() {
        this.getGroupList();
    }

    clickTitle(title: Titleface) {
        this.getGroupList(title);
    }

    async getGroupList(title?: Titleface) {
        let list = await getGroupList(title);

        this.setState({
            groupList: list
        });
    }

    getTipContent() {
        const tipProps = {
            avatar: 'https://pic.qqtn.com/up/2018-7/2018073108442699856.jpg',
            title: '坦白说',
            desc: ' 每一位好友都有闪亮点',
            inviteDesc: '122334在玩，赶快加入吧',
            isShowTip: true,
        };

        return <Tip {...tipProps}/>
    }

    render() {
        let { groupList } = this.state;
        const renderTip = this.getTipContent();
        
        return (
            <React.Fragment>
                {renderTip}
                <Routes />
                <Title currentTitle="friends" 
                    getTitleList={getTitleList}
                    clickCallback={this.clickTitle}
                    />
                <Group groupList={groupList}/>
            </React.Fragment>
        )
    }
}