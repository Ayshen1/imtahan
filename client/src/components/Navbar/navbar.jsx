import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/navbar.scss'
// import PhoneIcon from '@mui/icons-material/Phone';


const Navbar = () => {
  return (
    <>
      
        <div className="navTop">
          <div className="left"><p>We believe we helps people<br/>
            for happier lives</p></div>
          <div className="center"><img src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="" /></div>
          <div className="right">
    <p>+880 123 12 658 439</p>
    {/* <p><PhoneIcon/></p> */}

          </div>
        </div>
        <hr />
        <div className="navBottom">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to='/add'>ADD</Link></li>
            <li>ABOUT</li>
            <li>IMMIGRATION</li>
            <li>CONNECT</li>
            <li>COURSE</li>
            <li>BLOG</li>
            <li>ELEMENTS</li>
          </ul>
        </div>
      
    </>
  )
}

export default Navbar