var React = require('react');
var ReactDOM = require('react-dom');
var SideBar = require('./SideBar');
import '../styles/Head.css';

class Head extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			isOpen : false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(isOpen){
		//console.log("***handleClick**");
		//let state = isOpen;
		let newState = this.props.handleClick(isopen);
		this.setState({
			isopen:newState
		})
	}
	render(){
		console.log(this.state.isOpen);
		return(
					<nav id="toolbar" className="notybar-upside">
						<h1>
							<a href="#" isopen={this.state.isopen} onClick={this.handleClick}>
								<div className="toolbar-title-icon">
									<i className="iconfont icon-list">&#xe646;</i>
								</div>
								<div className="toolbar-title">
									电影票
								</div>
							</a>
						</h1>
						<div id="nav-right">
							<a className="city">
								<span>北京</span>
								<i className="iconfont icon-dropdown">&#xe61e;</i>
							</a>
							<a className="user">
								<i className="iconfont icon-user">&#xe637;</i>
							</a>
						</div>
					</nav>
				
			)
	}
}

module.exports = Head;