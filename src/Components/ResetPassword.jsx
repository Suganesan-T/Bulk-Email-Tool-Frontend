// ResetPassword.js
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNotification } from './NotificationContext';
import { useParams, useNavigate } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
} from 'mdb-react-ui-kit';
import 'react-toastify/dist/ReactToastify.css';
import userService from '../service/userInstance';

const ResetPasswordSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[!@#$%^&*]/, 'Password must contain at least one special character')
        .required('Password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});

function ResetPassword() {
    const { token } = useParams();
    const notify = useNotification();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);


    const handleSubmit = (values, { setSubmitting }) => {
        setLoading(true);
        userService.resetPassword(token, values.password)
            .then((response) => {
                notify(response.data.message);
                setSubmitting(false);
                setTimeout(() => {
                    navigate('/signin');
                }, 600)
            })
            .catch((error) => {
                notify(error.response.data.message, 'error');
                setSubmitting(false);
                setLoading(false);
            });
    };

    return (
        <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden vh-100'>
            <MDBRow className='d-flex justify-content-center align-items-center vh-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-5 mx-auto bg-glass ' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 w-100 d-flex flex-column '>
                            <h2 className="fw-bold mb-2 text-center">Reset Password</h2>
                            <p className="text-black-50 mb-3 text-center">Please enter your new password!</p>
                            <Formik
                                initialValues={{
                                    password: '',
                                    confirmPassword: '',
                                }}
                                validationSchema={ResetPasswordSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting }) => (
                                    <Form>
                                        <div className='mb-4 w-100'>
                                            <Field name='password' type='password' placeholder='New Password' as={MDBInput} />
                                            <ErrorMessage name='password' component='div' className='text-danger' />
                                        </div>
                                        <div className='mb-4 w-100'>
                                            <Field name='confirmPassword' type='password' placeholder='Confirm Password' as={MDBInput} />
                                            <ErrorMessage name='confirmPassword' component='div' className='text-danger' />
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
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default ResetPassword;
