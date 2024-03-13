import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useLocation , Link} from 'react-router-dom';

const EditLanguage = () => {

  const location = useLocation();
  const { lang } = location.state;
  console.log("lang",lang)
  const [updatedlanguage, setUpdatedlanguage] = useState(lang);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedlanguage((prevCategory) => ({
      ...prevCategory,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const languageId = lang.id;
      fetch(`http://localhost:8080/api/v2/editLanguage/${languageId}`, {  // Use backticks (`) for string interpolation
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedlanguage),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Language updated successfully');
            window.alert('Language details successfully updated');
          } else {
            console.log('Error updating language');
          }
        })
        .catch((error) => {
          console.log('Error updating language:', error);
        });
    
  };
  

  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">{updatedlanguage.language}'s Profile</h1>
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
                      <th>Language</th>
                      <td>
                        <input
                          type="text"
                          name="language"
                          value={updatedlanguage.language}
                          onChange={handleChange}
                          className="form-control"
                        />
                        {errors.username && <div className="error">{errors.language}</div>}
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
