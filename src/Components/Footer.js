import React from 'react'
import { Link } from 'react-router-dom'


function Footer(props) {
  return (
    <>
<footer className=" mt-4 mb-0 sticky-footer">
 
    <ul className={`nav justify-content-center border-top  pb-3 navbar-${props.mode} bg-${props.mode}`}>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">write | play | use</Link></li>
      <img src="favicon.png" height="40px" className='pt-2' alt='Icon'/>
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link to="/About" className="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p className={`nav justify-content-center border-top border-bottom  text-center text-muted navbar-${props.mode} bg-${props.mode}`} >© 2022 TextPlay.com, Inc</p>
  </footer>


    </>
  )
}

export default Footer
