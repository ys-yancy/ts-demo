/**
 * 联系人
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Tip from '../../components/SessionTip/index';
import Routes from '../../components/SessionRoutes/index';
import Title from './title';
import Group from './group';
import Contacts from '../../components/contacts/index';
import getTitleList, { getGroupList } from './mobx';

export interface Titleface {
    name: string;
    nameSpell: string;
    id?: string;
}

export interface Titleface {
    groupName: string;
    all_count: number;
    all_online: number;
    isOpen: boolean;
    contacts: Contacts[];
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

    async clickTitle(title: Titleface) {
        let list = await getGroupList(title);

        this.setState({
            groupList: list
        });
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