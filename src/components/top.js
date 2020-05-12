import React from "react"
import Style from "../styles/top.module.css"
import jsonData from "../../content/read.json"

export default () => (
    <div className={Style.box}>
        <p className={Style.title}>热门动图</p>
        <ul>
        {
            jsonData.map((val, index) => (
            <li key={index}><a href={`/gif/${val.id}`}>{val.title}</a></li>
            ))
        }
        </ul>
    </div>
)