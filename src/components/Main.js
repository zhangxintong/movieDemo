require('normalize.css/normalize.css');
require('styles/App.css');

var React = require('react');
var ReactDOM = require('react-dom');
var FilmList = require("./FilmList");
var Head =require("./Head");
var SideBar = require("./SideBar");

class AppComponent extends React.Component {
  constructor(props){
  	super(props);
  	this.state = {
  		isOpen:false
  	}
  	this.onStateChanged = this.onStateChanged.bind(this);
  }
  onStateChanged(newState){
  	console.log("****888"+newState);
  	this.setState({
  		isOpen:newState
  	});
  	console.log("main this.state.isOpen"+this.state.isOpen);
  }
  render() {
  	console.log("render"+this.state.isOpen);
    return (
   	<main>
      <div className="index">
      	<div className="application-head">
      		<Head initialIsOpen={this.state.isOpen} callbackParent={this.onStateChanged}/>
      	</div>
      	<div className="application-view">
	      <section className="filmInfo">
		    <FilmList/>
	      </section>
	    </div>
	       	{this.state.isOpen == true?<SideBar/>:null}

      </div>
    </main>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
