import React, { Component } from 'react';
import { connect } from 'react-redux';
// import './adduser.css';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const data = {
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div key={this.props.post.id} className="post">
  <form className="form" onSubmit={this.handleEdit}>
      <table>
    <tr> 
        <td><input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} /></td>
    <td><input required type="text" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} /></td>
    <button>Update</button>
    </tr>
    </table>
  </form>
</div>
);
}
}
export default connect()(EditComponent);