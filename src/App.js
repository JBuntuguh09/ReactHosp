import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter,
  Route,
  NavLink,
  Link,
  Redirect
} from "react-router-dom";
import Register from "./components/register";
import Login from "./components/login";
import Start_Page from "./components/Start_Page";
class App extends React.Component {
  constructor(props){
    super(props);
    
    this.state={
      move:true
    }
   // this.handleMove();
  }

  handleMove=()=>{
    this.props.history.push('/home');
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Login} nme ={"joe"}/>
            <Route path="/register" component={Register} />
            <Route path= "/start_page" component={Start_Page}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
