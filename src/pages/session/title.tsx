/**
 * 联系人 Title
 */
import * as React from 'react';
import classNames from 'classnames';
import styles from './index.scss';
import cssModules from 'react-css-modules';

export interface Titleface {
    name: string;
    nameSpell: string;
    id?: string;
}

interface TitleProps {
    getTitleList: () => any;
    clickCallback?: (arg: Titleface) => void;
    currentTitle: string;
};

@cssModules(styles, { allowMultiple: true })
export default class Title extends React.Component<TitleProps, any> {
    constructor(props: TitleProps) {
        super(props);
        this.state = {
            titleList: [],
            currentTitle: 'frineds'
        }
    }

    componentWillMount() {
        this.setTitleItems();
    }
    
    /**
     * @todo 在这将getTitleList方法传进来，之后应该改为高级组件
     */
    setTitleItems() {
        let { getTitleList, currentTitle } = this.props;
        getTitleList().then((titleItems: Titleface) => {

            this.setState({
                titleList: titleItems,
                currentTitle: currentTitle
            });
        });
    }

    clickhandler(id: string) {
        let nextTitle = this.state.titleList.filter((item: Titleface) => {
            return item.id === id;
        })[0];

        this.setState({
            currentTitle: nextTitle.nameSpell
        });

        this.props.clickCallback && this.props.clickCallback(nextTitle);
    }

    renderItems() {
        let { titleList, currentTitle } = this.state;

        return titleList.map((item: any) => {
            let id = item.id;
            let desc = item.name;
            let isActive = currentTitle == item.nameSpell;

            let classes = classNames({
                'title-item': true,
                'active': isActive
            });

            let events = {
                onClick: this.clickhandler.bind(this, id)
            }
            return (
                <li {...events} className={classes} key={id}>
                    <span>{desc}</span>
                </li>
            )
        });
    }

    render() {
        let items = this.renderItems();
        let classes = classNames({
            'session-titles': true
        })
        return (
            <ul styleName={classes}>
                {items}
            </ul>
        )
    }
}