var React = require('react');
var ReactDOM = require('react-dom');
var FilmInfo =require('./FilmInfo');
var SwiperFilm = require("./SwiperFilm");

import '../styles/FilmList.css';

class FilmList extends React.Component{
	constructor(props){
		super(props);
		this.changeSection = this.changeSection.bind(this);
		this.state = ({
			filmInfo:{
				"now":[{
				"imgName":"film1.jpg",
				"filmName":"速度与激情8",
				"imgDesc":"140家影院上映  1423232人购票",
				"score":"9.7"
			},{
				"imgName":"film2.jpg",
				"filmName":"大话西游之大圣娶亲",
				"imgDesc":"109家影院上映  1430433人购票",
				"score":"9.5"
			},{
				"imgName":"film3.jpg",
				"filmName":"傲慢与偏见",
				"imgDesc":"134家影院上映  9232人购票",
				"score":"8.4"
			},{
				"imgName":"film4.jpg",
				"filmName":"蓝精灵：寻找神秘村",
				"imgDesc":"144家影院上映  9785人购票",
				"score":"8.3"
			},{
				"imgName":"film5.jpg",
				"filmName":"金刚：骷髅岛",
				"imgDesc":"44家影院上映  1523232人购票",
				"score":"8.4"
			}],
		 "will":[{
		 	"imgName":"film6.jpg",
			"filmName":"神秘家族",
			"date":"4月21日上映"
		 },{
		 	"imgName":"film7.jpg",
			"filmName":"春娇救志明",
			"date":"4月28日上映"
		 }]
		},
		changeSectionFlag:false
		})

	}
	changeSection(){
		this.setState({
			changeSectionFlag:true
		})
	}
	render(){
		console.log("***filmList**");
		console.log(this.state.changeSectionFlag);
		let countId = 0;
		let mainInfo = null;
		if(this.state.changeSectionFlag ==false){
			console.log("mianinfo **");
			mainInfo=(
				<div>
					<div>
					<SwiperFilm/>
					{
						this.state.filmInfo.now.map((item) => {
						    return <div key={"film" + countId++} onClick={this.changeSection}>
						    		<img className="img" src={"../images/filmImages/"+item.imgName} />
						    		<div className="movieItem">
							    		<div className="col-left left">
								    		<div className="film-name">{item.filmName}</div>
								    		<div className="count">{item.imgDesc}</div>
							    		</div>
							    		<div className="col-right">
							    			<span className="score">{item.score}</span>
							    		</div>
							    	</div>
						    		</div>
						    })
					}
						<div className="more-button">
							更多热映电影
						</div>

					</div>
					<div>
						<div className="dividing-line">
							<div className="upcoming">即将上映</div>
							</div>
							<div>
								{
									this.state.filmInfo.will.map((item)=>{
										return <div key={"willFilm"+countId++}>
										 <img className="img" src={"../images/filmImages/"+item.imgName} />
										 <div className="will-desc">
										 	<div className="col-xs-7 upcoming-left">
										 		<div className="film-name">{item.filmName}</div>
										 	</div>
										 	<div className="col-xs-3">
										 		<span className="showing-date">{item.date}</span>
										 	</div>
										 </div>
										 </div>
									})
								}
							</div>
					 </div>
					 <div className="more-button">
					 	更多即将上映电影
					 </div>
				</div>
			)
		}else{
			console.log("FilmInfo***");
			mainInfo=(<FilmInfo/>)
		}
		console.log({mainInfo});
		return(
			<div>
			{mainInfo}
			</div>
			)
	}
}
module.exports = FilmList;