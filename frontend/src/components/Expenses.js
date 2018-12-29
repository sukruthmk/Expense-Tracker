import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Expenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: null,
    };
  }

  async componentDidMount() {
    // const expenses = (await axios.get('http://localhost:8081/')).data;
    // this.setState({
    //   expenses,
    // });

    // TODO: Implement database to fetch the expenses
    var expenses = {
        headers : {
            name : "Name",
            value: "Value",
            date: "Date"
        },
        contents: [
            {
                name: "test",
                value: 10,
                date: "12/20/2018"
            },
            {
                name: "test 2",
                value: 20,
                date: "12/20/2018"
            }
        ]
    };

    this.setState({
        expenses,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.expenses === null && <p>Loading Expenses...</p>}
          <table class="table table-hover">
              <thead>
                <tr>
                    {
                        this.state.expenses && this.state.expenses.headers &&
                        Object.keys(this.state.expenses.headers).map(key => (
                            <td>{this.state.expenses.headers[key]}</td>
                        ))
                    }
                </tr>
              </thead>
              <tbody>
                    {
                        this.state.expenses && this.state.expenses.contents &&
                        this.state.expenses.contents.map(expense => (
                            <tr>
                                {
                                    Object.keys(this.state.expenses.headers).map(key => (
                                        <td> {expense[key]} </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
              </tbody>
            </table>
        </div>
      </div>
    )
  }
}

export default Expenses;
