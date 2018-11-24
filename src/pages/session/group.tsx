/**
 * @desc 分组
 */

import * as React from 'react';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './index.scss';
import ContactList, { ContactsInterface } from '../../components/contacts/index';

export interface GroupInterface {
    groupName: string;
    all_count: number;
    all_online: number;
    isOpen: boolean;
    contacts: ContactsInterface[];
};

export interface GroupStates {
    groups: any[];
}

@cssModules(styles, { allowMultiple: true })
export default class Group extends React.Component<any, any> {
    state: GroupStates = {
        groups: [],
    }

    componentWillMount() {
        this.update(this.props);
    }

    componentWillReceiveProps(nextProps: any) {
        this.update(nextProps);
    }

    update(props: any) {
        let { groupList: groups} = props;

        this.setState({
            groups,
        });
    }

    clickGroup(group: GroupInterface) {
        let currentName = group.groupName;
        let prevList = this.state.groups;
        let nextList;


        nextList = prevList.map((item: GroupInterface) => {
            if (currentName === item.groupName) {
                item.isOpen = !item.isOpen;
            };

            return item;
        });

        this.setState({
            groups: nextList
        })
    }

    renderGroupItems(group: GroupInterface) {
        let { contacts } = group;
        return <ContactList.ContactItem list={contacts}/>
    }

    renderGroup() {
        let { groups: groupList } = this.state;

        return groupList.map((group: GroupInterface) => {
            let { isOpen, groupName, all_online, all_count } = group;

            let classes = classNames({
                'session-group': true,
                'open': isOpen
            });

            let events = {
                onClick: () => {
                    this.clickGroup(group)
                }
            };

            return (
                <div {...events} styleName={classes} key={groupName}>
                    <div className='group-title'>
                        <span className="arrow-wrapper">
                            <span className='arrow' dangerouslySetInnerHTML={{ __html: '&#xe75c;' }}></span>
                        </span>
                        <span className="name">{groupName}</span>
                        <span className='count'>{all_online}/{all_count}</span>
                    </div>
                    
                    {
                        isOpen ? this.renderGroupItems(group) : null
                    }
                </div>
            )
        });
    }

    render() {
        let groups = this.renderGroup();
        let content: React.ReactNode = null;
        if (groups.length > 0) {
            content = groups;
        } else {
            content = (
                <div>
                    <span>当前没有数据...</span>
                </div>
            )
        };

        return content;
    }
}