import React from "react";
import Chart from "./Chart";

export default class App extends React.Component {
  render () {
    return (
    <div>
    <Image style={{width: 50, height: 50}} source={require('../images/fire.jpg')} />
    <Chart />
    </div>);
  }
}
