import React from "react"
import axios from "axios";
import Style from "../styles/item.module.css"

class Item extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={Style.item}>
                <h2 className={Style.title}><a href={`/gif/${this.props.obj.id}`}>{this.props.obj.title}</a></h2>
                <div className={Style.content}>
                    <a href={`/gif/${this.props.obj.id}`}>
                    <img className="lazyload" src="https://p9.pstatp.com/large/pgc-image/aac1156d3a194a29886177f65807b142" 
                    data-src={this.props.obj.src} alt={this.props.obj.title}></img></a>
                </div>
            </div>
        )
    }
}

export default Item