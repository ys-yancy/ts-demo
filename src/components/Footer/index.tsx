import * as React from "react";
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import styles from './index.scss';

interface LinkProps {
    link: string;
    text: string;
}
interface Props {
    
};

@CssModules(styles, { allowMultiple: true })
export default class MainFooter extends React.Component<Props, {}>{
    public state: {
        activeIndex: number;
    };

    private getFooter(): any {
        const links: LinkProps[] = [
            { link: '/index/message',  text: '消息' },
            { link: '/index/session', text: '联系' },
            { link: '/index/condition', text: '动态' },
        ];

        return links.map((link, index ) => {
            let { link: href, text } = link;
            let classes = classnames({
                'footer-link-item': true
            });
            return (
                <li key={href}  styleName={classes}>
                    <NavLink to={href} activeClassName='link-active'>{text}</NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <footer>
                <ul className=''>
                   {this.getFooter()}
                </ul>
            </footer> 
        )
    }
}