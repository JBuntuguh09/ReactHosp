import React, { Component } from 'react'

 
class Register extends React.Component {
    constructor(props){
        super(props);

        this.state ={
            name : "",
            username : "",
            password : "",
            confirmPassword:"",
            email : "",
            role : ""
            
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleRegister=this.handleRegister.bind(this)
        
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
          })
    }

    handleRegister=()=>{
      alert(this.props.nme);
        if (this.state.name === "") {
          alert("Enter your name");
        } else if (this.state.username === "") {
          alert("Enter your username");
        } else if (this.state.email === "") {
          alert("Enter your email");
        } else if (this.state.password === "") {
          alert("Enter your password");
        } else if (this.state.password !== this.state.confirmPassword) {
          alert("Passwords do not match");
        } else {
          return fetch("http://localhost:5000/api/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-device-info": "sometestingstuffstringsgohere"
            },
            body: JSON.stringify({
              username: this.state.username,
              email : this.state.email,
              name: this.state.name,
              password: this.state.password,
              confirm_password:this.state.confirmPassword,
                role:"Patient"
            })
          })
            .then(response => response.json())
            .then(responseJson => {
              if (responseJson.msg === "User Registered") {
                alert(responseJson.msg);
                this.props.history.push("./");
              } else {
                alert("Unable to register");
              }
            })
            .catch(err => {
              alert(err);
            });
        }
    }
    
  
  
  
    render() {
    return (
        <div className="base-container" style={{width:'100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
                  <div className="header">Login</div>
                  <div className="content">
                      <div className="image">
                          {/* <img  src={image}/> */}
                      
                      </div>
                      <div className="form" >
                          <div className="form-group" >
                              <label htmlFor="username">Name</label>
                              <input type="text" name="name" placeholder="Full Name" value={this.state.name} onChange={this.handleChange} required/>
                          </div>

                          <div className="form-group" >
                              <label htmlFor="username">Username</label>
                              <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} required/>
                          </div>

                          <div className="form-group" >
                              <label htmlFor="username">Email</label>
                              <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange} required/>
                          </div>
  
                          <div className="form-group">
                              <label htmlFor="username">Password</label>
                              <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required type="password"/>
                          </div>

                          <div className="form-group">
                              <label htmlFor="username">Password</label>
                              <input type="text" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange} type="password" required/>
                          </div>
                      </div>
                  </div>
                  <footer className="footer">
                      <button className="btn" style={{color:'white',
                       backgroundColor:'green', borderRadius:5, fontSize:20, padding:10, width:'200%'}}
                       onClick={this.handleRegister}
                       >Register</button>
                      
                  </footer>
              </div>
      )
  }
}

export default Register