var React = require('react');
var ReactDOM = require('react-dom');
import '../styles/Head.css';

class Head extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<nav id="toolbar" className="notybar-upside">
						<h1>
							<div className="toolbar-title-icon">
								<i className="iconfont icon-list">&#xe646;</i>
							</div>
							<div className="toolbar-title">
								电影票
							</div>
						</h1>
						<div id="nav-right">
							<a className="city">
								<span>北京</span>
								<i className="iconfont icon-dropdown">&#xe61e;</i>
							</a>
							<a>
								<i className="iconfont icon-user">&#xe637;</i>
							</a>
						</div>
					</nav>
				</div>
			)
	}
}

module.exports = Head;