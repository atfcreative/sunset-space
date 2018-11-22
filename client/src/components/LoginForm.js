import React, { Component } from 'react';

class LoginForm extends Component {
    state = {  }
    render() { 
        return (
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                <form>
                    <div className="col text-center">
                      <h1>Login</h1>
                      <p className="text-h3">Welcome back! We were hoping to see you again!</p>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
        </div>

        );
    }
}
 
export default LoginForm;