/**
 * session Titls mobx
 */
export interface Title {
    name: string;
    nameSpell: string;
    id?: string;
}

let getTitleId: () => string = () => {
    return Math.random().toString(10).substr(3);
};

let createTitle: <T>(item: T) => T = (item) => {
    return Object.assign({
        id: getTitleId()
    }, item);
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
}, {
    name: '通讯录',
    nameSpell: 'contacts'
}, {
    name: '公众号',
    nameSpell: 'frindes'
}];

export default async function() {
    return list.map((item: Title) => {
        return createTitle<Title>(item);
    })
}