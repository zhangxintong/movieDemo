var React = require('react');
var ReactDOM = require('react-dom');
import '../styles/FilmList.css';

class FilmList extends React.Component{
	constructor(props){
		super(props);
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
			},{
				"imgName":"film6.jpg",
				"filmName":"速度与激情8",
				"imgDesc":"14家影院上映  1423232人购票",
				"score":"9.7"
			},{
				"imgName":"film7.jpg",
				"filmName":"速度与激情8",
				"imgDesc":"14家影院上映  1423232人购票",
				"score":"9.7"
			}] 
		 },
		 "will":[{
		 	"imgName":"film6.jpg",
			"filmName":"神秘家族",
			"date":"4月21日上映"
		 },{
		 	"imgName":"film7.jpg",
			"filmName":"春娇救志明",
			"date":"4月28日上映"
		 }]
		})

	}

	render(){
		let countId = 0;
		return(
			<div>
			{
				this.state.filmInfo.now.map((item) => {
				    return <div key={"film" + countId++} >
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
					更多即将上映电影
				</div>

			</div>
			)
	}
}
module.exports = FilmList;