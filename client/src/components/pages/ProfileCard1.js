import React, { Component } from 'react';
import avatar from './default-avatar.jpg';
import jwt_decode from 'jwt-decode';

class ProfileCard extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            isLoaded: false
        };
    }

    componentDidMount() {
        let user = jwt_decode(localStorage.getItem('jwtToken'));
        let id = user._id;
        fetch('http://localhost:4000/api/users/' + id)
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        }); 
    }


    

render() { 

    let { isLoaded, items } = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    else {

        // const user = this.props.userData;
        // console.log(this.props.userData);
        return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10"><h1>{items.username}</h1></div>
                <div className="col-sm-2"></div>
            </div>
            <div className="row">
                <div className="col-sm-3">
              
              <div className="text-center">
                <img src={avatar} className="avatar img-circle img-thumbnail" alt="avatar" />
                <h6>Upload a different photo...</h6>
                <input type="file" className="text-center center-block file-upload" />
                <small className="text-muted">Member since: {items.dateAdded}</small>
              </div><hr/><br/>
                <div className="panel panel-default">
                    <div className="panel-heading">{items.website} <i className="fa fa-link fa-1x"></i></div>
                    <div className="panel-body"></div>
                  </div>
                </div>
                <div className="col-sm-9">
        
                  <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <hr/>
                          <div className="form" onSubmit={this.handleSubmit} method="post" id="registrationForm">
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label htmlFor="first_name"><h4>First Name: {items.firstName}</h4></label>
                                      <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                    <label htmlFor="last_name"><h4>Last Name: {items.lastName}</h4></label>
                                      <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" />
                                  </div>
                              </div>
        
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label htmlFor="phone"><h4>Phone: {items.phone}</h4></label>
                                      <input type="text" className="form-control" name="phone" id="phone" placeholder="Update phone" />
                                  </div>
                              </div>
        
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label htmlFor="email"><h4>Email: {items.email}</h4></label>
                                      <input type="email" className="form-control" name="email" id="email" placeholder="Update email" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label htmlFor="username"><h4>Username: {items.username}</h4></label>
                                      <input type="email" className="form-control" id="location" placeholder="Update Username" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label htmlFor="password"><h4>Reset Password</h4></label>
                                      <input type="password" className="form-control" name="password" id="password" placeholder="password" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                    <label htmlFor="password2"><h4>Verify Password</h4></label>
                                      <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" />
                                  </div>
                              </div>
                              <div className="form-group">
                                   <div className="col-xs-12">
                                        <br />
                                        <button className="btn btn-lg btn-success" type="submit">Save</button>
                                    </div>
                              </div>
                        </div>
        
                      <hr/>
        
                     </div>
                  </div>
        
                </div>
            </div>
        </div>
        );
        }
    }
}
 
export default ProfileCard;