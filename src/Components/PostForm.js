import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './adduser.css';

class PostForm extends Component {
handleSubmit = (e) => {
e.preventDefault();
 const title = this.getTitle.value;
 const message = this.getMessage.value;
 const data = {
  id: new Date(),
  title,
  message,
  editing: false
 }
 this.props.dispatch({
 type: 'ADD_POST',
 data
 })
 this.getTitle.value = '';
 this.getMessage.value = '';
}
render() {
return (
<div className="post-container">
  <h1 className="post_heading">Create User</h1>
  <form className="form" onSubmit={this.handleSubmit} >
   <label>Name</label>
   <input required type="text" ref={(input) => this.getTitle = input}
   placeholder="Enter Name" /><br /><br />
   <label>User Name</label>
   <input required type="text" ref={(input) => this.getMessage = input}
   cols="28" placeholder="Enter User Name" /><br /><br />
   <button>Add User</button>
  </form>
</div>
);
}
}
export default connect()(PostForm);