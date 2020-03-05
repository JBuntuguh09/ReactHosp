import React, { Component } from "react";

class Start_Page extends Component {

    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            datasource : null
        };
       
            this.getUser();
    }

    getUser=()=>{
       console.log("user  "+this.props[0]);
        return fetch("http://localhost:5000/api/users/users_profiles",
        {
            method:"GET",
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkOTg3Mzc1YjRhZDBkMWNkMGNlODEiLCJ1c2VybmFtZSI6IkpvbkphIiwibmFtZSI6IkpvbiIsImVtYWlsIjoiakBzYWIuY29tIiwicm9sZSI6IlBhdGllbnQiLCJpYXQiOjE1ODMzODM5NDAsImV4cCI6MTU4MzQ3MDM0MH0.Abj7_q5GMH6ydA-kGPVbf2Hvw8dcubbYxoKiqEOMhv0",
                "Content-Type":"application/json"
            }
        }).then(response=>response.json())
        .then(responseJson=>{
            console.log(responseJson.username);
            this.setState({
                isLoading:false,
                datasource:responseJson
            })
        }).catch((err)=>{
            console.log(err);
        });
    }

    showIssues=()=>{
       
        console.log("user  "+this.props[0]);
        return fetch("http://localhost:5000/api/issues/issues",
        {
            method:"GET",
            headers:{
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTVkOTg3Mzc1YjRhZDBkMWNkMGNlODEiLCJ1c2VybmFtZSI6IkpvbkphIiwibmFtZSI6IkpvbiIsImVtYWlsIjoiakBzYWIuY29tIiwicm9sZSI6IlBhdGllbnQiLCJpYXQiOjE1ODMzODM5NDAsImV4cCI6MTU4MzQ3MDM0MH0.Abj7_q5GMH6ydA-kGPVbf2Hvw8dcubbYxoKiqEOMhv0",
                "Content-Type":"application/json"
            }
        }).then(response=>response.json())
        .then(responseJson=>{
            console.log(responseJson.username);
            this.setState({
                isLoading:false,
                datasource:responseJson
            })
        }).catch((err)=>{
            console.log(err);
        });
    }

  render() {
      var myUsers = <div></div>
    if(!this.state.isLoading && this.state.datasource!==null){
        console.log(this.state.datasource);
         myUsers = this.state.datasource.map((val, key)=>{
            if(val.role==="Patient"){
            return(
                <div style={{ display:'flex', width:'80%', padding:15, borderStyle:'solid', borderColor:'green'}} >
                    <form >
                        
                        <div style={{display:'flex', flexDirection:'row',  borderColor:'green'}}>
                            <label>Patient Name : </label>
                            <label>{val.name}</label>

                        </div>
                        <div style={{display:'flex', flexDirection:'row',  borderColor:'green'}}>
                            <label>Username : </label>
                            <label>{val.email}</label>
                           
                        </div>

                        <button onClick={this.showIssues} >View</button>
            
                    </form>
                </div>
            )
            }
        })
    
    }
    
    return (
        <div style={{ alignContent:'center', alignSelf:'center', justifyContent:'center', display:'flex', flexDirection:'column', justifySelf:'center', justifyItems:'center'
        , alignItems:'center'}}>
            <h2>Patients</h2>
          {myUsers}  
        </div>
    )
  }
}

export default Start_Page;
