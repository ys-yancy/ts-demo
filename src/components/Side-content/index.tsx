import * as React from 'react';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './index.scss';

export interface SideContentProps {
    classFix?: string;
};

export interface SideContentStates {

};

@cssModules(styles, { allowMultiple: true })
export default class SideContent extends React.Component<SideContentProps, SideContentStates> {
    static defaultProps: SideContentProps = {
        classFix: 'app',
    }

    renderHeader() {
        return (
            <div className='side-header'>
                <div className='hd'>
                    <span><i></i></span>
                    <span><i></i></span>
                </div>
                <div className='bd'>
                    <div>
                        <img src="" alt=""/>
                        <p></p>
                    </div>
                    <p></p>
                    <p></p>
                </div>
            </div>
        )
    }

    renderContent() {
        return (
            <ul>
                <li><span className='icon'></span><span></span></li>
                <li><span className='icon'></span><span></span></li>
                <li><span className='icon'></span><span></span></li>
                <li><span className='icon'></span><span></span></li>
                <li><span className='icon'></span><span></span></li>
                <li><span className='icon'></span><span></span></li>
            </ul>
        )
    }

    renderFooter() {
        return (
            <div>
                <div>
                    <span className='icon'></span>
                    <span className='desc'></span>
                </div>
                <div>
                    <span className='icon'></span>
                    <span className='desc'></span>
                </div>
                <div>
                    <span className='icon'></span>
                    <span className='desc'></span>
                </div>
            </div>
        )
    }

    render() {
        let classFix = this.props.classFix;

        let classes = classNames({
            'side-wrapper': true,
            [`${classFix}-side`]: true
        });

        return (
            <section styleName={classes}>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderFooter()}
            </section>
        )
    }
}