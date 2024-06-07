// Signin.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../CSS/Signin.css';
import { useNotification } from './NotificationContext';
import { Link} from 'react-router-dom';

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
});

function ForgetPassword() {
    const notify = useNotification();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (values, { setSubmitting }) => {
        setLoading(true);
        // Mocking the user service call for sign in
        userService.forgetPassword(values.email)
            .then(response => {
                notify(response.data.message);
                setSubmitting(false);
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
        <MDBContainer fluid className='cont'>
            <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto bg-glass ' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column '>
                            <h2 className="fw-bold mb-2 text-center">Forget Password</h2>
                            <p className="text-black-50 mb-3 text-center">Please enter your Email ID </p>
                            <Formik
                                initialValues={{
                                    email: '',
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
                                        <button type="submit" className="btn btn-primary w-100 mb-4" disabled={loading} style={{ position: 'relative' }}>
                                            {loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    <span className="sr-only"></span>
                                                </>
                                            ) : (
                                                'Submit'
                                            )}
                                        </button>
                                    </Form>
                                )}
                            </Formik>
                            <p className='mb-0 text-center'>or</p>
                            <p className='text-center mt-2'>Know your Password? <Link to='/signin'>Sign In</Link></p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default ForgetPassword;
