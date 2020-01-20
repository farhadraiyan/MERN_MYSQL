import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import users from "./components/users/users";
import register from "./components/users/register/register";
import login from "./components/users/login/login";
import { Route, BrowserRouter } from "react-router-dom";

const routing = (
    <BrowserRouter>
      <div>
        <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={users} />
          <Route exact path="/register" component={register} />
          <Route exact path="/login" component={login} />
          {/* <Route component={Notfound} /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ReactDOM.render(routing, document.getElementById("root"));
