import * as React from "react";
import { Switch, Route, Link } from 'react-router-dom';

interface Props {};
export default class MainFooter extends React.Component<Props, {}>{
    render() {
        return (
            <Link to='/index/about'>aa</Link>
        )
    }
}