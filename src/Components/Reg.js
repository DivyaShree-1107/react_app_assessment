import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {onHandleChange,onClick} from '../Actions/Reg_Action';
// import Navbar from '../Navbar/Navbar';

const passRegex

const formValid=formErrors =>{
  let valid = true;

  Object.values(formErrors).forEach(val=>{
    val.length>0  && (valid= false);
  })
  return valid;
}

class Reg extends Component {  
  constructor(props){
    super(props);
    this.state={
      firstName:null,
      lastName:null,
      userName:null,
      password:null,
      formErrors:{
        firstName:" ",
        lastName:" ",
        userName:" ",
        password:" "
      }
    };
  }
  handelSubmit = e =>{
    e.preventDefault();
    if(formValid(this.state.formErrors))
    {
      console.log(this.state.firstName);
    }
    else
    {
      console.error("form invalid")
    }
    }
  };

  handleChange = e =>{
    e.preventDefault();
      const{name, values} = e.target;
      let formErrors= this.state.formErrors;

    switch(name){
      case "firstName":
        formErrors.firstName=
        value.length < 3 && value.length > 0 ? "Minimum 3 characters required": "";
        break;
        case "lastName":
        formErrors.lastName=
        value.length < 3 && value.length > 0 ? "Minimum 3 characters required": "";
        break;
        case "userName":
        formErrors.userName=
        value.length < 3 && value.length > 0 ? "Minimum 3 characters required": "";
        break;
        case "password":
        formErrors.password=
        value.length < 6 && value.length > 0 ? "Minimum 6 characters required": "";
        break;
    }

      };
    
    
      render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handelSubmit}noValidate>
                        <h1>Registration</h1>
                            <div>
                                <label>First Name</label>
                                <input type="text" name="firstName"  placeholder="First Name" noValidate onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <input type="text" name="lastName" placeholder="Last Name" noValidate onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label>User Name</label>
                                <input type="text" name="userName"  placeholder="User Name" noValidate onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" name="password" placeholder="Password" noValidate onChange={this.handleChange}/>
                            </div>
                            <div>
                                <button name="reg" onSubmit={this.props.onClick}>Register</button>
                                <button name="cancel"  onClick={this.props.onClick}>Cancel</button>
                            </div>
                    </form>
                </div>
            </div>
        );
    }
}

// submit = (values) => {
//   alert("submitted");
// }

// const validate = values => {
//     const errors = {}
//     if (!values.firstName) {
//       errors.firstName = 'Required'
//     } else if (values.firstName.length < 2) {
//       errors.firstName = 'Minimum be 2 characters or more'
//     }
//    if (!values.lastName) {
//         errors.lastName = 'Required'
//       } else if (values.lastName.length < 2) {
//         errors.lastName = 'Minimum be 2 characters or more'
//       }
//       if (!values.userName) {
//         errors.lastName = 'Required'
//       } else if (values.lastName.length < 2) {
//         errors.lastName = 'Minimum be 2 characters or more'
//       }
//     return errors
//   }

// const mapStateToProps = (state) => {
   
//   const {}=state.Reg_Reducer1;
//       return {};
//   };

  export default Reg;