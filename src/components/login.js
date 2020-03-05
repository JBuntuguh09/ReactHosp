import React, { Component } from 'react';

import '../App.css';
import '../components/style.css'
import { Redirect } from 'react-router-dom';



class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleChange = this.handleChange.bind(this)
    
  }

  handleLogin(event) {
    
    if(this.state.email===""){
      alert("Enter your username");
    }else if(this.state.password===""){
      alert("Enter your password");
    }else {
      
    return fetch("http://localhost:5000/api/users/login",

          {
              method:'POST',
              headers: {
                      "Content-Type": "application/json"
                     
                    },
              body: JSON.stringify({
                "username" : this.state.email,
                "password" : this.state.password
              })
             
          }).then((response)=>response.json())
          .then((responseJson) =>{
              if(responseJson.token !== undefined){
                console.log("successfull");
                this.props.history.push('/start_page');

              }else {
                alert("You entered a wrong username or password");
              }
          }).catch((err)=>{
              alert(err)
          })

        } 
        

   // event.preventDefault();
        }


    navToRegister=()=>{
      
        this.props.history.push('/register', "stuff");
        
        
    }    
  

  handleChange(event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  render() {
    return (
     
      <div className="base-container" style={{width:'100%', display:'flex', alignItems:'center', flexDirection:'column'}}>
                
                <div className="content">
                <div className="header">Login</div>
                    <div className="image">
                        {/* <img  src={image}/> */}
                    
                    </div>
                    <div className="form" >
                        <div className="form-group" >
                            <label htmlFor="username">Username</label>
                            <input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}  required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="username">Password</label>
                            <input type="text" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} type="password" required/>
                        </div>
                    </div>

                    <footer className="footer">
                    <button className="btn" style={{color:'white',
                     backgroundColor:'green', borderRadius:5, fontSize:20, padding:10, width:200}}
                     onClick={this.handleLogin}
                     >Login</button>

                    <button className="btn" style={{color:'white',
                     backgroundColor:'blue', borderRadius:5, fontSize:20, padding:10, width:200}}
                     onClick={this.navToRegister}
                     >Register</button>
                   
                    
                </footer>
                </div>
                
            </div>
            
         
           
    )
  }
}

export default Login;
