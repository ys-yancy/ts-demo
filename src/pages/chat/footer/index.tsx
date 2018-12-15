import * as React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.scss';

const AudioInput: React.SFC<any> = (props) => {
    return (
        <div className="audio-input">
            <span>按住说话</span>
        </div>
    );
};

const WriteInput: React.SFC<any> = (props) => {
    return (
        <div className="write-input">
            <input type="text"/>
        </div>
    )
};

export interface ChatFooterProps {

};

export interface ChatFooterStates {
    isAudio: boolean;
    switchedStr: '&#xe624;' | '&#xe619;'
};

@cssModules(styles, { allowMultiple: true })
export default class ChatFooter extends React.Component<ChatFooterProps, ChatFooterStates> {
    state: ChatFooterStates = {
        isAudio: true,
        switchedStr: '&#xe624;'
    }

    private switch() {
        let { isAudio, switchedStr } = this.state;

        if (switchedStr === '&#xe624;') {
            switchedStr = '&#xe619;'
        }
        else {
            switchedStr = '&#xe624;'
        }

        this.setState({
            isAudio: !isAudio,
            switchedStr: switchedStr
        })
    }

    renderContent() {
        let { isAudio } = this.state;

        if (isAudio) {
            return <AudioInput/>
        } else {
            return <WriteInput/>
        }
    }

    render() {
        const { switchedStr } = this.state;
        const content = this.renderContent()

        return (
            <footer styleName='chat-footer'>
                <div styleName='active-content'>
                    {content}
                </div>
                <span styleName='switch' onClick={this.switch.bind(this)} dangerouslySetInnerHTML={{ __html: switchedStr }}></span>
                <ul styleName='funs'>
                    <li styleName='emoji' dangerouslySetInnerHTML={{ __html: '&#xe61e;' }}></li>
                    <li styleName='more' dangerouslySetInnerHTML={{ __html: '&#xe629;' }}></li>
                </ul>
            </footer>
        )
    }
}