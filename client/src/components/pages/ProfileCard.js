import React, { Component } from 'react';
import avatar from './default-avatar.jpg';

class ProfileCard extends Component {
    render() { 
        const user = this.props.userData;
        return (
        <div className="container">
            <div className="row">
                <div className="col-sm-10">
                <h1>User name
                    {/* {user.username} */}
                    </h1></div>
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
                    <div className="panel-heading">Website{user} 
                    {/* <i className="fa fa-link fa-1x"></i> */}
                    </div>
                    <div className="panel-body"></div>
                  </div>
        
                </div>
                <div className="col-sm-9">
        
                  <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <hr/>
                          <form className="form" onSubmit={this.handleSubmit} method="post" id="registrationForm">
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label forhtml="first_name"><h4>First name</h4></label>
                                      <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                    <label forhtml="last_name"><h4>Last name</h4></label>
                                      <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" />
                                  </div>
                              </div>
        
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label forhtml="phone"><h4>Phone</h4></label>
                                      <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" />
                                  </div>
                              </div>
        
                              <div className="form-group">
                                  <div className="col-xs-6">
                                     <label forhtml="mobile"><h4>Website</h4></label>
                                      <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label forhtml="email"><h4>Email</h4></label>
                                      <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label forhtml="username"><h4>Username</h4></label>
                                      <input type="email" className="form-control" id="location" placeholder="somewhere" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                      <label forhtml="password"><h4>Password</h4></label>
                                      <input type="password" className="form-control" name="password" id="password" placeholder="password" />
                                  </div>
                              </div>
                              <div className="form-group">
        
                                  <div className="col-xs-6">
                                    <label forhtml="password2"><h4>Verify</h4></label>
                                      <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" />
                                  </div>
                              </div>
                              <div className="form-group">
                                   <div className="col-xs-12">
                                        <br />
                                        <button className="btn btn-lg btn-success" type="submit">Save</button>
                                    </div>
                              </div>
                        </form>
        
                      <hr/>
        
                     </div>
                  </div>
        
                </div>
            </div>
        </div>
        );
    }
}
 
export default ProfileCard;