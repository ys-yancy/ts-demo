import * as React from 'react';
import classNames from 'classnames';
import './index.scss';

export interface BaseProps {

};

export interface BasesState {
    message: any;
}

export default function withSubscriptionMessage(WrappedComponent: any, options?: any) {
    return class extends React.Component<BaseProps, BasesState> {
        state: BasesState = {
            message: {
                isSystemMessage: true,
                isMyMessage: false,
                content: {},
                value: '欢迎进入会话'
            }
        }

        isMyMessage() {
            return this.state.message.isMyMessage;
        }

        isSystemMessage() {
            return this.state.message.isSystemMessage;
        }

        render() {
            let isMyMessage = this.isMyMessage();
            let isSystemMessage = this.isSystemMessage()
            let classes = classNames({
                'msg': true,
                'msg-item-wrapper': true,
                'msg-item-wrapper-mine': isMyMessage,
                'msg-item-wrapper-system': isSystemMessage,
                'msg-item-wrapper-other': !isMyMessage && !isSystemMessage,
            });

            let props = {
                message: this.state.message,
                ...this.props
            }
            return (
                <div className={ classes }>
                    <WrappedComponent  {...props}/>
                </div>
            )
        }
    }
}
