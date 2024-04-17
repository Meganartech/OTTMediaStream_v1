import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import "../css/Sidebar.css";


const Dashboard = () => {
  //..............................Admin Functions..........................................
  const name=sessionStorage.getItem('username');
  useEffect(() => {
    // Load scripts...
  }, []);
  
  //..............................User Functions..........................................
  const username = sessionStorage.getItem('username');
  const userid =sessionStorage.getItem('id');
  console.log('Retrieved username:', username);

  return (
    <div id="content-wrapper" class="d-flex flex-column samp" style={{ marginLeft: "13rem"}}>

 <Sidebar />
    <div className="container-fluid">
   
      {/* <App2 /> */}
    <div className='container2'>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item active text-white">Dashboard</li>
      </ol>
      
      <div className="row">
      <div className="col-xl-3 col-md-6">
        <div className="card bg-primary text-white mb-4">
          <div className="card-body">
            Welcome Back {username}
            <span style={{ fontSize: "22px" }}> </span>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <Link to="#" className="small text-white stretched-link">
              View Details
            </Link>
            <div className="small text-white">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Add other cards and their corresponding links */}
      <div className="col-xl-3 col-md-6">
        <div className="card bg-warning text-white mb-4">
          <div className="card-body">
            Total Videos
            <span style={{ fontSize: "22px" }}> </span>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <Link to="#" className="small text-white stretched-link">
              View Details
            </Link>
            <div className="small text-white">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card bg-success text-white mb-4">
          <div className="card-body">
            Total Audios
            <span style={{ fontSize: "22px" }}> </span>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <Link to="#" className="small text-white stretched-link">
              View Details
            </Link>
            <div className="small text-white">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card bg-danger text-white mb-4">
          <div className="card-body">
            Total Photos
            <span style={{ fontSize: "22px" }}> </span>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <Link to="#" className="small text-white stretched-link">
              View Details
            </Link>
            <div className="small text-white">
              <i className="fas fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
      {/* Add more cards... */}
    </div>
    
    </div>
    </div>
    </div>
  
    
  );
};

export default Dashboard;
