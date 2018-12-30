import React, {Component} from 'react';
import axios from 'axios';
import CreateButton from './CreateButton';
import ExpenseSummary from './ExpenseSummary';

class Expenses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses: null,
    };
  }

  async componentDidMount() {
    var data = (await axios.get('http://localhost:1234/expenses')).data;

    // TODO: Implement headers fetch from database
    var expenses = {
        headers : {
            name : "Name",
            category: "Category",
            price: "Price",
            date: "Date"
        },
        contents: data
    };

    this.setState({
        expenses,
    });
  }

  render() {
    return (
        <div>
            <ExpenseSummary expenses={this.state.expenses}>
            </ExpenseSummary>
            <CreateButton>
            </CreateButton>
            <div className="container">
                <div className="row">
                    {this.state.expenses === null && <p>Loading Expenses...</p>}
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {
                                    this.state.expenses && this.state.expenses.headers &&
                                    Object.keys(this.state.expenses.headers).map((key, index) => (
                                        <td key={index}>{this.state.expenses.headers[key]}</td>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.expenses && this.state.expenses.contents &&
                                this.state.expenses.contents.map(expense => (
                                    <tr key={expense._id}>
                                        {
                                            Object.keys(this.state.expenses.headers).map((key, index) => (
                                                <td key={index}> {expense[key]} </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
  }
}

export default Expenses;
