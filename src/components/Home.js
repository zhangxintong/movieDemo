var React = require('react');
//var ReactDOM = require('react-dom');
var Head =require("./Head");
var SideBar = require("./SideBar");

class Home extends React.Component{
	constructor(props){
		super(props);
		
		this.handleClick = this.handleClick.bind(this);

	}
	handleClick(isOpen){
		//console.log("***handleClick**");
		let newState = !isOpen;
		return newState;
	    //e.stopPropagation();
	    //e.preventDefault();
	}
	render(){
		return(
				//<div>
				<Head handleClick={this.handleClick.bind(this)}/>
				//<filmList />
				//</div>
			)
	}
}
export default Home