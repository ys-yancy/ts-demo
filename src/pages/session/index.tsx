/**
 * 联系人
 */
import * as React from 'react';
import Tip from '../../components/SessionTip/index';
import Routes from '../../components/SessionRoutes/index';
import Title from './title';
import Group from './group';
import Device from './device/device';
import getTitleList, { getGroupList } from './mobx';

export interface TitleInterface {
    name: string;
    nameSpell: string;
    id?: string;
}

export interface SessionStates {
    groupList: any[];
    showDevicePanel: boolean;
}

export default class Session extends React.Component<any, any> {
    state: SessionStates = {
        groupList: [],
        showDevicePanel: false,
    }
    constructor(props: any) {
        super(props);
        this.clickTitle = this.clickTitle.bind(this);
    }

    componentWillMount() {
        this.getGroupList();
    }

    async clickTitle(title: TitleInterface) {
        if (title.nameSpell === 'device') {
            this.setState({
                showDevicePanel: true
            });

            return;
        };

        let list = await getGroupList(title);
        this.setState({
            groupList: list,
            showDevicePanel: false
        });
    }

    async getGroupList(title?: TitleInterface) {
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
        let { groupList, showDevicePanel } = this.state;
        let renderTip = this.getTipContent();
        let content: React.ReactNode = null;

        if (showDevicePanel) {
            content = <Device />;
        } else {
            content = <Group groupList={groupList} />;
        }

        return (
            <React.Fragment>
                {renderTip}
                <Routes />
                <Title currentTitle="friends"
                    getTitleList={getTitleList}
                    clickCallback={this.clickTitle}
                />
                {content }
            </React.Fragment>
        );
    }
}