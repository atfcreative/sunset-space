import React, { Component } from 'react';
import UserProfile from '../users/UserProfile';
import jwt_decode from 'jwt-decode';
import UsersAPI from '../../models/usersAPI';


class ProfilePage extends Component {
    state = { user: null,  }

    componentDidMount = () => {
        let user = jwt_decode(localStorage.getItem('jwtToken'));
        let id = user._id;
        UsersAPI.showById(id)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
            .catch(error => console.log(error.response));
    }

    render() { 

        return (
            <UserProfile userData={this.state.user}  />
        );
    }
}
 
export default ProfilePage;