import React from "react"
import { Link} from "gatsby"
import Style from "../styles/page.module.css"

class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            now: this.props.now,
            count: this.props.count,
        }
    }

    prevPage() {
        let nowPage = this.state.now;
        switch(nowPage) {
            case 1:
                return false;
            default:
                return (<Link to={`/gif/${nowPage - 1}`} className={`${Style.btn} ${Style.left}`}></Link>)
        }
    }

    nextPage() {
        let nowPage = this.state.now;
        if (nowPage === this.state.count) {
            return false;
        }
        return (<Link to={`/gif/${nowPage + 1}`} className={`${Style.btn} ${Style.right}`}></Link>)
    }

    render() {
        return (
            <div className={Style.box}>
                {this.prevPage()}
                {this.nextPage()}
            </div>
        )
    }
}

export default Pagination