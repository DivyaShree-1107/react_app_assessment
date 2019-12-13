import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

class AddUser extends Component {
    render() {
        return (
            <div>
                <div className="grid_adduser">
                    <div><PostForm/></div>
                    <div><AllPost/></div>

                </div>
            </div>
        );
    }
}

export default AddUser;