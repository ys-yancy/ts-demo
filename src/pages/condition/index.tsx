/**
 * @desc 动态
 * @author Ys
 */

import * as React from 'react';
import classNames from 'classnames';
import ConditionFuns from './fun/index';
import ConditionSession from './session/index';

export default class Condition extends React.Component<any> {
    render() {
        return (
            <div>
                <ConditionSession/>
                <ConditionFuns />
            </div>
        )
    }
}