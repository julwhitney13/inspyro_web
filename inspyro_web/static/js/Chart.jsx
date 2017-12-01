import React from "react";
import RTChart from "react-rt-chart";

export default class Chart extends React.Component {
  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000);
  }

  render() {
    var data = {
      input: getRandomValue(),
    };

    return <RTChart
            fields={["input"]}
            data={data} />
  }
}
