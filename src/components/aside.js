import React from "react"
import Style from "../styles/index.module.css"

class Aside extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {
            isFlixed: false
        }
    }

    componentDidMount() {
        // 挂载滚动监听
        this._isMounted = true;
        window.addEventListener('scroll', (e) => this.bindScroll(e));
    }
    componentWillUnmount() {
        // 移除滚动监听
        this._isMounted = false;
        window.removeEventListener('scroll', (e) => this.bindScroll(e));
    }

    bindScroll(event) {
        // 滚动的高度
        const scrollTop = (event.srcElement ? event.srcElement.documentElement.scrollTop : false) || window.pageYOffset || (event.srcElement ? event.srcElement.body.scrollTop : 0);
        // 视窗高度
        // const clientHeight = (event.srcElement && event.srcElement.documentElement.clientHeight) || document.body.clientHeight;
        // // 页面高度
        // const scrollHeight = (event.srcElement && event.srcElement.documentElement.scrollHeight) || document.body.scrollHeight;
        // 距离页面底部的高度
        // const height = scrollHeight - scrollTop - clientHeight;
        // 判断距离页面底部的高度
        if (scrollTop >= 100) {
            // 关闭判断执行开关
            if (this._isMounted){
                this.setState({isFlixed: true})
            }
        } else {
            if (this._isMounted){
                this.setState({isFlixed: false})
            }
        }
    }

    render() {
        return (
            <div className={`${Style.aside} ${this.state.isFlixed ? Style.asideFlixed : ''}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Aside