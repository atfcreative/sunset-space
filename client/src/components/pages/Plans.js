import React, { Component } from 'react';

class Plans extends Component {
    render() { 
        return (
            <div>
                <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 className="display-4">Pricing</h1>
                    <p className="lead">Some more info about plans here. Some more info about plans here. Some more info about plans here. </p>
                    </div>

                    <div className="container">
                    <div className="card-deck mb-3 text-center">
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Basic</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$20 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>10 users included</li>
                            <li>2 GB of storage</li>
                            <li>Email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Purchase</button>
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Legit</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$99 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Purchase</button>
                        </div>
                        </div>
                        <div className="card mb-4 shadow-sm">
                        <div className="card-header">
                            <h4 className="my-0 font-weight-normal">Dank</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">$299 <small className="text-muted">/ mo</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                            <li>30 days included</li>
                            <li>15 GB of storage</li>
                            <li>Phone and email support</li>
                            <li>Help center access</li>
                            </ul>
                            <button type="button" className="btn btn-lg btn-block btn-primary">Purchase</button>
                        </div>
                        </div>
                    </div>
                 </div>
            </div>
        );
    }
}
 
export default Plans;