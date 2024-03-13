import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { useLocation , Link} from 'react-router-dom';

const EditCategory = () => {

  const location = useLocation();
  const { category } = location.state;
  const [updatedcategory, setUpdatedcategory] = useState(category);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedcategory((prevCategory) => ({
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
    const categoryId = category.id;
      fetch(`http://localhost:8080/api/v2/editCategory/${categoryId}`, {  // Use backticks (`) for string interpolation
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedcategory),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Category updated successfully');
            window.alert('category details successfully updated');
          } else {
            console.log('Error updating category');
          }
        })
        .catch((error) => {
          console.log('Error updating category:', error);
        });
    
  };
  

  return (
    <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      <h1 className="mt-4 text-white">{updatedcategory.categories}'s Profile</h1>
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
                      <th>Category</th>
                      <td>
                        <input
                          type="text"
                          name="categories"
                          value={updatedcategory.categories}
                          onChange={handleChange}
                          className="form-control"
                        />
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

export default EditCategory;



