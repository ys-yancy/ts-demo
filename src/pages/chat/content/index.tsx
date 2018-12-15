import * as React from 'react';
import cssModules from 'react-css-modules';
import Message from '../../../components/Messages/Messages';
import styles from './index.scss';

export interface ChatContentPropps {

};

export interface ChatContentStates {

};

@cssModules(styles, { allowMultiple: true })
export default class ChatContent extends React.Component<ChatContentPropps, ChatContentStates> {
    getMessages() {

    }

    render() {
        return (
            <div styleName='chat-content'>
                <Message/>
            </div>
        )
    }
}