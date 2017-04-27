var React = require('react');
var ReactDOM = require('react-dom');

import '../styles/SideBar.css';
import '../styles/Head.css';

class SideBar extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
			<aside className="{{display:block;}}">
				<span>
				<div className="sidebar-container">
					<div className="sidebar-overlay">
						<nav>
							<ul>
								<li>
									<a>
										<span>首页</span>
										<i className="iconfont icon-arrow-right right">&#xe62c;</i>
									</a>
								</li>
								<li>
									<a>
										<span>影片</span>
										<i className="iconfont icon-arrow-right right">&#xe62c;</i>
									</a>
								</li>
								<li>
									<a>
										<span>影院</span>
										<i className="iconfont icon-arrow-right right">&#xe62c;</i>
									</a>
								</li>
								<li>
									<a>
										<span>商城</span>
										<i className="iconfont icon-arrow-right right">&#xe62c;</i>
									</a>
								</li>
								<li>
									<a>
										<span>我的</span>
										<i className="iconfont icon-arrow-right right">&#xe62c;</i>
									</a>
								</li>
								<li>
									<a>
										<span>卖座卡</span>
										<i className="iconfont icon-arrow-right right">&#xe62c;</i>
									</a>
								</li>

							</ul>
						</nav>
					</div>
				</div>
				</span>
			</aside>
			)
	}
}
module.exports = SideBar;