require('normalize.css/normalize.css');
require('styles/App.css');

var React = require('react');
var ReactDOM = require('react-dom');
var FilmList = require("./FilmList");


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
       <FilmList/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
