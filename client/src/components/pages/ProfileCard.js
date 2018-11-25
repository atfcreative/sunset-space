import React, { Component } from 'react';
// import avatar from './default-avatar.jpg';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
 
class ProfileCard extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            file: null,
            // firstName: '',
            // lastName: '',
            // email: '',
            // username: '',
            // website: '',
            // phone: '',
            isLoaded: false,
        };
        this.handleFileSubmit = this.handleFileSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
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
    
handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            // firstName: '',
            // lastName: '',
            // email: '',
            // username: '',
            // website: '',
            // phone: '',
        });
        // console.log(this.state);
    }

handleFileSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('myImage', this.state.file);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.put('http://localhost:4000/uploads', formData, config)
    .then((response) => {
        alert('The file uploaded successfully')
    }).catch((error) => {
        
    });
}
onChange(e) {
    this.setState({file:e.target.files[0]});
}
   
handleUpdateSubmit = (event) => {
    event.preventDefault();

    const userData = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        phone: this.state.phone,
        website: this.state.website,
        username: this.state.username,
    }
        
axios.put('http://localhost:4000/api/users/', {
    userData
})
    .then(res => {
        console.log(res);
        alert('Great! You updated your profile');
    })
    .catch(err => {
        alert(`Something happened Sis...`)
        console.log(err)
    });
};

handleLogout = () => {
    // console.log(`someone clicked logout, what the...`)
    if (localStorage.getItem('jwtToken') !== null ) {
      localStorage.removeItem('jwtToken');
      this.setState({ currentUser: null, isAuthenticated: false });
    };
  };

handleDelete = (event) => {
        event.preventDefault();

        let user = jwt_decode(localStorage.getItem('jwtToken'));
        let id = user._id;
        
    axios.delete('http://localhost:4000/api/users/' + id)
        .then(res => {
            console.log(res);
            alert('Boo! You deleted your profile');
        })
        .catch(err => {
            alert(`Brudda, no can delete...`)
            console.log(err)
        })
        // .then(this.handleLogout())
        // .then(app => handleLogout())
        .then(() => this.setState({ redirect: true }));
        // alert('Delete cannot be undone')
        // console.log('delete clicked');
    }

render() { 
    const { redirect } = this.state;
    let { isLoaded, items, } = this.state;

    if (!isLoaded) {
        return <div>Loading...</div>
    }

    else if (redirect) {
        return <Redirect to='/' />
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
                <img src={items.imgUrl} className="avatar rounded-circle img-thumbnail mb-3" alt="avatar"/>
                
                <form onSubmit={this.handleFileSubmit} encType="multipart/form-data" method="PUT">
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" id="customFile" />
                        <label className="custom-file-label" htmlFor="customFile"><i className="fas fa-file-upload"></i></label>
                        <button type="submit" className="badge badge-sm">Upload</button>
                    </div>
                </form>

                <small className="text-muted">Member since: {items.created_at}</small><br/>
                <small className="text-muted">Last updated: {items.updated_at}</small>
              </div><hr/><br/>
                <div className="card panel-default">
                    <div className="panel-heading text-center">{items.website} <i className="fa fa-link fa-1x"></i></div>
                    <div className="panel-body"></div>
                  </div>
                </div>
                <div className="col-sm-9">
        
                  <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <hr/>
                            <form onSubmit={this.handleUpdateSubmit} method="PUT">
                              
                                <div className="row">
                                    <div className="col-sm mb-4">
                                      <label htmlFor="first_name"><h6>First Name: {items.firstName}</h6></label>
                                      <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" onChange={this.handleChange} value={this.state.firstName} />
                                      </div>
                                    <div className="col-sm mb-4">
                                        <label htmlFor="last_name"><h6>Last Name: {items.lastName}</h6></label>
                                        <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" onChange={this.handleChange} value={this.state.lastName} />
                                    </div>
                                  </div>
                                
                                <div className="row">
                                    <div className="col-sm mb-4">
                                      <label htmlFor="username"><h6>Username: {items.username}</h6></label>
                                      <input type="text" className="form-control" id="username" placeholder="Update Username" onChange={this.handleChange} value={this.state.username} />
                                  
                                    </div>
                                    <div className="col-sm mb-4">
                                      <label htmlFor="phone"><h6>Phone: {items.phone}</h6></label>
                                      <input type="text" className="form-control" name="phone" id="phone" placeholder="Update phone" onChange={this.handleChange} value={this.state.phone} />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm mb-4">
                                      <label htmlFor="email"><h6>Email: {items.email}</h6></label>
                                      <input type="email" className="form-control" name="email" id="email" placeholder="Update email" onChange={this.handleChange} value={this.state.email} />
                                    </div>

                                    <div className="col-sm mb-4">
                                      <label htmlFor="website"><h6>Website: {items.website}</h6></label>
                                      <input type="text" className="form-control" name="website" id="website" placeholder="Update website" onChange={this.handleChange} value={this.state.website} />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <br />
                                    <button className="btn btn-lg btn-success btn-block" type="submit">Save and Update</button>
                                </div>
                            </form>
                            <br/>
                       
                                <hr/>

                            
                             <h4 className="mt-5">Reset Password</h4>
                            
                                <div className="row">
                                    <div className="col-sm">
                                        <label htmlFor="password"><h6>New Password</h6></label>
                                        <input type="password" className="form-control" name="password" id="password" placeholder="password" onChange={this.handleChange} value={this.state.password} />
                                    </div>
                              
                              
                                    <div className="col-sm">
                                    <label htmlFor="password2"><h6>Confirm New Password</h6></label><br/>
                                        <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" onChange={this.handleChange} value={this.state.password} />
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-12">
                                    <button className="btn btn-lg btn-success mt-3" type="submit" onClick={this.handleUpdate}>Save and Update</button>
                                </div>

                                <hr/>
                                <h4 className="mt-5">Delete Account</h4>
                                <div className="col-sm-12">
                                    <button className="btn btn-lg btn-outline-danger btn-block" type="submit" onClick={this.handleDelete}>Delete</button>
                                    <small>This action cannot be undone.</small>
                                </div>
                                </div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                
           
        );
        }
    }
}
 
export default ProfileCard;