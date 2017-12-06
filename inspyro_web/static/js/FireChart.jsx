import React from "react";
import {Table, Image} from 'react-bootstrap';

export default class FireChart extends React.Component {

    constructor(props) {
      super(props)
    }

    render() {
        return (
        <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>Time</th>
                <th>% Fire</th>
              </tr>
            </thead>
            <tbody>
                {this.props.fires.map((fire, i) =>
                    <tr>
                      <td>{fire.x}</td>
                      <td>{parseFloat(Math.round(fire.y * 100) / 100).toFixed(2) * 100 }%</td>
                    </tr>
                )}
            </tbody>
          </Table>
        )
    }
}
