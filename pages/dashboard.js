import React, {Component} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Layout, {siteTitle} from '../components/layout';
import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';


class Dashboard extends Component{
  constructor(props) {
    super(props)
        this.state = {
        
        }
    }
    componentDidMount = () => {
        if (!localStorage.getItem('isLogin')) {
          return( Router.push('/') )
        }
    }
    render(){
        
        return(
        <Layout>
        <Head>
        <title>Dashboard - {siteTitle}</title>
        </Head>

        
        Dashboard

        </Layout>
             
        
      
        )
    }
}

export default Dashboard;