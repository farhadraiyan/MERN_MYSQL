import React, { Component, Fragment } from 'react';
import User from "./user/user";

class Users extends Component {
    state = {
        users: [
            { id: 1, name: "farahd" },
            { id: 2, name: "hossain" },
            { id: 3, name: "raiyan" }
        ]
    }
    render() {
        return (
            <React-Fragment>
                <div>
                    <h1>List of users</h1>
                    {this.state.users.map(user => <User onDelete={this.deleteHandler} key={user.id} id={user.id} name={user.name}></User>)}
                </div>
            </React-Fragment>

        );
    }
    deleteHandler=(userId)=>{
        console.log("event handled", userId);
        const updatedUsers=this.state.users.filter(user =>
            user.id==userId
        )
        this.setState({ users : updatedUsers })
    }
}

export default Users;