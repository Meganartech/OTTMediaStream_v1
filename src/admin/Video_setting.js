import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';
import Setting_sidebar from './Setting_sidebar';
import Employee from './Employee'
import "../css/Sidebar.css";
const Site = () => {

  
    // ---------------------Admin functions -------------------------------
  const [userIdToDelete, setUserIdToDelete] = useState('');
  const [users, setUsers] = useState([]);
  const name = sessionStorage.getItem('username');

  useEffect(() => {

    // Fetch user data from the backend
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost/mediareact/src/php/profile.php');
        setUsers(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };

       fetchUsers();
        }, []);

    const handleDeleteUser = (userId) => {
    const confirmDelete = window.confirm('Do you really want to delete this user?');
    if (confirmDelete) {
      // Perform the actual deletion logic here
      console.log(`Deleting user with ID: ${userId}`);

      // Make an API call to delete the user
      fetch(`http://localhost/mediareact/src/php/delete.php?id=${userId}`, {
        method: 'DELETE',
      })
        .then((response) => {
          if (response.ok) {
            console.log('User deleted successfully');

            // Remove the deleted user from the local state
            setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
          } else {
            console.log('Error deleting user');
          }
        })
        .catch((error) => {
          console.log('Error deleting user:', error);
        });
    }
    };
    // ---------------------User functions -------------------------------

    const [id, setId] = useState(sessionStorage.getItem('id') || '');
    const [username, setUsername] = useState(sessionStorage.getItem('username') || '');
    const [mobnum, setMobnum] = useState(sessionStorage.getItem('mobnum') || '');
    const [address, setAddress] = useState(sessionStorage.getItem('address') || '');
    const [pincode, setPincode] = useState(sessionStorage.getItem('pincode') || '');
    const [email, setEmail] = useState(sessionStorage.getItem('email') || '');
    const [compname, setCompname] = useState(sessionStorage.getItem('compname') || '');
    const [country, setCountry] = useState(sessionStorage.getItem('country') || '');
    const [password, setPassword] = useState(sessionStorage.getItem('password') || '');

    useEffect(() => {
      // Retrieve user data from sessionStorage on component mount
      setId(sessionStorage.getItem('id') || '');
      setUsername(sessionStorage.getItem('username') || '');
      setMobnum(sessionStorage.getItem('mobnum') || '');
      setAddress(sessionStorage.getItem('address') || '');
      setPincode(sessionStorage.getItem('pincode') || '');
      setEmail(sessionStorage.getItem('email') || '');
      setCompname(sessionStorage.getItem('compname') || '');
      setCountry(sessionStorage.getItem('country') || '');
      setPassword(sessionStorage.getItem('password') || '');
    }, []);
    const handleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'username':
          setUsername(value);
          break;
        case 'mobnum':
          setMobnum(value);
          break;
        case 'address':
          setAddress(value);
          break;
        case 'pincode':
          setPincode(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'compname':
          setCompname(value);
          break;
        case 'country':
          setCountry(value);
          break;
        case 'password':
          setPassword(value);
          break;
        default:
          break;
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Save the edited user details to sessionStorage
      sessionStorage.setItem('id', id);
      sessionStorage.setItem('username', username);
      sessionStorage.setItem('mobnum', mobnum);
      sessionStorage.setItem('address', address);
      sessionStorage.setItem('pincode', pincode);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('compname', compname);
      sessionStorage.setItem('country', country);
      sessionStorage.setItem('password', password);
  
      // API call to update user data
      try {
        const response = await axios.post('http://localhost/mediareact/src/php/update.php', {
          id: id,
          username: username,
          mobnum: mobnum,
          address: address,
          pincode: pincode,
          email: email,
          compname: compname,
          country: country,
          password: password,
        });
  
        if (response.status === 200) {
          // Data updated successfully
          console.log(response.data.message);
        } else {
          // Error occurred while updating data
          console.error('Error:', response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle the error here
      }
    };
  //===========================================API--G================================================================
  const [socket_url, setsocket_url] = useState('');
  const changesocket_urlHandler = (event) => {
    const newValue = event.target.value;
    setsocket_url(newValue); // Updating the state using the setter function from useState
};
const [streaming_url, setstreaming_url] = useState('');
  const changestreaming_urlHandler = (event) => {
    const newValue = event.target.value;
    setstreaming_url(newValue); // Updating the state using the setter function from useState
};
const save=(e)=>{
  e.preventDefault();
  let SiteSetting={socket_Url: socket_url,streaming_URL: streaming_url};
  console.log("'employee =>'+JSON.stringify(SiteSetting)");
  Employee.setVideoSetting(SiteSetting).then(res =>{
    setsocket_url('');
    setstreaming_url('');
  })

  
}

  return (

    <div id="content-wrapper" class="d-flex flex-column samp" style={{ marginLeft: "13rem" }}>

      <Sidebar />

      <div className="container-fluid"   >
<div className='container2'>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item text-white">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">Video Settings</li>
        </ol>
        <div className="card md-8" style={{maxWidth: '91rem',paddingLeft: '0px'}}>           
          <div className="container card-body">
          <div class="temp">
          <div class="col col-lg-2">
        <Setting_sidebar />
        </div>
        <div class="col col-lg-9">
        <ul className='breadcrumb-item' style={{paddingLeft: '0px'}}>
        <form onSubmit="" method="post" className="registration-form">
        <div className="temp">
        <div className="col-md-12">
        <div className="form-group">
              <label className="custom-label" style={{color:'black'}}>
              Configuration
              </label>
              </div>
          </div>
        <div className="col-md-6">
        <div className="form-group">
              <label className="custom-label">
              Socket Url
              </label>
              <input type="text" placeholder="Socket Url" name="Socket Url" value={socket_url} onChange={changesocket_urlHandler} />
              
            </div>
          </div>
          <div className="col-md-6">
          <div className="form-group">
              <label className="custom-label">
                Streaming URL
              </label>
              <input type="text" placeholder="Streaming URL" name="Streaming URL" value={streaming_url} onChange={changestreaming_urlHandler} />
            </div>
            </div>
            <div className="col-md-12">
          <div className="form-group">
          <input type="submit" className="btn btn-info" name="submit" value="Submit" onClick={save} />
              
               </div>
      
          </div>
        </div>
        </form>
        </ul>
        </div>
        </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Site;
