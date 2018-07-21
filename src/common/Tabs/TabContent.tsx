import * as React from 'react';
import * as ReactDOM from 'react-dom';
const styles: Styles = require('./index.scss');

interface Props {
    panels: any;
    activeIndex: number;
};

export default class TabContent extends React.Component<Props, {}>{
    protected getTabpanes<T>(): any{
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

    render<T>(): React.ReactElement<T> {
        return (
            <div className = 'content'>
                {this.getTabpanes()}
            </div>
        )
    }
}