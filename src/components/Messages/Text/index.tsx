/**
 * @desc 文本消息
 */
import * as React from 'react';
import withSubscriptionMessage from '../Base/index';

export interface TextProps {
    message: any,
    [key: string]: any;
};

export interface TextStates {
    content: any;
};

export class Text extends React.Component<TextProps, TextStates> {
    static defaultProps: TextProps = {
        message: {
            value: '暂不支持查看该消息'
        }
    };

    state: TextStates = {
        content: null
    }

    componentWillReceiveProps(nextProps: TextProps) {
        console.log(nextProps)
    }

    renderValue() {
        let { message } = this.props;
        return (
            <span className='content'>{message.value}</span>
        )
    }

    render() {
        let value = this.renderValue();
        return (
            <div className="msg-text msg-text-item">
                { value }
            </div>
        )
    }
}

export default withSubscriptionMessage(Text);