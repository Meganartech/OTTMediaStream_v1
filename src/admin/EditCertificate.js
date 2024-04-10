import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useLocation , Link} from 'react-router-dom';
import "../css/Sidebar.css";

const EditLanguage = () => {

  const id=localStorage.getItem('items');
  const [updatedcertificate, setUpdatedcertificate] = useState(id);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedcertificate((prevCertificate) => ({
      ...prevCertificate,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const certificateId = id;
      fetch(`http://localhost:8080/api/v2/editCertificate/${certificateId}`, {  // Use backticks (`) for string interpolation
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedcertificate),
      })
        .then((response) => {
          if (response.ok) {
            console.log('certificate updated successfully');
            window.alert('certificate details successfully updated');
          } else {
            console.log('Error updating certificate');
          }
        })
        .catch((error) => {
          console.log('Error updating certificate:', error);
        });
    
  };
  

  return (
    <div id="content-wrapper" class="d-flex flex-column samp" style={{ marginLeft: "13rem"}}>

       <Sidebar />
    <div className="container-fluid">
   

      <h1 className="mt-4 text-white">{updatedcertificate.certificate}'s Profile</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="breadcrumb-item active">Edit</li>
      </ol>
      <div className="row">
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Certificate</th>
                      <td>
                        <input
                          type="text"
                          name="certificate"
                          value={updatedcertificate.certificate}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.username && <div className="error">{errors.certificate}</div>}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button type="submit" className="btn btn-info">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  );




  };

export default EditLanguage;
