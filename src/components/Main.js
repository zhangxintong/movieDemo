require('normalize.css/normalize.css');
require('styles/App.css');

var React = require('react');
var ReactDOM = require('react-dom');
var SwiperFilm = require("./SwiperFilm");
var FilmList = require("./FilmList");

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
	      <div className="filmInfo">
	       	<SwiperFilm/>
	       	<FilmList/>
	      </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
