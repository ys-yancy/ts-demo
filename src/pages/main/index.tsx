import * as React from 'react';
import SubRoute from './../../router/SubRoute';
import Header from '../../components/Header/index';
import Search from '../../components/Search/index';
import Footer from '../../components/Footer/index';
import './index.scss';

interface Router {
    url: string;
    component: () => any;

};

interface Props {
    routers: Router[];
};


export default class MainContainer extends React.Component<Props, {}> {
    constructor(options: any) {
        super(options);
    };

    showMore() {
        console.log('showmore...');
    }

    render() {
        let { routers } = this.props;
        let currRouter: string = (this.props as any).location.pathname;
        return (
            <section className='main'>
                <Header currRouter={currRouter} showMore={this.showMore}/>
                <Search />
                {routers.map((router, i) => <SubRoute key={i} {...router} />)}

                <Footer />
            </section>
        )
    }
}