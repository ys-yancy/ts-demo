import * as React from 'react';
import ChatHeader from './header/index';
import ChatFooter from './footer/index'
import ChatContent from './content/index';


export interface ChatProps {

};

export interface ChatStates {

};


export default class Chat extends React.Component<ChatProps, ChatStates> {
    render() {

        return (
            <section className='chat-main'>
                <ChatHeader/>
                <ChatContent/>
                <ChatFooter/>
            </section>
        )
    }
}