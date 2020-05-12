import React from "react"
import { Link} from "gatsby"
import axios from "axios"
import Style from "../styles/range.module.css"

class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            now: this.props.now,
            count: this.props.count,
            list: []
        }
    }

    componentDidMount() {
        let set = new Set();
        let items = [];
        while (set.size < 6) {
            let num = this.randomNum();
            if (num === this.state.now) {
                continue;
            }
            set.add(num)
        }
        for(let val of set.values()) {
            axios.get(`/page-data/gif/${val}/page-data.json`)
            .then((res) => {
                items.push(res.data.result.pageContext.data);
                this.setState({
                    list: items
                })
            })
        }
    }

    randomNum() { 
        return Math.floor(Math.random() * (this.state.count - 1)) + 1;
    } 


    render() {
        return (
            <div className={Style.box}>
                <h2 className={Style.title}>随便看看</h2>
                <div className={Style.items}>
                {
                    this.state.list.map((val, index) => (
                        <div className={Style.item} key={index}>
                            <Link to={`/gif/${val.id}`}><img className="lazyload" src="https://p9.pstatp.com/large/pgc-image/aac1156d3a194a29886177f65807b142" 
                            data-src={val.src} alt="妹子gif"></img></Link>
                            <p><Link className={Style.itemTitle} to={`/gif/${val.id}`}>{val.title}</Link></p>
                        </div>
                   ))
                }
                </div>
            </div>
        )
    }
}

export default Pagination