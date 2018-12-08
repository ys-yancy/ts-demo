import * as React from 'react';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './index.scss';


export interface HeaderProps {

};

export interface HeaderStates {

};

@cssModules(styles, { allowMultiple: true })
export default class ChatHeader extends React.Component<HeaderProps, HeaderStates> {
    render() {
        return (
            <header styleName={classNames({'chat-header': true})}>
                <div styleName='content'>

                </div>
                <span styleName='go-back'></span>
                <ul styleName='funs'>
                    <li className='mobile'></li>
                    <li className='profile'></li>
                </ul>
            </header>
        )
    }
}