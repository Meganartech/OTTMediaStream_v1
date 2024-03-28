import React, { useState ,useEffect} from 'react';
import { Navbar } from 'react-bootstrap';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import "../css/Sidebar.css";

const ViewCertificate= () => {
  const [certificate, setCertificate] = useState([]);

  useEffect(() => {
    // fetch category data from the backend
    fetch('http://localhost:8080/api/v2/GetAllCertificate')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setCertificate(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);


  const handleDeleteCertificate = (certificateId) => {
    fetch(`http://localhost:8080/api/v2/DeleteCertificate/${certificateId}`, {
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
          console.log('Certificate deleted successfully', data);
        } else {
          console.log('Certificate deleted successfully (no content)');
        }
        // Remove the deleted category from the local state
        setCertificate(prevCertificate => prevCertificate.filter(certificate => certificate.id !== certificateId));
      })
      .catch(error => {
        console.error('Error deleting certificate:', error);
      });
  };
  
// return (
//     <div>
//       <h1>Certificate Display Example</h1>
//       {certificateData.length > 0 ? (
//         certificateData.map((certificate, index) => (
//           <img
//             key={index}
//             src={`data:image/jpeg;base64,${certificate}`}
//             alt={`Certificate ${index + 1}`}
//             width="50%"
//             height="50px"
//           />
//         ))
//       ) : (
//         <div className="text-center mt-5">
//           <p className="font-weight-bold">No Certificate Found</p>
//         </div>
//       )}
//     </div>
//   );

return (
  <div id="content-wrapper" className="d-flex flex-column samp" style={{ marginLeft: "13rem"}}>
  <div className="container-fluid px-4">
    <Navbar />
    <Sidebar />
    <h1 className="mt-4 text-white">View Certificate</h1>
    <ol className="breadcrumb mb-4">
    <li className="breadcrumb-item"><Link to="admin/Dashboard">Dashboard</Link>
    </li>
      <li className="breadcrumb-item active">View Certificate</li>
    </ol>
      <div className="card mb-4">
      <div className="card-header">
        <i className="fas fa-table me-1"></i>
        Certificate
      </div>
      <div className="card-body">
        <table id="datatablesSimple">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Certificate</th>
            </tr>
          </thead>
          <tbody>
            {certificate.map((certificate, index) => (
              <tr key={certificate.id}>
                <td>{index + 1}</td>
                <td>{certificate.certificate ? certificate.certificate : 'No certificate available'}</td>
                <td>
                <button>
                <Link
                  to={{
                    pathname: `/admin/EditCertificate`,
                    state: { certificate },
                  }}
                >
                  <i className="fas fa-edit"></i>
                </Link>
              </button>
                    <button onClick={() => handleDeleteCertificate(certificate.id)}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
  
  
};

export default ViewCertificate;
