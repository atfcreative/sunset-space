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
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-sm-10"><h1>User name</h1></div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                  
                  <div className="text-center">
                    <img src={avatar} className="avatar img-circle img-thumbnail" alt="avatar" />
                    <h6>Upload a different photo...</h6>
                    <input type="file" className="text-center center-block file-upload" />
                  </div><hr/><br/>
                    <div className="panel panel-default">
                        <div className="panel-heading">Website <i className="fa fa-link fa-1x"></i></div>
                        <div className="panel-body"></div>
                      </div>
            
                    </div>
                    <div className="col-sm-9">
            
                      <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <hr />
                              <form className="form" action="##" method="post" id="registrationForm">
                                  <div className="form-group">
            
                                      <div className="col-xs-6">
                                          <label for="first_name"><h4>First name</h4></label>
                                          <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                                      </div>
                                  </div>
                                  <div className="form-group">
            
                                      <div className="col-xs-6">
                                        <label for="last_name"><h4>Last name</h4></label>
                                          <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                                      </div>
                                  </div>
            
                                  <div className="form-group">
            
                                      <div className="col-xs-6">
                                          <label for="phone"><h4>Phone</h4></label>
                                          <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                                      </div>
                                  </div>
            
                                  <div className="form-group">
                                      <div className="col-xs-6">
                                         <label for="mobile"><h4>Website</h4></label>
                                          <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any." />
                                      </div>
                                  </div>
                                  <div className="form-group">
            
                                      <div className="col-xs-6">
                                          <label for="email"><h4>Email</h4></label>
                                          <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                      </div>
                                  </div>
                                  <div className="form-group">
            
                                      <div className="col-xs-6">
                                          <label for="username"><h4>Username</h4></label>
                                          <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
                                      </div>
                                  </div>
                                  <div className="form-group">
            
                                      <div className="col-xs-6">
                                          <label for="password"><h4>Password</h4></label>
                                          <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                                      </div>
                                  </div>
                                  <div className="form-group">
            
                                      <div className="col-xs-6">
                                        <label for="password2"><h4>Verify</h4></label>
                                          <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2." />
                                      </div>
                                  </div>
                                  <div className="form-group">
                                       <div className="col-xs-12">
                                            <br/>
                                            <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign"></i> Save</button>
                                            {/* <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat"></i> Reset</button> */}
                                        </div>
                                  </div>
                            </form>
            
                          <hr />
            
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