import React from "react";
import Chart from "./Chart";
import axios from 'axios';
import Img from 'react-image';
import moment from 'moment';

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {'time': moment().format('hh:mm:ss'),
        'probability': 0}
  }

  componentDidMount() {
    // this.interval = setInterval(() => this.setState({'time': Date.now()}), 1000);
    this.interval = setInterval(this.timer.bind(this), 1000)
  }


  timer() {
      axios.get('/api/v1.0/probability')
          .then(res => {
              var r = JSON.parse(JSON.stringify(res))
              // console.log(r)
              // console.log(JSON.parse(res))
              // console.log(JSON.parse(JSON.stringify(res)))
              this.setState({'time':  moment().format('hh:mm:ss'), 'probability': r.data.probability})
      })
      .catch(er => {console.log(er)})

  }

  componentWillUnmount() {
      clearInterval(this.interval);
  }

  render () {
    // console.log(this.state)

    return (
    <div>
    <Chart time={this.state.time} probability={this.state.probability}/>
    </div>);
  }
}
