import * as React from 'react';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
const styles: Styles = require('./index.scss');

interface Props {
    tab: string;
    activeIndex?: number;
    order: number;
    disabled?: boolean;
    isActive?: boolean;
    className?: string;
};

@CssModules(styles, {allowMultiple: true})
export default class TabPane extends React.Component<Props, {}> {
   
    public render<T>(): React.ReactElement<T> {
        const { className, isActive, children } = this.props;

        const classes = classnames({
            panel: true,
            contentActive: isActive,
        })
        return (
            <div 
                role='tabpanel'
                aria-hidden={!isActive}
                className={classes}
            >
                {children}  
            </div>
        )
    }
}