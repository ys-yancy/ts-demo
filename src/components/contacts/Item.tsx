import * as React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import styles from './item.scss';

export interface Contacts {
    name: string;
    avatar: string;
    sign: any;
    status: string;
    statusSpell: string;
    device: string;
    userId: string;
}

export interface ContactProps {
    list: Contacts[];
    prefixCls?: string;
}

@CssModules(styles, { allowMultiple: true })
export default class ContactItem extends React.Component<ContactProps, any> {
    static defaultProps = {
        prefixCls: 'app-contact',
    };

    constructor(props: ContactProps) {
        super(props);
    }

    hideLoading() {
        this.setState({
            loading: false,
        });
    }

    componentWillReceiveProps(nextProps: ContactProps) {

    }

    render() {
        const { list, prefixCls } = this.props;
        return list.map((contact: Contacts) => {
            let { name, avatar, sign, status, device, userId, } = contact;
            return (
                <Link key={userId} to="/chat">
                    <li styleName={`${prefixCls}-item`}>
                        <div className='avatar-wrapper'>
                            <div className='img-wrapper'>
                                <img className='img' src={avatar} alt="" />
                            </div>
                        </div>
                        <div className='content-wrapper'>
                            <span className='name'>{name}</span>
                            <p>
                                <span className='status'>
                                    {device}{status}
                                </span>
                                <span className='sign'>
                                    {sign}
                                </span>
                            </p>
                        </div>
                    </li>
                </Link>
            )
        });
    }
}