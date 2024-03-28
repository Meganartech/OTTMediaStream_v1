import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import Employee from './Employee';

const AddMovie = () => {
  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem" }}>
    <div className='container-fluid px-4'>
      <Navbar />
      <Sidebar />
      <div>
        {/* <h1 className="mt-4 text-white">Add Video</h1> */}
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">Add Video</li>
        </ol>
        <div className='row justify-content-center'>
          <div className='col-lg-12'>
            <div className="card shadow-lg border-0 rounded-lg mt-5" style={{ marginLeft: "0px", marginRight: "0px",minWidth: "100%" }} >
              <div className='card-header'>
                <h2 className='text-center'>Add Movie</h2>
              </div>
              <div className='card-body'>
                {/* <form className='form-container'> */}
                <div className='modal-body '>
                  
                  {/* <br></br>
                  <input
                    type="text"
                    name="confirmPassword"
                    // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                    className="form-control"
                    onChange={''}
                    value={'categoryName'}
                  /> */}
                  <br></br>
                  {/* <input
                    type="text"
                    name="confirmPassword"
                    // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                    className="form-control"
                    onChange={''}
                    value={'categoryName'}
                  /> */} 
                  <br></br>
                  <input type="file" accept="video/*" onChange={""} />
                  <input type="file" accept="audio/*" onChange={""} />
                  <button className='text-center btn btn-info' onClick={""}>Add_Details</button>{/*handleUpload*/}&nbsp;&nbsp;
                  <button className='text-center btn btn-info' onClick={""}>Upload</button>{/**/}&nbsp;&nbsp;
                  {/* <button className='text-center btn btn-info' > */}
                  <Link to="/admin/Watch" className="btn btn-info">Play</Link>
                  {/* </button> */}
                  {/* {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>} */}

                </div>

                {/* </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddMovie