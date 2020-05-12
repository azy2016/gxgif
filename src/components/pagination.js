import React from "react"
import { Link, navigate  } from "gatsby"
import Style from "../styles/pagination.module.css"

class Pagination extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nowPage: this.props.nowPage,
            countPage: this.props.countPage,
            inputVal: this.props.nowPage
        }
    }

    componentDidUpdate(){
		document.addEventListener('keydown',this.onkeydown);
    }
    
    onkeydown = (e)=>{
        let id = e.target.value;
		if (e.keyCode === 13) {
			navigate(id === 1 ? '/': `/page/${id}`);
		}
    }
    
    goPage(e) {
        let value = this.state.inputVal;
        navigate(value === 1 ? '/': `/page/${value}`)
    }

    handleChange(e) {
        let value = e.target.value;
        this.setState({
            inputVal: value
        })
    }

    prevPage() {
        let nowPage = this.state.nowPage;
        switch(nowPage) {
            case 1:
                return false;
            case 2:
                return (<Link to="/" className={`${Style.left} ${Style.icon}`}></Link>);
            default:
                return (<Link to={`/page/${nowPage - 1}`} className={`${Style.left} ${Style.icon}`}></Link>)
        }
    }

    nextPage() {
        let nowPage = this.state.nowPage;
        if (this.state.nowPage === this.state.countPage) {
            return false;
        }
        return (<Link to={`/page/${nowPage + 1}`} className={`${Style.right} ${Style.icon}`}></Link>)
    }

    render() {
        return (
            <div className={Style.pagintion}>
                {this.prevPage()}
                {this.state.nowPage}/{this.state.countPage}
                {this.nextPage()}
                <input 
                type="number" 
                className={Style.input} 
                autoComplete='off' 
                onKeyDown={(e)=>this.onkeydown(e)} 
                onChange={(e) => this.handleChange(e)}
                min={1} 
                max={this.state.countPage} 
                value={this.state.inputVal} />
                <button className={Style.go} onClick={(e) => this.goPage()}>Go</button>
            </div>
        )
    }
}

export default Pagination