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

interface Props {
    list: Contacts[];
}

@CssModules(styles, { allowMultiple: true })
export default class ContactItem extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }

    hideLoading() {
        this.setState({
            loading: false,
        });
    }

    componentWillReceiveProps(nextProps: Props) {

    }

    render() {
        const { list } = this.props;
        const Items = list.map((item: Contacts) => {
            const {
                name,
                avatar,
                sign,
                status,
                statusSpell,
                device,
                userId,
            } = item;
            return (
                <Link key={userId} to="/chat">
                    <li className='contact-item'>
                        <div className='avatar-wrapper top'>
                            <div className='img-outer-wrapper'>
                                <div className='img-wrapper'>
                                    <img className='img' src={avatar} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='content-wrapper bottom'>
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
            );
        });

        const contact_list_classes = classnames({
            'contact-list': true,
        });

        return (
            < ul styleName={contact_list_classes}>
                {Items}
            </ul>
        )
    }
}