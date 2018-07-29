/**
 * Mobx SessionList
*/

interface Session {
	name: string;
	avatar: string;
	lastMessage: any;
	sessionId: string;
	sessionName: string;
}


function getSessionId(): string {
	return Math.random().toString(10).substr(3);
}

function createSession(index: number): Session {
	return {
		name: `我的DEMO-${index}`,
		avatar: 'http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg',
		lastMessage: index + Math.random() * 100,
		sessionId: getSessionId(),
		sessionName: `我的DEMO-${index}`,
	};
}

const count: number = 20;

export async function getSessionList() {
	let result: Session[] = [];
	for (let i = 0; i < count; i++) {
		result.push(createSession(i));
	}

	return result;
}