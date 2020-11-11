import React, {Component} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import Layout, {siteTitle} from '../components/layout';
import {Container, Row, Col, Carousel, Card, Button} from 'react-bootstrap';
import API from '../libs/axios';
import { MdLayers } from "react-icons/md";

class Dashboard extends Component{
  constructor(props) {
    super(props)
        this.state = {
          HitungBarang: '',
          HitungStok: '',
          HitungJual: '',
          HitungKtg: ''
        }
    }
    componentDidMount = () => {
        if (!localStorage.getItem('isLogin')) {
          return( Router.push('/') )
        }
        API.HitungBarang().then(res=>{
          this.setState({
               HitungBarang : res.data
           })
        })
        API.HitungStok().then(res=>{
          this.setState({
               HitungStok : res.data[0].stok
           })
        })
        API.HitungJual().then(res=>{
          this.setState({
               HitungJual : res.data[0].jual
           })
        })
        API.HitungKtg().then(res=>{
          this.setState({
               HitungKtg : res.data
           })
        })
    }
    render(){
        
        return(
        <Layout>
        <Head>
        <title>Dashboard - {siteTitle}</title>
        </Head>

        
        <header className="page-title-bar">
            <div className="d-flex justify-content-between">
              <h1 className="page-title"> Dashboard </h1>
            </div>
        </header>
      
         <Row>
           <Col sm>
           <Card 
            bg={'info'}
            text={'white'} className="card-metric" body>
            <div className="metric">
              <h2 className="metric-label" style={{color:'#fff'}}><MdLayers size="1.6rem"/> Jumlah Barang </h2>
              <p className="metric-value h2">
                <span className="value">{this.state.HitungBarang}</span>
              </p>
            </div>
           </Card>
           </Col>
           <Col sm>
           <Card 
            bg={'warning'}
            text={'dark'} className="card-metric" body>
            <div className="metric">
              <h2 className="metric-label" style={{color:'#424242'}}><MdLayers size="1.6rem"/> Jumlah Stok </h2>
              <p className="metric-value h2">
                <span className="value">{this.state.HitungStok}</span>
              </p>
            </div>
           </Card>
           </Col>
           <Col sm>
           <Card 
            bg={'success'}
            text={'white'} className="card-metric" body>
            <div className="metric">
              <h2 className="metric-label"  style={{color:'#fff'}}><MdLayers size="1.6rem"/> Jumlah Terjual </h2>
              <p className="metric-value h2">
                <span className="value">{this.state.HitungJual}</span>
              </p>
            </div>
           </Card>
           </Col>
           <Col sm>
           <Card 
            bg={'secondary'}
            text={'dark'} className="card-metric" body>
            <div className="metric">
              <h2 className="metric-label" style={{color:'#424242'}}><MdLayers size="1.6rem"/> Jumlah Kategori </h2>
              <p className="metric-value h2">
                <span className="value">{this.state.HitungKtg}</span>
              </p>
            </div>
           </Card>
           </Col>
         </Row>
     
        </Layout>
             
        
      
        )
    }
}

export default Dashboard;