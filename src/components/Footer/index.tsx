import * as React from "react";
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import styles from './index.scss';

interface LinkProps {
    link: string;
    text: string;
    icon: string;
    className: string;
}

@CssModules(styles, { allowMultiple: true })
export default class MainFooter extends React.Component<any>{
    public state: {
        activeIndex: number;
    };

    public getFooterItems(): LinkProps[] {
        return [
            {   link: '/index/message', 
                className: 'message',  
                text: '消息',
                icon: '&#xe66d;',
            }, 

            { 
                link: '/index/session', 
                className: 'session', 
                text: '联系',
                icon: '&#xe622;',
            },

            { 
                link: '/index/condition', 
                className: 'condition', 
                text: '动态',
                icon: '&#xe662;',
            },
        ];
    }

    private getFooter() {
        const linkItems = this.getFooterItems();

        return linkItems.map((link, index ) => {
            let { link: href, text, icon, className } = link;
            let iconClass = `${className}-icon`
            let classes = classnames({
                'footer-link-item': true
            });
            return (
                <li key={href}  styleName={classes}>
                    <NavLink to={href} activeClassName='link-active'>
                        <span styleName={iconClass} data-rule='icon' 
                        dangerouslySetInnerHTML={{
                            __html: icon
                        }}></span>
                        <span className='link-desc'>{text}</span>
                    </NavLink>
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