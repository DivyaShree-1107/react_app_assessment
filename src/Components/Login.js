import React, { Component } from 'react';
// import '../Components/Register.css';
import browserHistory from '../Utils/browserHistroy' ;

class Login extends Component {
    constructor() {
    super();
    this.state = {
    fields: {},
    errors: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    onHandleClick(){
        browserHistory.push("/reg");
    }
    
    HandleClick(){
        browserHistory.push("/add");
    }

    handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
    fields
    });

    }

    submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
    let fields = {};
    fields["username"] = "";
    fields["password"] = "";
    this.setState({fields:fields});
    alert("Login Successfull");
    
    }
    }

    validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
    formIsValid = false;
    errors["mobileno"] = "*Please enter your mobile no.";
    }

    if (typeof fields["username"] !== "undefined") {
    if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
    formIsValid = false;
    errors["username"] = "*Please enter valid mobile no.";
    }
    }

    if (!fields["password"]) {
    formIsValid = false;
    errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
    if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    formIsValid = false;
    errors["password"] = "*Please enter secure and strong password.";
    }
    }

    this.setState({
    errors: errors
    });
    return formIsValid;
    }


render() {
    return (
        <div id="main-registration-container">
            <div id="register">
                <h3>Login page</h3>
                <form method="post" name="userRegistrationForm" onSubmit= {this.submituserRegistrationForm} >
                    <label>User Name:</label>
                    <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.username}</div>
                    <label>Password :</label>
                    <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    <div className="errorMsg">{this.state.errors.password}</div>
                    <input type="submit" onClick={this.HandleClick} className="button" value="Login"/>
                    <button onClick={this.onHandleClick} className="button">Register</button>
                </form>
            </div>
        </div>

    );
}
}
export default Login;