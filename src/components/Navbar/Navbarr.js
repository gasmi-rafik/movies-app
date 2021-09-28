import React from 'react'
import {Navbar , Nav , Container , Form , FormControl} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '../Rating/Rating';
const NavBarr = ({name , setName , setRatingSearch , ratingSearch}) => {
    return (
        <div>
             <Navbar bg="dark" variant="dark" style={{display :"flex" , justifyContent:"space-between" , width:"100%"}}>
      <div style={{display :"flex"}} >
    <Nav.Link href="#home" style={{color:"#b24440"}}>TNflix</Nav.Link>
    <Nav className="mr-auto">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Brand href="#features">Features</Navbar.Brand>
      <Navbar.Brand href="#pricing">Pricing</Navbar.Brand>
    </Nav>
    </div>
    <div>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" value={name} onChange={(e)=>setName(e.target.value)} />
      <span style={{paddingBottom:"10px"}}></span> <Rating setRate={setRatingSearch} rate={ratingSearch}/>
    </Form>
    </div>
  </Navbar>
        </div>
    )
}

export default NavBarr
