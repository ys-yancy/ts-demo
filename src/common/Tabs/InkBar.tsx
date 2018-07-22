import * as React from 'react';
import classnames from 'classnames';
import CssModules from 'react-css-modules';
import styles from './index.scss';

interface Props {
    left: number;
    width: number;
}

@CssModules(styles, { allowMultiple: true })
export default class InkBar extends React.Component<Props, {}> {
    render() {
        const { left, width } = this.props;

        const classes = classnames({
            inkBar: true,
        });

        return (
            <div styleName={classes} style={{
                WebkitTransform: `translate3d${left}px, 0 , 0`,
                transform: `translate3d${left}px, 0 , 0`,
                width: width,
            }}>
            </div>
        )
    }
}