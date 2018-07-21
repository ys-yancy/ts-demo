import * as React from "react";
import SubRoute from './../../router/SubRoute';
import Tabs from '../../common/Tabs/index';
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
                {routers.map((router, i) => <SubRoute key={i} {...router} />)}
                <Footer />
                {/* <Tabs defauleActiveIndex={0} className='tabs-outer-wrapper' onChange = {() => {}}>
                    <Tabs.TabPane tab='11' order={1} key="1">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                            选项卡一内容
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='11' order={2} key="2">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                            选项卡二内容
                    </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab='11' order={2} key="3">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
                            选项卡三内容
                        </div>
                    </Tabs.TabPane>
                </Tabs> */}
            </section>
        )
    }
}