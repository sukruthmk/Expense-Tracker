import React from 'react';
import {Link} from 'react-router-dom';

function CreateButton() {
    return (
        <div className="container">
            <div className="row">
                <div className="row-container width100">
                    <div className="btn-group float-right" role="group">
                        <Link className="btn btn-outline-primary" to="/add">
                            {/* Integrate fontawesome */}
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            Add
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateButton;
