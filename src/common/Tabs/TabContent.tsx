import * as React from 'react';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import { TabContentProps as Props } from './tabs-interfaces';
import styles from './index.scss';

@CssModules(styles, { allowMultiple: true })
export default class TabContent extends React.Component<Props, {}>{
    protected getTabpanes(): any {
        const { activeIndex, panels } = this.props;

        return React.Children.map(panels, (child: any) => {
            if (!child) {
                return ;
            }

            const order = parseInt(child.props.order, 10);
            const isActive = activeIndex === order;

            return React.cloneElement(child, {
                isActive,
                children: child.props.children,
                key: `tabpane-${order}`
            });
        })
    }

    public render<T>(): React.ReactElement<T> {
        const classes = classnames({
            content: true
        })
        return (
            <div className = {classes}>
                {this.getTabpanes()}
            </div>
        )
    }
}