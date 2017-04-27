var React = require('react');
var ReactDOM = require('react-dom');

import '../styles/FilmInfo.css';

class FilmInfo extends React.Component{
	constructor(props){
		super(props);

	}
	render(){
		return(
			<div>
				<div className="film-img-wrap">
					<div>
						<img src="../images/filmImages/film1.jpg"/>
					</div>
				</div>
				<div >
				</div>
				<div className="film-intro">
					<div className="film-word1">影片简介</div>
					<div className="film-word2">
						<span>导&nbsp;&nbsp;&nbsp;&nbsp;演:</span>
						<span>F•加里•格雷</span>
					</div>
					<div className="film-word2">
						<span>主演</span>
						<span>范·迪塞尔 | 道恩·强森 | 查理兹·塞隆 | 杰森·斯坦森 | 米歇尔·罗德里格兹 | 娜塔莉·伊曼纽尔 | 埃尔莎·帕塔奇 | 海伦·米伦 | 泰瑞斯·吉布森 | 库尔特·拉塞尔</span>
					</div>
					<div className="film-word2">
						<span>地区语言:</span>
						<span>美国</span>
						<span>(</span>
						<span>英语</span>
						<span>)</span>
					</div>
					<div className="film-word2">
						<span>类型</span>
						<span>动作|惊悚|犯罪</span>
					</div>

					<div className="film-word2">
						<span>上映日期:</span>
						<span>4月14日上映</span>
					</div>
					<div className="film-word3">
						 《速度与激情8》早已定于2017年4月14日在北美上映，眼看已经进入2016年了，影片仍未传出开拍的动静。近日，导演F·加里·格雷在接受外媒采访时，谈到了影片的最新进展，并向观众保证：不让观众觉得一切又是老调重弹。
					</div>
				</div>
				<div className="operation">
					<button className="cpn-primary-button">立即购票</button>
				</div>
			</div>
			)
	}
}
	module.exports = FilmInfo;
