import * as React from 'react';
import classNames from 'classnames';
import './index.scss';

export interface FunProps {
    prefixCls?: string;
};

export interface FunStates {
    [key: string]: any;
}


export const FunItem: (props: any) => any  = (props: any) => {
    let { name, icon } = props;
    return (
        <div className="fun-item">
            <img src={icon} className='icon' alt=""/>
            <p className="name">{name}</p>
        </div>
    )
};

export const Silder = class extends React.Component<any, any> {
    state: any = {
        items: []
    };
    
    componentWillReceiveProps(props: any) {
        this.setState({
            items: props.items
        })
    }

    shouldComponentUpdate(next: any, prev: any) {
        let str = JSON.stringify;
        if (str(next) == str(prev)) {
            return true;
        }

        return false;
    }

    splitItems() {
        let { items } = this.state;
        let len = 12;
        let buffer: any[] = [];
        let result: any[] = [];

        items.forEach((item: any, index: number) => {
            buffer.push(item);
            if ((index + 1) % len == 0) {
                result.push(buffer);
                buffer = [];
            } 
            else if (index === items.length - 1) {
                result.push(buffer);
                buffer = null;
            }
        });

        return result;
    }

    renderSlides() {
        let splitItems = this.splitItems();
        return splitItems.map((items, key: number) => (
            <li className='fun-wrapper' key={key}>
            <div className='inner'>
                {
                    items.map((item: any, key: number) => (<FunItem key={key} {...item} />))
                }
            </div>
            </li>
        ))  
    }

    render() {
        let slideItems = this.renderSlides();
        return (
            <React.Fragment>
                {slideItems}
            </React.Fragment>
        )
    }
}


export default class ConditionFun extends React.Component<FunProps, FunStates> {
    static FunItem: typeof FunItem = FunItem;

    static defaultProps: FunProps = {
        prefixCls: 'condition-fun'
    };

    state: FunStates = {
        items: [],
    };

    componentWillMount() {
        this.getItems().then((items) => {
            this.setState({
                items,
            })
        })
    }
    
    async getItems() {
        let items = ['好友微视', '附近', '兴趣部落', '京东购物', '游戏', '企鹅电竞', '动漫', '鹅漫U品', 'NOW直播', '阅读', '音乐', '运动', '全名投票', '吃喝玩乐', '同城服务'];
        let props = {
            link: 'www.baidu.com',
            icon: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543659080619&di=603a5a8fe7d3e08521e056cf62c741e9&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D3698294261%2C2120059840%26fm%3D214%26gp%3D0.jpg'
        };

        return items.map((item: string) => ({ name: item, ...props}));
    }

    renderItems() {
        let { items } = this.state;

        return items.map((props: any, key: number) => {
            return React.cloneElement(<FunItem />, {
                key,
                ...props
            })
        });
    }

    render() {
        let { items } = this.state;
        let prefixCls = this.props.prefixCls;

        let classes = classNames({
            [`${prefixCls}-list`]: true
        });

        return (
            <div className={`${prefixCls}-scroll`}>
                <ul className={classes}>
                    <Silder items={items} />
                </ul>
            </div>
        )
    }
}