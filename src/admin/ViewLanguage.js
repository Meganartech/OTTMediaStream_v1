import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import "../css/Sidebar.css";
const ViewCategory = () => {
  //.......................................Admin functiuons.....................................
  const name=sessionStorage.getItem('username');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [categoryIdToDelete, setCategoryIdToDelete] = useState('');
  const [language, setlanguage] = useState([]);
  const userid_u =sessionStorage.getItem('id');
  const [showConfirmation_u, setShowConfirmation_u] = useState(false);
  const [categoryIdToDelete_u, setCategoryIdToDelete_u] = useState('');
  const [categories_u, setCategories_u] = useState([]);

  // useEffect(() => {
  //   // Fetch category data from the backend
  //   fetch('http://localhost:8080/api/v2/GetAllCategories')
  //     .then(response => response.json())
  //     .then(data => setCategories(data))
  //     .catch(error => console.log(error));
  // }, []);

  useEffect(() => {
    // fetch category data from the backend
    fetch('http://localhost:8080/api/v2/GetAllLanguage')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setlanguage(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // const handleDeleteCategory = (categoryId) => {
  //   setShowConfirmation(true);
  //   setCategoryIdToDelete(categoryId);
  // };

  const handleDeleteCategory = (languageId) => {
    fetch(`http://localhost:8080/api/v2/DeleteLangugae/${languageId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // If the response status is OK, don't attempt to parse JSON from an empty response
        return response.status === 204 ? null : response.json();
      })
      .then(data => {
        if (data) {
          console.log('Category deleted successfully', data);
        } else {
          console.log('Category deleted successfully (no content)');
        }
        // Remove the deleted category from the local state
        setlanguage(prevCategories => prevCategories.filter(language => language.id !== languageId));
      })
      .catch(error => {
        console.error('Error deleting category:', error);
      });
  };
  

  // const confirmDeleteCategory = () => {
  //   // Send an AJAX request to delete the category
  //   fetch(`http://localhost/mediareact/src/php/deletecategory.php?id=${categoryIdToDelete}`)
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('Category deleted successfully');
  //       // Remove the deleted category from the local state
  //       setlanguage(prevCategories => prevCategories.filter(category => category.id !== categoryIdToDelete));
  //     })
  //     .catch(error => {
  //       console.log('Error deleting category:', error);
  //     })
  //     .finally(() => {
  //       setShowConfirmation(false);
  //     });
  // };
  
  //.......................................User functiuons.....................................
//   useEffect(() => {
//     // fetch category data from the backend
//     fetch('http://localhost:8080/api/v2/GetAllCategories')
//       .then(response => response.json())
//       .then(data => setCategories_u(data))
//       .catch(error => console.log(error));
//   }, []);

  

//   const handleDeleteCategory_u = (categoryId) => {
//     setShowConfirmation_u(true);
//     setCategoryIdToDelete_u(categoryId);
//   };

//   const confirmDeleteCategory_u = () => {
//     // Send an AJAX request to delete the category
//     fetch(`http://localhost/mediareact/src/php/deletecategory.php?id=${categoryIdToDelete_u}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log('Category deleted successfully');
//         // Remove the deleted category from the local state
//         setCategories_u(prevCategories => prevCategories.filter(category => category.id !== categoryIdToDelete_u));
//       })
//       .catch(error => {
//         console.log('Error deleting category:', error);
//       })
//       .finally(() => {
//         setShowConfirmation_u(false);
//       });
//   };

  
  return (
    
  <div id="content-wrapper" className="d-flex flex-column samp" style={{ marginLeft: "13rem"}}>
      <div className="container-fluid px-4">
        <Navbar />
        <Sidebar />
        <h1 className="mt-4 text-white">View languages</h1>
        <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
        </li>
          <li className="breadcrumb-item active">View Languages</li>
        </ol>
        {/* {
          name=="admin"
          ? */}
          <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Languages
          </div>
          <div className="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Languages</th>
                </tr>
              </thead>
              <tbody>
                {language.map((lang, index) => (
                  <tr key={lang.id}>
                    <td>{index + 1}</td>
                    <td>{lang.language ? lang.language : 'No category available'}</td>
                    <td>
                    <button>
                    <Link
                      to={{
                        pathname: `/EditCategory`,
                        state: { lang },
                      }}
                    >
                      <i className="fas fa-edit"></i>
                    </Link>
                  </button>
                        <button onClick={() => handleDeleteCategory(language.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* :
         <div className="card mb-4">
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Categories-u
          </div>
          <div className="card-body">
            <table id="datatablesSimple">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Categories</th>
                </tr>
              </thead>
              <tbody>
                {categories_u.map((category, index) => (
                  <tr key={category.id}>
                    <td>{index + 1}</td>
                    <td>{category.category_name}</td>
                    <td>
                      <button>
                        <Link
                          to={{
                            pathname: `/EditCategory`,
                            state: { category },
                          }}
                        >
                          <i className="fas fa-edit"></i>
                        </Link>
                      </button>
                      <button onClick={() => {
                        if (window.confirm('Do you really want to delete this category?')) {
                          confirmDeleteCategory_u();
                        }
                      }}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        }
         */}
      </div>

      {/* Confirmation dialog
      {showConfirmation && (
        <div className="confirmation-dialog">
          <div className="confirmation-content">
            <h3>Confirmation</h3>
            <p>Do you really want to delete this category?</p>
            <div className="confirmation-buttons">
              <button onClick={confirmDeleteCategory}>Yes</button>
              <button onClick={() => setShowConfirmation(false)}>No</button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ViewCategory;
