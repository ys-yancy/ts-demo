import * as React from 'react';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import { TabPaneProps as Props } from './tabs-interfaces';
import styles from './index.scss';

@CssModules(styles, {allowMultiple: true})
export default class TabPane extends React.Component<Props, {}> {
   
    public render<T>(): React.ReactElement<T> {
        const { className, isActive, children } = this.props;

        const classes = classnames({
            panel: true,
            contentActive: isActive,
        });

        return (
            <div 
                role='tabpanel'
                aria-hidden={!isActive}
                styleName={classes}
            >
                {children}  
            </div>
        )
    }
}