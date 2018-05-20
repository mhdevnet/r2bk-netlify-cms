import React from 'react';
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import logo from '../img/logo.png'
import classNames from 'classnames';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount() {
    document.addEventListener('scroll', function () {
      let scrollPos = window.scrollY;
      let nav = document.querySelector('.navbar');
      if(scrollPos > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    })
  }
  render() {
    return (
      <Navbar className="fixed-top" expand="lg" light id="mainNav">
        <div className="container">
          <NavbarBrand href="/">
            <figure className="image">
              <img src={logo} alt="R2BK" />
            </figure>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={this.state.isOpen} style={{
            top: this.state.isOpen ? document.querySelector('#mainNav.navbar').clientHeight : 'inherit',
            height: this.state.isOpen ? (window.innerHeight - document.querySelector('#mainNav.navbar').clientHeight) : 0
          }} className={classNames({
            show: this.state.isOpen
          })} navbar>
            <Nav className="ml-auto" navbar style={{
              height: '100%'
            }}>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
      </Navbar>
    );
  }
}
