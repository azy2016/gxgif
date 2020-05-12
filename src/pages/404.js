import React from "react"
import Style from "../styles/404.module.css"
export default () => (
<div className={Style.main}>
    <h1>404</h1>
    <h3>大事不妙啦！</h3>
    <p>
    你访问的页面好像不小心被站长给弄丢了~<br/>
    <a href="/">惩罚站长</a>
    </p>
</div>
)