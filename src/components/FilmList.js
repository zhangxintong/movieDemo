var React = require('react');
var ReactDOM = require('react-dom');
import Swiper from '../lib/swiper.min.js';
import '../styles/FilmList.css';
import '../lib/swiper.min.css';


class FilmList extends React.Component{
	constructor(props){
		super(props);
		this.state = ({
			imgUrls: ["1.jpg","2.png","3.jpg","4.jpg"]
		})
	}
	componentDidMount() {
		 new Swiper ('#header .swiper-container', {
			loop: true,
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay : 3000,
			autoplayDisableOnInteraction : false,		    
		}) 

	}

	render(){
		let countId = 0;

		return(
			<div id="header">
	    		<div className="swiper-container">
				    <div className="swiper-wrapper">
				    	{
				    		this.state.imgUrls.map((url) => {
				    			return <div className="swiper-slide" key={"header" + countId++} >
				    						<img className="img" src={"../images/"+url} />
				    				   </div>
				    		})
				    	}
				    </div>
					<div className="swiper-pagination"></div>
				</div>
	      	</div>

		)
	}
}
module.exports = FilmList;