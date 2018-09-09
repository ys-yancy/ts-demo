import * as React from 'react';
import ContactItem, { Contacts } from './Item';
import { getContactList } from './mobx';

interface State {
    loading: boolean;
    contactList: Contacts[];
}

export { Contacts };

export default class ContactList extends React.Component<any, State> {
    static Items = ContactItem;
    constructor(props: any) {
        super(props);

        this.state = {
            loading: true,
            contactList: [],
        }
    }

    //todo 编辑不支持async 之后具体改进一下
    componentDidMount() {
        this.getcontactList();
    }

    getcontactList() {
        getContactList().then(list => {
            this.hideLoading();
            this.setState({
                contactList: list
            });
        });
    }

    hideLoading() {
        this.setState({
            loading: false,
        });
    }


    render() {
        const { loading: isShowLoading, contactList: list } = this.state;

        return (
            isShowLoading ?
                <span style={{ display: 'block', height: '5rem', paddingTop: '2rem', textAlign: 'center', fontSize: '.42rem' }}>加载中...</span> :
                <ContactItem list={list} />
        );
    }
}