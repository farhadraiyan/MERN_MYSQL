import React, { Component } from 'react';
import "./register.css"

class Register extends Component {
    state = {}
    render() {
        return (
            <div class="container">
                <div class="row justify-content-center my-4">
                    <div class="col-md-6 text-center">
                        <h2>Create Your Account</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class=" form-style text-light col-md-8 col-sm-12">
                        <form action="" class="p-4">
                            <div class="form-group">
                                <label for="name" class="text-dark">Name</label>
                                <input type="name" class="form-control" id="name" placeholder="Enter your name" />
                            </div>
                            <div class="form-group">
                                <label for="email" class="text-dark">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-dark">Password</label>
                                <input type="password" class="form-control" id="password"/>
                            </div>
                            <div class="form-group">
                                <label for="confirmPassword" class="text-dark">Confirm Password</label>
                                <input type="password" class="form-control" name="confirmPassword" id="confirmPassword"/>
                            </div>
                                <button type="submit" class="btn btn-primary">Register</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Register;