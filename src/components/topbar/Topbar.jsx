import { Link } from 'react-router-dom'
import './topbar.css'

export default function Topbar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <div className='brand'>
        <Link className='link' to="/">BHM</Link>
        </div>
      </div>
      <div className='topCenter'>
        <div className='topCenterList'>
            <div className='topCenterListItem'>
              <Link className='link' to="/">HOME</Link>
            </div>
            <div className='topCenterListItem'>
              <Link className='link' to="/produits">PRODUITS</Link>
            </div>
            <div className='topCenterListItem'>
              <Link className='link' to="/services">SERVICES</Link>
            </div>
            
        </div>
      </div>
      <div className='topRight'>
        <div className='topRightList'>
        <div className='topRightListItem'>
          <Link className='link' to="/apropos">A PROPOS</Link>
        </div>
        <div className='topRightListItem'>
          <Link className='link' to="/contact">CONTACT</Link>
        </div>
        
      </div>
      
      </div>
    </div>
  )
}
