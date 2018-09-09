/**
 * @desc 分组
 */

import * as React from 'react';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './index.scss';
import ContactList, { Contacts } from '../../components/contacts/index';

interface GroupInterface {
    groupName: string;
    all_count: number;
    all_online: number;
    isOpen: boolean;
    contacts: Contacts[];
}

export { GroupInterface as Group };

@cssModules(styles, { allowMultiple: true })
export default class Group extends React.Component<any, any> {
    static propsType: {}

    constructor(props: any) {
        super(props);

        this.state = {
            groups: []
        }
    }

    componentWillReceiveProps(props: any) {
        let { groupList } = props;

        this.setState({
            groups: groupList
        });
    }

    clickGroup(group: GroupInterface) {
        let prevGroupList = this.state.groups;
        let currentGroupName = group.groupName;
        let nextGroupList = null;
        

        nextGroupList = prevGroupList.map((item: GroupInterface) => {
            if (currentGroupName === item.groupName) {
                item.isOpen = !item.isOpen;
            };

            return item;
        });

        this.setState({
            groups: nextGroupList
        })
    }

    renderGroupItems(group: GroupInterface) {
        let contacts = group.contacts;
        return <ContactList.Items list={contacts}/>
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
        let hasData = groups.length > 0;
        return (
            <React.Fragment>
                {
                    hasData ? groups :
                            <div>
                                <span>no has data ...</span>
                            </div>
                }
            </React.Fragment>
        )
    }
}