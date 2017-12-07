import React from "react";
import {LineChart, AreaChart} from 'react-easy-chart';
import {Alert, Col} from 'react-bootstrap';
import FireChart from "./FireChart"

export default class Chart extends React.Component {

    constructor(props) {
      super(props)
      this.threshold = .83
      this.fire = false
      this.state = {
          'x': this.props.time,
          'y': this.props.probability,
      }
      this.firstTime = this.props.time
      this.values = [this.state]
      this.color = 'green'
      this.fires = []
    }

    componentWillReceiveProps(newProps) {
        this.values.push({'x': newProps.time, 'y': newProps.probability})
        if (this.values.length >= 20) {
            this.values.shift()
        }
        this.firstTime = this.values[0].x

        if (newProps.probability > this.threshold) {
            this.fire = true
            this.color = 'red'
            this.fires.push({'x': newProps.time, 'y': newProps.probability})
        } else {
            this.fire = false
            this.color = 'green'
        }
        this.forceUpdate()
    }

    render() {
        // console.log(this.values)
        var showAlert

        if (this.fire) {
            showAlert = (
                <Alert className="text-center" bsStyle="danger">
                    <h1>FIRE!</h1>
                </Alert>
            )
        }

        var chart = (
            <div className="text-center">
                        <LineChart
                            data={[
                                this.values,
                                [{'x': this.firstTime, 'y': this.threshold },
                                 {'x': this.props.time, 'y': this.threshold }]
                            ]}
                            datePattern={'%H:%M:%S'}
                            xType={'time'}
                            width={1000}
                            height={500}
                            axisLabels={{x: 'Time', y: 'Percentage'}}
                            interpolate={'cardinal'}
                            yDomainRange={[0, 1]}
                            lineColors={[this.color, 'blue']}
                            axes
                            grid
                        />
                        {showAlert}
                <Col md={4}>
                    <FireChart fires={this.fires} />
                </Col>
            </div>
        )
        return chart
    }
}
