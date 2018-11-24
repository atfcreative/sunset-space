import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

class LogInForm extends Component {
    state = { username: '', password: '' }
    
        handleChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
            // console.log(this.state);

        }

        handleSubmit = (event) => {
            event.preventDefault();
            const userData = {
                username: this.state.username,
                password: this.state.password
            }

        axios.post('http://localhost:4000/api/users/signin', userData)
            .then(res => {
                // console.log(res);
                const {token} = res.data;
                /*== make sure to save the jwt token ==*/
                localStorage.setItem('jwtToken', token);
                /*== make sure to decode token ==*/
                const decoded = jwt_decode(token);
                /*== this token goes to this user ==*/
                this.props.setCurrentUser(decoded);
                this.props.history.push('/profile');
                // console.log(this.props);
                alert('Killer! You are now logged in...');
            })
            .catch(err => {
                alert(`Invalid credentials bruh...`)
                console.log(err)
            });
        };


        render() { 
        return (
            <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="col text-center">
                      <h1>Login</h1>
                      <p className="text-h3"><strong>Welcome back,</strong> Glad to see you again!</p>
                      <small className="text-muted">Per our privacy policy, we will never share personal information <Link to="/">learn more</Link></small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputUsername">Username</label>
                        <input type="text" className="form-control" id="inputusername" name="username" placeholder="Enter username" onChange={this.handleChange} value={this.state.username} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword">Password</label>
                        <input type="password" className="form-control" id="inputuserpassword" name="password" placeholder="Enter password" onChange={this.handleChange} value={this.state.password} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <small className="m-2" ><Link to="/signin">Already a member?</Link></small>
                </form>
              </div>
            </div>
        </div>

          );
    }
}
 
export default LogInForm;










