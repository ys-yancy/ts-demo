import * as React from "react";
import SubRoute from './../../router/SubRoute';
import Footer from '../Footer/index';
import Header from '../Header/index';
// const styles: Styles = require('./index.scss');

interface Props {
    routers: any[];
}

interface state {
    classNames: string;
    toggleClassName: string;
    folded: boolean;
}

export default class MainContainer extends React.Component<Props, {}> {
    public state: state;
    constructor(options: any) {
        super(options);
    };

    componentDidMount() {

    }

    showMore() {
        
    }

    render(): any {
        let { routers } = this.props;        
        return (
            <section>
                <Header showMore={this.showMore}/>
                {/* {routers.map((router, i) => <SubRoute key={i} {...router} />)} */}
                <Footer />
            </section>
        )
    }
}