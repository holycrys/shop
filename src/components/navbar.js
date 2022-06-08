import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import {sideMenu} from './sideMenu';
import './navbar.css';

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const  showSidebar = () => setSidebar(!sidebar);
 
    
  return ( 
    <>
        
      <nav className="navbar">
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars  onClick={showSidebar}/>
        </Link>
        <h5>ELISA</h5> 
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </nav>
      <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className="nav-menu-items">
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose  onClick={showSidebar} />
            </Link>
          </li>                     
          {sideMenu.map((item,index) => {
             return (
               <li key={index} className='nav-text'>
                <Link to={item.id}  onClick={showSidebar}  >
                  <span>{item.name}</span>
                </Link>
               </li>
             )
          })}    
        </ul>                                     
      </nav>            
   </> 
       
 );



} 

                 


 
export default Navbar;