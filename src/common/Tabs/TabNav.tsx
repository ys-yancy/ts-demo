import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import InkBar from './InkBar';
import { TabNavProps as Props } from './tabs-interfaces';
import styles from './index.scss';

interface ResultOffset {
    top: number;
    left: number;
}

interface Tools {
    (el: HTMLElement): number | ResultOffset
};

let getOuterWidth: Tools = (el) => {
    return el.offsetWidth;
};

let getOffset: Tools = (el) => {
    const doc = el.ownerDocument.documentElement;
    const box = el.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset - doc.clientTop,
        left: box.left + window.pageXOffset - doc.clientLeft,
    };
}

@CssModules(styles, {allowMultiple: true})
export default class TabNav extends React.Component<Props, {}> {
    public state : {
        inkBarWidth: number;
        inkBarLeft: number;
    }

    constructor(props: Props) {
        super(props);

        this.state = {
            inkBarWidth: 0,
            inkBarLeft: 0,
        };
    }

    public componentDidMount(): void {
        const { activeIndex } = this.props;
        const node = ReactDOM.findDOMNode(this);
        const el = (node as HTMLElement).querySelectorAll('li')[activeIndex];
        el && this.setState({
            inkBarWidth: getOuterWidth(el),
            inkBarLeft: (getOffset(el) as ResultOffset).left,
        })
        
    }

    public componentDidUpdate(preProps: Props): void {
        if (preProps.activeIndex !== this.props.activeIndex) {
            const { activeIndex } = this.props;
            const node = ReactDOM.findDOMNode(this);
            const el = (node as HTMLElement).querySelectorAll('li')[activeIndex];
            el && this.setState({
                inkBarWidth: getOuterWidth(el),
                inkBarLeft: (getOffset(el) as ResultOffset).left,
            });
        }
    }

    public getTabs<T>(): undefined | React.ReactElement<T>[] {
        const { panels, activeIndex } = this.props;

        return React.Children.map(panels, (child: any) => {
            if (!child) {
                return;
            };

            const order: number = parseInt(child.props.order, 10);

            let classes = classnames({
                tab: true,
                tabActive: activeIndex === order,
                disabled: child.props.disabled,
            });
            
            let events = {};

            if (!child.props.disabled) {
                events = {
                    onClick: this.props.onTabClick.bind(this, order)
                }
            };

            let ref: {
                [propName: string]: any
            } = {};

            if (activeIndex === order) {
                ref.ref = 'activeTab';
            };

            return (
                <li
                    role='tab'
                    aria-disabled = {child.props.disabled ? 'true' : 'false'}
                    aria-selected = {activeIndex === order ? 'true' : 'false'}
                    styleName = {classes}
                    {...events}
                    {...ref}
                >
                    {child.props.tab}
                </li>
            )
        })
    }

    render<T>(): React.ReactElement<T> {
        const { activeIndex } = this.props;
        
        const classes = classnames({
            nav: true
        })
        return (
            <div role='tablist'>
                <InkBar width={100} left = {20} />
                <ul className = {classes}>
                    {this.getTabs()}
                </ul>
            </div>
        )
    }
}