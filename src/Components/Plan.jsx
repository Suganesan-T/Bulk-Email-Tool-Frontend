import React, { useState } from 'react';
import Header from './Header';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

function Plan() {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    const handlePlanClick = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <div>
            <Header />
            <h2 className='title mt-5 text-center' style={{ color: "white" }}>Mailware Subscription Plans</h2>

            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-5">
                <div className="col">
                    <div
                        className={`card mb-4 rounded-3 shadow-sm ${selectedPlan === 'Free' ? 'border-primary' : ''}`}
                        onClick={() => handlePlanClick('Free')}
                    >
                        <div

                            className={`card-header py-3 ${selectedPlan === 'Free' ? 'text-bg-primary' : ''}`}
                            onClick={() => handlePlanClick('Free')}
                        >
                            <h4 className="my-0 fw-normal">Free</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">₹0<small className="text-body-secondary fw-light">/months</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>5 emails per day</li>
                                <li className='text-muted mt-3'>Email tracking available</li>
                                <li className='mt-3'>Email support</li>
                                <li className='mt-3'>Help center access</li>
                            </ul>
                            <Link to='/send-emails'><button type="button"
                                className={`w-100 btn btn-lg ${selectedPlan === 'Free' ? ' btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handlePlanClick('Free')}>Continue free</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div
                        className={`card mb-4 rounded-3 shadow-sm ${selectedPlan === 'Pro' ? 'border-primary' : ''}`}
                        onClick={() => handlePlanClick('Pro')}
                    >
                        <div
                            className={`card-header py-3 ${selectedPlan === 'Pro' ? 'text-bg-primary' : ''}`}
                            onClick={() => handlePlanClick('Free')}
                        >
                            <h3 className="hed my-0 fw-normal">Pro</h3>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">₹399<small className="text-body-secondary fw-light">/3 months</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>20 emails per day</li>
                                <li className='mt-3'>Email tracking available</li>
                                <li className='mt-3'>Priority email support</li>
                                <li className='mt-3'>Help center access</li>
                            </ul>
                            <button type="button"
                                className={`w-100 btn btn-lg ${selectedPlan === 'Pro' ? ' btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handlePlanClick('Free')}>Get Pro</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div
                        className={`card mb-4 rounded-3 shadow-sm ${selectedPlan === 'Premium' ? 'border-primary' : ''}`}
                        onClick={() => handlePlanClick('Premium')}
                    >
                        <div
                            className={`card-header py-3 ${selectedPlan === 'Premium' ? 'text-bg-primary' : ''}`}
                            onClick={() => handlePlanClick('Free')}
                        >
                            <h4 className="my-0 fw-normal">Premium</h4>
                        </div>
                        <div className="card-body">
                            <h1 className="card-title pricing-card-title">₹599<small className="text-body-secondary fw-light">/3 months</small></h1>
                            <ul className="list-unstyled mt-3 mb-4">
                                <li>Unlimited emails</li>
                                <li className='mt-3'>Email tracking available</li>
                                <li className='mt-3'>Phone and email support</li>
                                <li className='mt-3'>Help center access</li>
                            </ul>
                            <button type="button"
                                className={`w-100 btn btn-lg ${selectedPlan === 'Premium' ? ' btn-primary' : 'btn-outline-primary'}`}
                                onClick={() => handlePlanClick('Free')}>
                                Get Premium
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='title mt-5 text-center' style={{ color: "black" }}>Note!!!</h2>
            <p className='text-center mt-3' style={{ color: "black" }}>As Mailware is at development stage, the subscription option will be updated in future. Kindly click on "Continue fee" to get start to experience Mailware</p>
            <Footer/>
        </div>
    );
}

export default Plan;
