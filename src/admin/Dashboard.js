import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import "../css/Sidebar.css";
import API_URL from '../Config';


const Dashboard = () => {
  const name = sessionStorage.getItem('username');
  const userid =sessionStorage.getItem('id');
  console.log('Retrieved username:', name);
  const [all, setall] = useState(null);
  const [getall, setGetall] = useState(null);
  const [GetUser,setGetUser] = useState(null)

  useEffect(() => {
    fetch(`${API_URL}/api/videogetall`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setall(data);
        // console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/api/v2/GetAll`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGetall(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

   useEffect(() => {
    fetch(`${API_URL}/api/v2/GetAllUsers`)
    .then(response =>{
      if (!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data =>{
      setGetUser(data);
    })
    .catch(error =>{
      console.error('Error fetching data:',error)
    });
   },[]);

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
            Welcome Back {name}
            <span style={{ fontSize: "22px" }}> </span>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-between">
            <Link to="#" className="small text-black">
              View Details
            </Link>
            <div className="small text-black">
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
                  
                    <span className='font-bold text-black'>{all && all.length > 0 ? all.length:"none"}</span>
                  
                  <div className="small text-black">
                  <Link to="/admin/Video" className="small text-black">
                    <i className="fas fa-angle-right"></i>
                    </Link>
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
            
            <span className='font-bold text-black'>{getall && getall.length > 0 ? getall.length:"none"}</span>
            
            <div className="small text-black">
            <Link to="/admin/ListAudio" className="small text-black">
              <i className="fas fa-angle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-3 col-md-6">
        <div className="card bg-danger text-white mb-4">
          <div className="card-body">
            Total Subscription
            <span style={{ fontSize: "22px" }}> </span>
          </div>
          <div className="card-footer d-flex align-items-center justify-content-between">
                  
                    <span className='font-bold text-black'>{GetUser && GetUser.length > 0 ? GetUser.length:"none"}</span>
                
                  
                  <div className="small text-black">
                  <Link to="/admin/subscriptionPayments" className="small text-black">
                    <i className="fas fa-angle-right"></i>
                    </Link>
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
