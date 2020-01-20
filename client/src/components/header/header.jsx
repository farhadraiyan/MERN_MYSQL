import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import "./style.scss"

class Header extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-expand-lg">
                <div  class="ml-5 mt-2 mb-2 "> <Link to="/" class="text-light">Home</Link></div>
                <div class="ml-5 mt-2 mb-2 "> <Link to="/users" class="text-light">UserList</Link></div>

                <div class="collapse navbar-collapse justify-content-end mr-5 mt-2 mb-2">
                    <span class="mr-3"></span>
                    <button class="mx-3 btn btn-primary">Login</button>
                    <button class="btn btn-info" >Logout</button>
                </div>
            </nav>
        );
    }
}

export default Header;