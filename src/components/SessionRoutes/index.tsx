/**
 * @desc 新朋友 and 创建群聊
 */
import * as React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './index.scss';

@cssModules(styles, { allowMultiple: true })
export default class SessionRoutes extends React.Component<any> {
    getItems() {
        let items = [
            {
                content: '新朋友',
                link: '/friends',
            },
            {
                content: '创建群聊',
                link: '/create-group',

            }
        ]

        return items.map((item: {content: string, link: string}, index: number) => {
            const { content, link } = item;
            return (
                <li className={styles.item} key={index}>
                    <Link to={link} key="" className="clearfix">
                        {content}
                        <span className="right arrow" dangerouslySetInnerHTML={{ __html: '&#xe75c;'}}></span>
                    </Link>
                </li>
            )
        })
    }

    render() {
        const classes = classnames({
            "session-routes": true
        });
        return (
            <div styleName={classes}>
                <ul className="list">
                    {this.getItems()}
                </ul>
            </div>
        )
    }
}