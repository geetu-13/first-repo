import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './logo.jpg';


const Navigationbar = ({ auth, onClick }) => (
   <Navbar
      sticky="top"
      bg="dark"
      variant="dark"
      expand="sm"
      className="mb-3"
      style={{ minHeight: "4rem" }}
   >
      <Link to="/">
         <Navbar.Brand>
            <img
               src={logo}
               height="20%"
               width="20%"
               style={{padding:0}}
               className="d-inline-block align-top"
               alt=""
            />
            
         </Navbar.Brand>
      </Link>


      

      <Nav className="ml-auto">
      {auth ? (
         <div>
            
         <Link to="/art">
         <Button variant="outline-light" className="mr-sm-2">
            Articles
         </Button>
      </Link>
      <Link to="/blog">
            <Button variant="outline-light" className="mr-sm-2">
               My Articles
            </Button>
         </Link>
      </div>
         ) : (
            <Link to="/art">
               <Button variant="outline-light" className="mr-sm-2">
                  Articles
               </Button>
            </Link>
         )}
            
         
      </Nav>
      <Nav>
      <Link to="/about">
               <Button variant="outline-light" className="mr-sm-2">
                  About us
               </Button>
            </Link>
      </Nav>
      <Nav className="ml">
      {auth ? (
            <Link to="/logout">
               <Button
                  variant="outline-light"
                  className="mr-sm-2"
                  onClick={onClick}
               >
                  Logout
               </Button>
            </Link>
         ) : (
            <Link to="/login">
               <Button variant="outline-light" className="mr-sm-2">
                  Login
               </Button>
            </Link>
         )}
      </Nav>
      

   </Navbar>
);

Navigationbar.propTypes = {
   auth: PropTypes.bool.isRequired,
   onClick: PropTypes.func.isRequired
};

export default Navigationbar;
