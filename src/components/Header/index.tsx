import * as React from "react";
const styles: Styles = require('./index.scss');

interface Props { 
    title?: string;
    showMore: (data?: any) => void;
};

export default class MainFooter extends React.Component<Props, any>{
    constructor(options: any) {
        super(options);
    }

    showMore(e: React.MouseEvent) {
        let { showMore } = this.props;
        showMore(e);
    }

    render() {
        let { title = '消息' } = this.props;
        return (
            <header className='common-header'>
                <div className={styles.avatar_outer_wrapper}>
                    <div className={styles.avatar_inner_wrapper}>
                        <img className={styles.avatar} src="http://pic.616pic.com/ys_b_img/00/13/14/wC1quFW3yA.jpg" alt="" />
                    </div>  
                </div>
                <span className='title-desc'>{title}</span>
                <span className={styles.show_more} onClick={(e) => { this.showMore(e)}}> + </span>
            </header>
        )
    }
}