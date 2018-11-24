/**
 * Conatcs Titls mobx
 */

import { ContactsInterface as Contacts } from '../../components/contacts/index';
import { createContact } from '../../components/contacts/mobx';

interface Title {
    name: string;
    nameSpell: string;
    id?: string;
}

interface Group {
    groupName: string;
    all_count: number;
    all_online: number;
    isOpen: boolean;
    contacts: Contacts[];
}

let getTitleId: () => string = () => {
    return Math.random().toString(10).substr(3);
};

let createTitle: <T>(item: T) => T = (item) => {
    return Object.assign({
        id: getTitleId()
    }, item);
}

let getContacts: <T>(count?: number) => T[] = (count = 20) => {
    let result: any[] = [];
    for (let i = 0; i < count; i++) {
        result.push(createContact(i));
    };

    return result;
}

let list = [{
    name: '好友',
    nameSpell: 'friends'
}, {
    name: '群聊',
    nameSpell: 'groupChat'
}, {
    name: '设备',
    nameSpell: 'device'
}];
// , {
//     name: '通讯录',
//         nameSpell: 'contacts'
// }, {
//     name: '公众号',
//         nameSpell: 'frindes'
// }

let friends = [
    {
        groupName: '特别关心',
        all_count: 5,
        all_online: 2,
        isOpen: false,
        contacts: getContacts<Contacts>(5)
    },
    {
        groupName: '同学',
        all_count: 100,
        all_online: 90,
        isOpen: false,
        contacts: getContacts<Contacts>(100)
    },
    {
        groupName: '朋友',
        all_count: 80,
        all_online: 50,
        isOpen: false,
        contacts: getContacts<Contacts>(80)
    },
    {
        groupName: '家人',
        all_count: 15,
        all_online: 10,
        isOpen: false,
        contacts: getContacts<Contacts>(15)
    }
]

let groupChat = [
    {
        groupName: '高中聚会',
        all_count: 50,
        all_online: 48,
        isOpen: false,
        contacts: getContacts<Contacts>(50)
    },
    {
        groupName: '大学',
        all_count: 100,
        all_online: 90,
        isOpen: false,
        contacts: getContacts<Contacts>(100)
    }
]

export default async function() {
    return list.map((item: Title) => {
        return createTitle<Title>(item);
    })
}

export async function getGroupList(title: Title) {
    if (title && title.nameSpell === 'groupChat') {
        return groupChat;
    }

    return friends;
}