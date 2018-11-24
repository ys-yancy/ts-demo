/**
 * @desc 设备
 */
import * as React from 'react';
import classNames from 'classnames';
import cssModules from 'react-css-modules';
import customHistory from '../../../common/customBrowserHistory/index';
import styles from './index.scss';

export interface DeviceInterface {
    name: string;
    desc: string;
    avatar: string;
    online?: boolean;
    link?: string;
}

@cssModules(styles, { allowMultiple: true })
export default class Device extends React.Component<any, any> {
    showDetail(device: DeviceInterface) {
        if (device.link) {
            window.open(device.link)
        }

        customHistory.push('/index/chat');
    }

    getCurDeviceList(): DeviceInterface[] {
        return [
            {
                name: '我的电脑',
                desc: '无需数据线，手机轻松传文件到电脑',
                avatar: 'http://image2.suning.cn/b2c/catentries/000000000128979395_2_800x800.jpg',
                online: false,
            },
            {
                name: '发现新设备',
                desc: '搜索附近的设备，用扣扣轻松连接设备',
                avatar: 'http://image2.suning.cn/b2c/catentries/000000000128979395_2_800x800.jpg',
                link: 'www.baidu.com',
            }
        ]
    }

    renderStatus(status: boolean) {
        if (status) {
            return <span>[在线]</span>
        };

        if (status === false) {
            return <span>[离线]</span>
        };

        return null;
    }

    renderList() {
        let list: DeviceInterface[] = this.getCurDeviceList();

        return list.map((device) => {
            let deviceItemCls = classNames({
                'device-item': true
            });

            let events = {
                onClick: () => {
                    this.showDetail(device)
                }
            }

            let statusDesc = this.renderStatus(device.online);

            return (
                <li {...events} styleName={deviceItemCls} key={device.name}>
                    <div>
                        <div className='avatar-wrapper'>
                            <img className='avatar' src={device.avatar} alt=""/>
                        </div>
                        <div className='content'>
                            <p className="name">{device.name}</p>
                            <p className='desc'>
                                {statusDesc}
                                {device.desc}
                            </p>
                        </div>
                    </div>
                </li>
            )
        })
    }

    render() {
        let listCls = classNames({
            'device-list': true
        })
        return (
            <ul styleName={listCls}>
                { this.renderList() }
            </ul>
        )
    }
}