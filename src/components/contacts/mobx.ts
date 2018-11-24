/**
 * Mobx Contacts
*/

function getContactId(): string {
    return Math.random().toString(10).substr(3);
}

export function createContact(index: number): any {
    return {
        name: `我的f-${index}`,
        avatar: 'https://pic.qqtn.com/up/2018-7/2018073108442699856.jpg',
        userId: getContactId(),
        sign: '我是' + index,
        status: '在线',
        statusSpell: 'onLine',
        device: 'iphone'
    };
}

export async function getContactList(count = 20) {
    let result: any[] = [];
    for (let i = 0; i < count; i++) {
        result.push(createContact(i));
    }

    return result;
}