import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import "../css/Sidebar.css";


const Dashboard = () => {

  const [isvalid, setIsvalid] = useState();
  const [isEmpty, setIsEmpty] = useState();

  useEffect(() => {
   

    fetch('http://localhost:8080/api/v2/GetAllUser')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
        // setValid(response.data.valid);
      setIsEmpty(response.data.empty);
      console.log("Is empty: " + isEmpty); 
      // console.log("Valid: " + valid);
      console.log("--------------------------------------------------------------------");
      
      }
      return response.json();
    })
    .then(data => {
      // setValid(data.valid);
      setIsEmpty(data.empty);
      setIsvalid(data.valid)
      // console.log(" Empty "+data.empty+" not empty"+!data.empty);
      console.log(" valid "+data.valid+" not valid"+!data.valid);
      // // console.log(test);
     
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);
  //..............................Admin Functions..........................................
  const name=sessionStorage.getItem('username');
  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem('mySessionData')
      // const val2=localStorage.getItem('login')
      // console.log("inadd"+log)
      console.log("session data"+localStorage.getItem('mySessionData'));
      // setIsuserLogged(val2);
      // console.log("inside the app.js sessionvakue :", storedData);
      // console.log("inside the app.js val2 :", val2);
      // console.log("inside the app.js Logged 2:", isLogged);
          
    
  };
  fetchData();
  
}, []);
  
  //..............................User Functions..........................................
  const username = sessionStorage.getItem('username');
  const userid =sessionStorage.getItem('id');
  console.log('Retrieved username:', username);

  return (
    <div id="content-wrapper" class="d-flex flex-column samp" style={{ marginLeft: "13rem"}}>

 <Sidebar />
    <div className="container-fluid">
    <div className="marquee-container">
      <div className="marquee-content">
        {/* Your scrolling content goes here */}
        {!isvalid?<a
         href="/admin/About_us" style={{color:"darkred"}}>
          License has been expired Need to uploard new License or contact "111111111111"
        </a>:<div></div>}
      </div>
    </div>
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
