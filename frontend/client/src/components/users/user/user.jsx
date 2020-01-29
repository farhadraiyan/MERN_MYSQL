import React, { Component, Fragment } from 'react';

class User extends Component {
    state = {}
    render() {
        
        return (
            <Fragment>
                <h5>User # {this.props.id}</h5>
                <span class="mr-4">Name: {this.props.name}  </span> 
                <button onClick={()=>this.props.onDelete(this.props.id)} class="btn btn-danger mr-4">Delete</button>
            </Fragment>

        );
    }
}

export default User;