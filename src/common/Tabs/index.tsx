import * as React from 'react';
import TabNav from './TabNav';
import TabPane from './TabPane';
import TabContent from './TabContent';

interface Props {
    children: any;
    tabNavIsTop?: boolean;
    activeIndex?: number;
    onChange(arg: any): any;
    defauleActiveIndex?: number;
    className?: string;

};

export default class Tabs extends React.Component<Props, {}>{
    public state: {
        activeIndex: number;
        prevIndex: number;
    }
    // 目前ts还没支持
    // static defaultProps = {
    //     onChange: () => {}       
    // };

    static TabPane = TabPane;

    constructor(props: Props) {
        super(props);

        this.handleTabClick = this.handleTabClick.bind(this);
        const currProps = this.props;

        let activeIndex;

        if ('activeIndex' in currProps) {
            activeIndex = currProps.activeIndex;
        } else if ('defauleActiveIndex' in currProps) {
            activeIndex = currProps.defauleActiveIndex;
        };

        this.state = {
            activeIndex,
            prevIndex: activeIndex,
        };
    }

    componentWillReceiveProps(nextProps: Props): void {
        if ('activeIndex' in nextProps) {
            this.setState({
                activeIndex: nextProps.activeIndex
            });
        }
    }

    public handleTabClick(activeIndex: number): void {
        const prevIndex = this.state.activeIndex;
        if (this.state.activeIndex !== activeIndex &&
                'defauleActiveIndex' in this.props) {
            this.setState({
                activeIndex,
                prevIndex,
            });
        };

        this.props.onChange(activeIndex);
    }

    renderTabNav() {
        return (
            <TabNav 
                key = 'tabBar'
                onTabClick={this.handleTabClick}
                panels = {this.props.children}
                activeIndex = {this.state.activeIndex}
            />
        )
    }

    renderTabContent() {
        return (
            <TabContent
                key='tabcontent'
                activeIndex = {this.state.activeIndex}
                panels = {this.props.children}
            />
        )
    }

    render() {
        const { className, tabNavIsTop } = this.props;

        return (
            tabNavIsTop ? 
            <div className={className}>
                {this.renderTabNav()}
                {this.renderTabContent()}
            </div> :
            <div className={className}>
                {this.renderTabContent()}
                {this.renderTabNav()}
            </div>
        )
    }
}