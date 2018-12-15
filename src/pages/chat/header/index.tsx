import * as React from 'react';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import customHistory from '../../../common/customBrowserHistory/index';
import styles from './index.scss';


export interface HeaderProps {

};

export interface HeaderStates {

};

@cssModules(styles, { allowMultiple: true })
export default class ChatHeader extends React.Component<HeaderProps, HeaderStates> {
    goBack() {
        customHistory.goBack();
    }

    render() {
        return (
            <header styleName={classNames({'chat-header': true})}>
                <div styleName='content'>
                    <span>和Yancy聊天中</span>
                </div>
                <span styleName='go-back' onClick={this.goBack.bind(this)} dangerouslySetInnerHTML={{ __html: '&#xe60e;'}}>
                   
                </span>
                <ul styleName='funs'>
                    <li styleName='mobile' dangerouslySetInnerHTML={{ __html: '&#xe60d;'}}></li>
                    <li styleName='profile' dangerouslySetInnerHTML={{ __html: '&#xe680;'}}></li>
                </ul>
            </header>
        )
    }
}