// Signup.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../CSS/Signup.css';
import { useNotification } from './NotificationContext';
import { Link, useNavigate } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from 'mdb-react-ui-kit';
import userService from '../service/userInstance';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(3, 'First name must be at least 3 characters long')
        .required('First name is required'),
    lastName: Yup.string()
        .required('Last name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
        .required('Password is required'),
});

function Signup() {
    const navigate = useNavigate();
    const notify = useNotification();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values, { setSubmitting }) => {
        setLoading(true);
        // Mocking the user service call
        userService.register(values.firstName, values.lastName, values.email, values.password)
            .then(response => {
                notify(response.data.message);
                setSubmitting(false);
                setTimeout(() => {
                    navigate('/signin');
                }, 600)
            })
            .catch(error => {
                notify(error.response.data.message, 'error');
            })
            .finally(() => {
                setLoading(false);
                setSubmitting(false);
            });
    };

    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden vh-100'>
            <MDBRow>
                <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center mt-5'>
                    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{ color: '#d4d4dc' }}>
                        Welcome to <br />
                        <span style={{ color: '#feda6a' }}>MailWave</span>
                    </h1>
                    <p className='px-3' style={{ color: '#d4d4dc' }}>
                        Sign up now to unlock the full power of
                        MailWave and streamline your email campaigns!
                    </p>
                </MDBCol>
                <MDBCol md='6' className='position-relative mt-5'>
                    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
                    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
                    <MDBCard className='my-5 bg-glass'>
                        <MDBCardBody className='p-5'>
                            <h2 className='mb-4'>Sign Up</h2>
                            <Formik
                                initialValues={{
                                    firstName: '',
                                    lastName: '',
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SignupSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <MDBRow>
                                            <MDBCol col='6'>
                                                <div className='mb-4'>
                                                    <Field name='firstName' type='text' placeholder='First Name' as={MDBInput} />
                                                    <ErrorMessage name='firstName' component='div' className='text-danger' />
                                                </div>
                                            </MDBCol>
                                            <MDBCol col='6'>
                                                <div className='mb-4'>
                                                    <Field name='lastName' type='text' placeholder='Last Name' as={MDBInput} />
                                                    <ErrorMessage name='lastName' component='div' className='text-danger' />
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                        <div className='mb-4'>
                                            <Field name='email' type='email' placeholder='Email' as={MDBInput} />
                                            <ErrorMessage name='email' component='div' className='text-danger' />
                                        </div>
                                        <div className='mb-4'>
                                            <Field name='password' type='password' placeholder='Password' as={MDBInput} />
                                            <ErrorMessage name='password' component='div' className='text-danger' />
                                        </div>
                                        <button type="submit" className="btn btn-primary w-100 mb-4" disabled={loading} style={{ position: 'relative' }}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span className="sr-only"></span>
                                                </>
                                            ) : (
                                                'Signup'
                                            )}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                            <p>Already have an account? <Link to='/signin'>Sign In</Link></p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Signup;
