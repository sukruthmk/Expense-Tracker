import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class AddExpense extends Component {
    constructor(props) {
        super(props);

        this.state = {
         disabled: false,
         title: '',
         description: '',
        };
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    
                </div>
            </div>
        )
    }
}

export default withRouter(AddExpense);
