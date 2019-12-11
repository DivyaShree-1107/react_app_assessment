// import React, { Component } from 'react';
// // import {connect} from 'react-redux';
// // import {onhandleChange,check} from '../Actions/Task6Actions';
// // import Navbar from '../Navbar/Navbar';

// class Login extends Component {
//     render() {
//         return (
//             // <div>
//             //     <div>
//             //         <table>
//             //             <tr>
//             //                 <td>User Name</td>
//             //                 <td><input type="text"/></td>
//             //             </tr>
//             //             <tr>
//             //                 <td>Password</td>
//             //                 <td><input type="password"/></td>
//             //             </tr>
//             //             <tr>
//             //                 <td><button>Login</button></td>
//             //                 <td><button>Register</button></td>
//             //             </tr>
//             //         </table>
//             //     </div>
//             // </div>
//         );
//     }
// }

// export default Login;
// import React from 'react'
// import { Field, reduxForm } from 'redux-form'
// import submit from './submit'

// const renderField = ({ input, label, type, meta: { touched, error } }) => (
//   <div>
//     <label>{label}</label>
//     <div>
//       <input {...input} placeholder={label} type={type} />
//       {touched && error && <span>{error}</span>}
//     </div>
//   </div>
// )

// const SubmitValidationForm = props => {
//   const { error, handleSubmit, pristine, reset, submitting } = props
//   return (
//     <form onSubmit={handleSubmit(submit)}>
//       <Field
//         name="username"
//         type="text"
//         component={renderField}
//         label="Username"
//       />
//       <Field
//         name="password"
//         type="password"
//         component={renderField}
//         label="Password"
//       />
//       {error && <strong>{error}</strong>}
//       <div>
//         <button type="submit" disabled={submitting}>
//           Log In
//         </button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   )
// }

// export default reduxForm({form: 'submitValidation'})(SubmitValidationForm)