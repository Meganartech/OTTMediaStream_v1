import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../css/Sidebar.css";
const ViewLanguage = () => {
  //.......................................Admin functiuons.....................................
  const userid = parseInt(sessionStorage.getItem('id'), 10); // Get user ID from session storage
  const name = sessionStorage.getItem('username');
  const navigate = useNavigate();
  let Id;
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

  const handleDeleteLanguage = (languageId) => {
    fetch(`http://localhost:8080/api/v2/DeleteLanguage/${languageId}`, {
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
      if (!data) {
        console.log('Language deleted successfully');
        // Remove the deleted language from the local state
        setlanguage(prevLanguages => prevLanguages.filter(language => language.id !== languageId));
      } else {
        console.error('Error deleting language:', data.error); // Log error message from server
      }
    })
    .catch(error => {
      console.error('Error deleting language:', error);
    });
  };
  

  const handlEdit = async (languageId) => {
    localStorage.setItem('items', languageId);
    navigate('/admin/Editlanguage');
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

      
        <Sidebar />
      <div className="container-fluid">
<div className='container2'>
        <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item text-white"><Link to="/Dashboard">Dashboard</Link>
        </li>
          <li className="breadcrumb-item active">View Languages</li>
        </ol>
        {/* {
          name=="admin"
          ? */}
         
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
                    
                    {/* <Link
                      to={{
                        pathname: `/EditCategory`,
                        state: { lang },
                      }}
                    >
                      <i className="fas fa-edit"></i>
                    </Link> */}
                  <button onClick={() => handlEdit(language.id)} >
                          <i className="fas fa-edit" aria-hidden="true"></i>
                        
                  </button>
                        <button onClick={() => handleDeleteLanguage(language.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default ViewLanguage;
