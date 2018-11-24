import * as React from 'react';
import ContactItem, { Contacts } from './Item';
import * as contactApi  from './mobx';

export { Contacts as ContactsInterface };


export interface ContactListProps {
    prefixCls?: string
}

export interface ContactListStates {
    loading: boolean;
    contactList: Contacts[];
}

export default class ContactList extends React.Component<ContactListProps, ContactListStates> {
    static ContactItem: typeof ContactItem = ContactItem;

    static defaultProps = {
        prefixCls: 'app-contact-list',
    };

    state: any = {
        loading: true,
        contactList: [],
    }

    componentDidMount() {
        this.getContactList();
    }

    async getContactList() {
        let contactList = await contactApi.getContactList();
        this.setState({
            contactList,
            loading: false,
        });
    };

    renderLoading() {
        let styles = {
            display: 'block', 
            height: '5rem', 
            paddingTop: '2rem', 
            textAlign: 'center', 
            fontSize: '.42rem'
        }
        return (
            <span style={{...styles}}>加载中...</span>
        )
    }

    render() {
        let { prefixCls } = this.props;
        let { loading: isShowLoading, contactList } = this.state;
        let contents: React.ReactNode = null;

        if (isShowLoading) {
            contents = this.renderLoading();
        } else {
            contents =  (
                <ul className={`${prefixCls}-inner`}>
                    <ContactItem list={contactList} />
                </ul>
            );
        }
        
        return contents;
    }
}