import React from 'react'
import {Link} from 'react-router-dom'

function BreadCrumb() {
  return (
    <div className='breadcrumb'>
       <ul className='crumb-address'>
           <li><Link to="/">pages</Link></li>
           <li><Link to="/dashboard">Dashboard</Link></li>
       </ul>
       <div className='crumb-path'>Dashboard</div>
    </div>
  )
}

export default BreadCrumb