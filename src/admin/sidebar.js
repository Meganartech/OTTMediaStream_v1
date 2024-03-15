import React from 'react';
// import '../App.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import { useState } from 'react';
import "../css/Sidebar.css";
const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };
  const name=sessionStorage.getItem('username');
  const b=3;
  // alert(name);
  return (
    <div>
       <button className="toggle-button" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <ul className={`navbar-nav sidebar sidebar-dark accordion ${isActive ? 'active' : ''}`} id="content-wrapper">
     
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Menu </div>
      </div>
      <li className="nav-item ">
      <Link className="nav-link text-white" to="/admin/Dashboard">
          <i className="fas fa-tachometer-alt"></i>
        <span> Dashboard</span>
      </Link>
  </li> 
    <li className="nav-item ">
      <Link className="nav-link text-white" to="/admin/AddUser">
          <i className="fas fa-tachometer-alt"></i>
        <span>User</span>
      </Link>
  </li> 
    
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/Profile">
              <i className="fas fa-user"></i>
            <span> Profile</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Video</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/Video">
              <i className="fas fa-video"></i>
            <span> Video</span>
          </Link>
      </li>  
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/AddVideo">
              <i className="fas fa-upload"></i>
            <span> Add Video</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Audio</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/ListAudio">
              <i className="fas fa-music"></i>
            <span> Audio</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/AddAudio">
              <i className="fas fa-upload"></i>
            <span> Add Audio</span>
          </Link>
      </li>
      {/* <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Photo</div>
      </div> */}
      {/* <li className="nav-item">
          <Link className="nav-link text-white" to="/Photo">
              <i className="fas fa-photo-video"></i>
            <span> Photo</span>
          </Link>
      </li> */}
      {/* <li className="nav-item">
          <Link className="nav-link text-white" to="/AddPhoto">
              <i className="fas fa-upload"></i>
            <span> Add Photo</span>
          </Link>
      </li> */}
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Category</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/AddCategory">
              <i className="fas fa-photo-video"></i>
            <span> Add Category</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/ViewCategory">
              <i className="fas fa-upload"></i>
            <span> View Category</span>
          </Link>
      </li>
      {/* <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">CastCrew</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/AddTag">
              <i className="fas fa-photo-video"></i>
            <span> Add Category</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/ViewTag">
              <i className="fas fa-upload"></i>
            <span> View Category</span>
          </Link>
      </li> */}
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Tag</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/AddTag">
              <i className="fas fa-photo-video"></i>
            <span> Add Tag</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/ViewTag">
              <i className="fas fa-upload"></i>
            <span> View Tag</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Cast & Crew</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/AddCastCrew">
              <i className="fas fa-photo-video"></i>
            <span> Add Cast & Crew</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="#">
              <i className="fas fa-upload"></i>
            <span> View Cast & Crew</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Language</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/AddLanguage">
              <i className="fas fa-photo-video"></i>
            <span> Add Langugae</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/ViewLanguage">
              <i className="fas fa-upload"></i>
            <span> View Langugae</span>
          </Link>
      </li>

      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Certificate</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/AddCertificate">
              <i className="fas fa-photo-video"></i>
            <span> Add Certificate</span>
          </Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/ViewCertificate">
              <i className="fas fa-upload"></i>
            <span> View Certificate</span>
          </Link>
      </li>

      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Payments</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/SubscriptionPayments">
              <i className="fas fa-photo-video"></i>
            <span> Subscription Payments</span>
          </Link>
      </li>
      <div className="sb-sidenav-menu-heading bg-primary text-white text-center">
        <div className="sidebar-brand-text mx-3">Settings</div>
      </div>
      <li className="nav-item">
          <Link className="nav-link text-white" to="/admin/Setting">
              <i className="fas fa-photo-video"></i>
            <span> Settings</span>
          </Link>
      </li>
      
    </ul>

  </div>
    
  );
};

export default Sidebar;
