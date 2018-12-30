import React, {Component} from 'react';


class ExpenseSummary extends Component {

    count(array, key) {
        return array.reduce(function (r, a) {
            return r + a[key];
        }, 0).toFixed(2);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="row-container width100">
                        <div className="col-4">
                            {
                                this.props.expenses && this.props.expenses.contents &&
                                <div class="card bg-light mb-3">
                                    <div class="card-header">Total Expense</div>
                                    <div class="card-body">
                                        <h4 class="card-title">{this.count(this.props.expenses.contents, "price")}</h4>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpenseSummary;
