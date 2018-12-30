import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class AddExpense extends Component {
    constructor(props) {
        super(props);

        this.state = {
         disabled: false,
         fields: null,
         values: {},
        };
    }

    updateValue(fieldName, value) {
        // set field value
        var values = this.state.values;
        values[fieldName] = value;

        this.setState({
          values: values,
        });
    }

    async componentDidMount() {
      // TODO: Implement fields to be fetched from database
      var fields = [
          {
              fieldName: "name",
              fieldLabel: "Name",
              fieldType: "Text",
          },
          {
              fieldName: "category",
              fieldLabel: "Category",
              fieldType: "Text",
          },
          {
              fieldName: "price",
              fieldLabel: "Price",
              fieldType: "Number",
          },
          {
              fieldName: "date",
              fieldLabel: "Date",
              fieldType: "Date",
          },
      ];

      this.setState({
          fields,
      });
    }

    async submit() {
        this.setState({
            disabled: true,
        });

        await axios.post('http://localhost:1234/expenses/create', this.state.values);

        console.log(this.state.values);

        this.props.history.push('/');
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card border-primary">
                            <div className="card-header">New Expense</div>
                            <div className="card-body text-left">
                                {this.state.fields === null && <p>Loading Expenses...</p>}
                                {
                                    this.state.fields && this.state.fields.map(field => (
                                        <div className="form-group" key={field.fieldName}>
                                            <label htmlFor="exampleInputEmail1">{field.fieldLabel}:</label>
                                            <input
                                              disabled={this.state.disabled}
                                              type="text"
                                              onBlur={(e) => {this.updateValue(field.fieldName, e.target.value)}}
                                              className="form-control"
                                              placeholder={"Enter "+ field.fieldLabel}
                                            />
                                        </div>
                                    ))
                                }

                                <button disabled={this.state.disabled} className="btn btn-primary"
                                  onClick={() => {this.submit()}}>
                                  Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(AddExpense);
