import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import './register.css'
import { newRegistration } from './service/Service';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import TextField from '@material-ui/core/TextField';
//import "./sideBarStyles.css";
import "./register.css"
const initialState = {
 
  firstName: "",
  lastName: "",
  email: "",
  mobileNumber:"",
  password: "",
 
 
  address:"",
  DOR:""
};

class CreateProduct extends Component {
  state = initialState

  handleChange = event => {
    this.setState({
      [event.target.name]
        : event.target.value
    });
  };

  newRegistration = () => {
    let registeration = {}
    registeration.firstName = this.state.firstName
    registeration.lastName = this.state.lastName
    registeration.email = this.state.email
    registeration.password = this.state.password
    registeration.mobileNumber = this.state.mobileNumber
    registeration.address = this.state.address
    registeration.DOR = this.state.DOR
  //  registeration.confirm_password = this.state.confirm_password
  newRegistration(registeration)
      .then(Response => {
        onclick = this.props.history.push('/')
      })
      .catch(error => {
        //console.log(error.response.data)
       // alert(error.response.data.message)
      });
  }

  render() {
    return (
      
      <div className="align">
        <form className="form1">
          <h2 style={{ fontSize: "25px", fontStyle: "Italic" }}>Product</h2>
          <div className="form-row">
           
              </div>
          <div className="form-row">
            <label>Name</label>
            <TextField type="text" placeholder="First Name" name="firstName" value={this.state.firstName}
              onChange={this.handleChange} required />
          </div>
         
          <div className="form-row">
            <label>LastName</label>
           
            <TextField type="text" placeholder="First Name" name="lastName" value={this.state.lastName}
              onChange={this.handleChange} required />          </div>

              
          <div className="form-row">
            <label>Category</label>

            <TextField type="text" placeholder="First Name" name="email" value={this.state.email}
              onChange={this.handleChange} required /> 

            {/* <input type="email" placeholder="email" name="email" value={this.state.email}
              onChange={this.handleChange} required ></input> */}
          </div>
          <div className="form-row">
            <label>Quantity</label>
            <TextField type="password" placeholder="password" name="password" value={this.state.password}
              onChange={this.handleChange} required /> 


            {/* <input type="password" placeholder="password" name="password" value={this.state.password}
              onChange={this.handleChange} required ></input> */}
          </div>

          <div className="form-row">
            <label>Weight</label>
            <TextField  type="text" placeholder="Mobile number" name="mobileNumber" value={this.state.mobileNumber}
              onChange={this.handleChange} required /> 
              </div>

              

              <div className="form-row">
            <label>Date Of Registration</label>
            <TextField type="text" placeholder="Date Of Registration" name="DOR" value={this.state.DOR}
              onChange={this.handleChange}  /> 
              </div>
          {/* <div className="form-row">
            <label>Confirm password</label>
            <input type="password" placeholder="password" name="confirm_password" value={this.state.confirm_password}
              onChange={this.handleChange} required ></input>
          </div> */}
          <div className="form-row">
            {/* <h6 style={{ marginLeft: "10px" }}> Back To Login?</h6> */}
            {/* <KeyboardReturnIcon id="backicon" onClick={() => this.props.history.push('/')} ></KeyboardReturnIcon> */}
            <Button variant="contained" color="Primary"
              onClick={this.newRegistration}>Register</Button>
          </div>
        </form>
      </div>
    )
  }
}
export default CreateProduct