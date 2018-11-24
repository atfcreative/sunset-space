import React, { Component } from 'react';
import UserProfile from '../users/UserProfile';
// import jwt_decode from 'jwt-decode';
// import UsersAPI from '../../models/usersAPI';
import axios from 'axios';

class ProfilePage extends Component {
    state = { 
        user: {},
        isLoading: false
      }

    signal = axios.CancelToken.source();

    componentDidMount = () => {
        this.onLoadUser();
        // let user = jwt_decode(localStorage.getItem('jwtToken'));
        // let id = user._id;
        // UsersAPI.showById(id)
        //     .then(res => {
        //         this.setState({
        //             user: res.data
        //         })
        //     })
        //     .catch(error => console.log(error.response));
    }


  componentWillUnmount() {
    this.signal.cancel('Api is being canceled');
  }

       onLoadUser = async () => {
            
        try {
          this.setState({ isLoading: true });
          const response = await axios.get(`http://localhost:4000/api/users`, {
            cancelToken: this.signal.token,
          })
          this.setState({ user: response.data, isLoading: true });
        } catch (err) {
          if (axios.isCancel(err)) {
            console.log('Error: ', err.message); // => prints: Api is being canceled
          } else {
            this.setState({ isLoading: false });
          }
        }
       } 

    //example ----
    //    onLoadUser = async () => {
    //     try {
    //       this.setState({ isLoading: true });
    //       const response = await axios.get('https://randomuser.me/api/', {
    //         cancelToken: this.signal.token,
    //       })
    //       this.setState({ user: response.data, isLoading: true });
    //     } catch (err) {
    //       if (axios.isCancel(err)) {
    //         console.log('Error: ', err.message); // => prints: Api is being canceled
    //       } else {
    //         this.setState({ isLoading: false });
    //       }
    //     }
    //    } 

    render() { 
        return (
            <UserProfile userData={this.state.user}  />
        );
    }
}
 
export default ProfilePage;