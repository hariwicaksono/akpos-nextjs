import React, { Component } from "react";
import '../styles/globals.css';
import '../styles/styles.css';
import 'spin.js/spin.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

class MyApp extends Component {
  constructor(props){
    super(props)
    this.state = {
        
    }
}



componentDidMount = () => {
    
}

  render() {
    const { Component, pageProps } = this.props;

    return (   
    <>
    <Component {...pageProps} />
    <ToastContainer />
    </>
    );
  }
}

export default MyApp;