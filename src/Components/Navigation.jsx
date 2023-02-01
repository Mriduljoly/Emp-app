import React from 'react'
import { Link } from 'react-router-dom'
import App from '../App'
import EmpDboard from './EmpDboard'
const Navigation = () => {
  return (
    <nav class="navbar  navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand" ><Link class="nav-link text-white" to="/">EmployeeApp</Link></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        
      <a class="nav-link" href="#"><Link class="nav-link text-white" to="/empdboard">EmpDboard</Link></a>
      <a class="nav-link" href="#"><Link class="nav-link text-white" to="/empform">EmpForm</Link></a>
      
      </div>
    </div>
  </div>
</nav>
       
  )
}

export default Navigation