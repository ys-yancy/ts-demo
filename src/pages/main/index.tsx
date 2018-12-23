import * as React from 'react';
import classNames from 'classnames';
import SubRoute from './../../router/SubRoute';
import Header from '../../components/Header/index';
import Search from '../../components/Search/index';
import Footer from '../../components/Footer/index';
import SideConent from '../../components/Side-content/index';
import './index.scss';
import content from './index.scss';

interface Router {
    url: string;
    component: () => any;

};

interface Props {
    routers: Router[];
};

export interface MainStates {
    isShowSide: boolean;
}


export default class MainContainer extends React.Component<Props, MainStates> {
    state: MainStates = {
        isShowSide: false
    }

    private content: any;

    constructor(options: any) {
        super(options);
    }

    saveContent = (node: any) => {
        this.content = node;
    }

    hideSide() {
        this.setState({
            isShowSide: false
        });

        this.content.removeEventListener('click', this.hideSide.bind(this));
    }

    showMore() {
        console.log('showmore...');
    }

    showSide() {
        this.setState({
            isShowSide: true
        });
        this.content.addEventListener('click', this.hideSide.bind(this));
    }

    render() {
        let { routers } = this.props;
        let currRouter: string = (this.props as any).location.pathname;
        let classes = classNames({
            'main': true,
            'show-side': this.state.isShowSide
        })
        return (
            <section className={classes} ref={this.saveContent}>
                <SideConent/>
                <Header currRouter={currRouter} showMore={this.showMore} showSide={this.showSide.bind(this)}/>
                <Search />
                {routers.map((router, i) => <SubRoute key={i} {...router} />)}

                <Footer />
            </section>
        )
    }
}