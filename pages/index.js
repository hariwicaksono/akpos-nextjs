import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Layout, {siteName} from '../components/layout';
import {Container, Card, Row, Col, Spinner, Button, Form} from 'react-bootstrap';
import API from '../libs/axios';
import { toast } from 'react-toastify';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
  username: yup.string().required('Username harus diisi'),
  password: yup.string().required('Password harus diisi')
}); 

class Login extends Component {
  componentDidMount = () => {
    if (localStorage.getItem('isLogin')) {
      return( Router.push('/dashboard') )
    }
}
  render() {
  return (
    <Layout home>
      <Head>
        <title>Login - {siteName}</title>
      </Head>

      <main className="auth auth-floated" style={{height: '100%',width: '100%',height: '100vh',width: '100vw',margin: '0'}}>
      <div id="announcement" className="auth-announcement" style={{backgroundImage: 'url(/images/HD_ISO_21.jpg)'}}>
        <div className="announcement-body">
          <h2 className="announcement-title"> How to Prepare for an Automated Future </h2><a href="#" className="btn btn-warning"><i className="fa fa-fw fa-angle-right"></i> Check Out Now</a>
        </div>
      </div>
        <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values, actions) => {
            //alert(JSON.stringify(values));
            API.PostLogin(values).then(res=>{
                if (res.id === "1" ) {
                    localStorage.setItem('isLogin',JSON.stringify(res.data))
                    toast.success("Login Berhasil", {position: "top-center"}); 
                    setTimeout(()=>{
                        Router.push('/dashboard')
                      },2000)
                } else {
                  toast.warn("Periksa kembali username dan password anda", {position: "top-center"}); 
                }
            })
            setTimeout(() => {
            actions.setSubmitting(false);
            }, 1000);
        }}
        validationSchema={validationSchema}
        >
        {({handleSubmit,handleChange,handleBlur,values,touched,errors,isSubmitting}) => (
    <Form noValidate onSubmit={handleSubmit} className="text-left auth-form">
      <div className="mb-4">
          <div className="mb-3">
            
          </div>
          <h1 className="h3">Masuk</h1>
        </div>
        <p className="text-left mb-4"> Don't have a account? <a href="auth-signup.html">Create One</a>
        </p>
        <Form.Group>
            <Form.Label className="text-left">Username</Form.Label>
            <Form.Control type="text" name="username" placeholder="Username" className="form-control" onChange={handleChange} onBlur={handleBlur} value={values.username} isInvalid={!!errors.username && touched.username} />
            {errors.username && touched.username && <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>}
        </Form.Group>
        <Form.Group>
            <Form.Label className="text-left">Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" className="form-control" onChange={handleChange} onBlur={handleBlur} isInvalid={!!errors.password && touched.password} />
            {errors.password && touched.password && <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>}
        </Form.Group>

        <Button block size="lg" variant="primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? (
        <>
        <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Memuat...
        </>
        ) : (
        <>Masuk</>
        )}
        </Button>
  
        <p className="mb-0 pt-3 px-3 text-muted text-center"> © 2020 All Rights Reserved.
        </p>
    </Form>
    )}
    </Formik>
       

       
        

      
    </main>
    </Layout>
  );
  }
}

export default Login;
