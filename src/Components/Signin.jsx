// Signin.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../CSS/Signin.css';
import { useNotification } from './NotificationContext';
import { Link, useNavigate } from 'react-router-dom';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
} from 'mdb-react-ui-kit';
import userService from '../service/userInstance';

const SigninSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required*'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
        .required('Password is required*'),
});

function Signin() {
    const navigate = useNavigate();
    const notify = useNotification();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values, { setSubmitting }) => {
        setLoading(true);
        // Mocking the user service call for sign in
        userService.login(values.email, values.password)
            .then(response => {
                notify(response.data.message);
                setSubmitting(false);
                setTimeout(() => {
                  navigate('/home');
              }, 600)
            })
            .catch(error => {
                notify(error.response.data.message, 'error');
                setSubmitting(false);
            })
            .finally(() => {
                setLoading(false);
                setSubmitting(false);
            });
    };

    return (
        <MDBContainer fluid className='cont'>
            <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto bg-glass ' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column '>
                            <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                            <p className="text-black-50 mb-3 text-center">Please enter your email and password!</p>
                            <Formik
                                initialValues={{
                                    email: '',
                                    password: '',
                                }}
                                validationSchema={SigninSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className='mb-4 w-100'>
                                            <Field name='email' type='email' placeholder='Email' as={MDBInput} />
                                            <ErrorMessage name='email' component='div' className='text-danger' />
                                        </div>
                                        <div className='mb-4 w-100'>
                                            <Field name='password' type='password' placeholder='Password' as={MDBInput} />
                                            <ErrorMessage name='password' component='div' className='text-danger' />
                                        </div>
                                        <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                                        {/* <button className='btn btn-primary w-100 mt-3 ' type='submit' >
                                            Signin
                                        </button> */}
                                        <button type="submit" className="btn btn-primary w-100 mb-4" disabled={loading} style={{ position: 'relative' }}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span className="sr-only"></span>
                                                </>
                                            ) : (
                                                'Signin'
                                            )}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                            <p className='mb-0 text-center'>or</p>
                            <p className='text-center mt-2'>Don't have an account? <Link to='/'>Register</Link></p>
                            <p className='text-center mt-2'> <Link to='/forget-password'>Forget password?</Link></p>

                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Signin;
