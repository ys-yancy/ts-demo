/**
 * @constructor
 * @desc Search
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import cssModules from 'react-css-modules';
import styles from './index.scss';

interface Props {
    classfix?: string;
    placeholder?: string;
    clickCallBack?: () => void;
};

@cssModules(styles, { allowMultiple: true })
export default class Search extends React.Component<Props, any>{
    render() {
        const { classfix = 'common', placeholder = '搜索' } = this.props;

        const classes = classnames({
            [`${classfix}-search`]: true
        })
        const Search = (<Link to="/search">
            <div styleName={classes}>
                <div className="search-input">
                    <span styleName="search-icon" dangerouslySetInnerHTML = {{__html: '&#xe64c;'}}></span>
                    <span styleName="placeholder">{placeholder}</span>
                </div>
            </div>
        </Link>)

        return Search;
    }
}