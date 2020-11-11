import React, { Component, useState } from 'react';
import Route from 'next/router';
import Link from './link';
import {Container, Collapse, Form, Button, Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap';
import Search from './search';
import { MdDashboard, MdList } from "react-icons/md";

function SubMenu() {
  const [open1, setOpen1] = useState(false);
  const toggleHover = () => setOpen1(!open1);
  return (
  <li className={open1 ? "menu-item has-child has-open":"menu-item has-child"}>
        
        <a href={'#'} onClick={() => setOpen1(!open1)} data-toggle="collapse" aria-controls="collapseKonten" aria-expanded={open1} className="menu-link">
        <span className="menu-icon"><MdList size="1.6rem"/></span> <span className="menu-text">Master</span>
            </a>
       
        <Collapse in={open1} id="collapseKonten">
       
                  <ul className="menu">
                    <li className="menu-item">
                      <a href="user-profile.html" className="menu-link">Barang</a>
                    </li>
                    <li className="menu-item">
                      <a href="user-activities.html" className="menu-link">Kategori</a>
                    </li>
                    <li className="menu-item">
                      <a href="user-teams.html" className="menu-link">User</a>
                    </li>
                  
                    
                  </ul>
                
        </Collapse>
      </li>
  );
}
class MyNavbar extends Component {
    constructor(props){
        super(props)
        this.state = {
          showMobile: true
        }
        this.toggleMobile = this.toggleMobile.bind(this)
    }

    Logout = () => {
        

    }
    toggleMobile = function() {
      this.setState({ showMobile: !this.state.showMobile });
    }

    componentDidMount = () => {
     
    }
    render() {
      
        return (
        <>
            <header className="app-header app-header-dark">
            <div className="top-bar">
        
            <div className="top-bar-brand">
         
            <button onClick={this.props.toggleMenu} className="hamburger hamburger-squeeze mr-2" type="button" data-toggle="aside-menu" aria-label="toggle aside menu"><span className="hamburger-box"><span className="hamburger-inner"></span></span></button> 
            </div>

            <div className="top-bar-list">
            <div className="top-bar-item d-md-none d-lg-none d-xl-none">
            <Button onClick={this.toggleMobile} className="hamburger hamburger-squeeze float-left" type="button" data-toggle="aside" aria-label="toggle menu"><span className="hamburger-box"><span className="hamburger-inner"></span></span></Button>
            </div>
            <div className="top-bar-item top-bar-item-full">
              <Search/>
            </div>
            </div>


            </div>

            </header>

            <aside className={this.state.showMobile ? 'app-aside app-aside-expand-md app-aside-light' : 'app-aside app-aside-expand-md app-aside-light show' }>
            {this.state.showMobile ?     
            <></>
            :
            <>
            <Button onClick={this.toggleMobile} type="button" className="btn btn-secondary float-right">
                X
            </Button>
            
            </>
            }
      
            <div className="aside-content">
         
            <header className="aside-header d-block d-md-none">

            <button className="btn-account" type="button" data-toggle="collapse" data-target="#dropdown-aside">
            Image
            </button>
           
            <div id="dropdown-aside" className="dropdown-aside collapse">
             
              <div className="pb-3">
                <a className="dropdown-item" href="user-profile.html"><span className="dropdown-icon oi oi-person"></span> Profile</a> <a className="dropdown-item" href="auth-signin-v1.html"><span className="dropdown-icon oi oi-account-logout"></span> Logout</a>
                <div className="dropdown-divider"></div><a className="dropdown-item" href="#">Help Center</a> <a className="dropdown-item" href="#">Ask Forum</a> <a className="dropdown-item" href="#">Keyboard Shortcuts</a>
              </div>
            </div>
            </header>
            <div className="aside-menu overflow-hidden ps">

            <nav id="stacked-menu" className={this.props.showMenu ? 'stacked-menu stacked-menu-has-collapsible' : 'stacked-menu stacked-menu-has-compact stacked-menu-has-hoverable' } >
             
              <ul className="menu">
           
                <li className="menu-item">
                  <Link href="/dashboard" activeClassName="active" passHref>
                  <a className="menu-link"><span className="menu-icon"><MdDashboard size="1.6rem"/></span> <span className="menu-text">Dashboard</span></a>
                  </Link>
                </li>
                <SubMenu/>
                </ul>
                </nav>
            </div>
            
            </div>
            </aside>
            
        </>
        )
    }
}

export default MyNavbar