/**
 * 坦白说
 */
import * as React from 'react';
import classnames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './index.scss';

export interface Props {
    avatar: string;
    title: string;
    desc: string;
    inviteDesc: string;
    isShowTip: boolean;
    classfix?: string;
}

@cssModules(styles, { allowMultiple: true })
export default class SessionTip extends React.Component<Props, any> {
    render() {
        const {
           avatar,
           title,
           desc,
           inviteDesc,
           isShowTip, 
        } = this.props;
        
        const { classfix = 'common' } = this.props;
        const classes = classnames({
            'is-show-tip': isShowTip,
            [`${classfix}-session-tip`]: true
        });

        return (
            <div styleName={classes}>
                <div className="wrapper clearfix">
                    <div className="session-tip-avatar">
                        <div className="img-wrapper">
                            <img className="img" src={avatar} alt=""/>
                        </div>
                    </div>
                    <div className="session-tip-content">
                        <h3 className="title">{title}</h3>
                        <p className="desc">{desc}</p>
                        <p className="desc">{inviteDesc}</p>
                    </div>
                </div>
            </div>
        )
    }
}