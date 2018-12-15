import * as React from 'react';
import asyncComponent from '../asyncComponent/index';

let importMessage = (messageType: string) => () => {
    return require.ensure([], () => {
        return require(`./${messageType}/index`);
    });
}

export default function Message(props: any) {
    let { messageType = 'Text' } = props;
    let MessageComponent = asyncComponent(importMessage(messageType));
    return <MessageComponent {...props}/>
};