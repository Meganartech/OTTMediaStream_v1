import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import axios from 'axios';
import Setting_sidebar from './Setting_sidebar';
import Employee from './Employee'
import "../css/Sidebar.css";
const Social_setting = () => {


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
  const [FBclientid, setFBclientid] = useState('');
  const changeFBclientidHandler = (event) => {
    const newValue = event.target.value;
    setFBclientid(newValue); // Updating the state using the setter function from useState
  };
  const [FBclientsecret, setFBclientsecret] = useState('');
  const changeFBclientsecretHandler = (event) => {
    const newValue = event.target.value;
    setFBclientsecret(newValue); // Updating the state using the setter function from useState
  };
  const [FBcallBack, setFBcallBack] = useState('');
  const changeFBcallBackHandler = (event) => {
    const newValue = event.target.value;
    setFBcallBack(newValue); // Updating the state using the setter function from useState
  };
  const [Google_Client_Id, setGoogle_Client_Id] = useState('');
  const changeGoogle_Client_IdHandler = (event) => {
    const newValue = event.target.value;
    setGoogle_Client_Id(newValue); // Updating the state using the setter function from useState
  };
  const [Google_Client_Secret, setGoogle_Client_Secret] = useState('');
  const changeGoogle_Client_SecretHandler = (event) => {
    const newValue = event.target.value;
    setGoogle_Client_Secret(newValue); // Updating the state using the setter function from useState
  };
  const [Google_CallBack, setGoogle_CallBack] = useState('');
  const changeGoogle_CallBackHandler = (event) => {
    const newValue = event.target.value;
    setGoogle_CallBack(newValue); // Updating the state using the setter function from useState
  };
  const save = (e) => {
    e.preventDefault();
    let SiteSetting = { googl_client_back: Google_CallBack, googl_client_secret: Google_Client_Secret,googl_client_id: Google_Client_Id, fb_call_back: FBcallBack,fb_client_secret: FBclientsecret, fb_client_id: FBclientid };
    console.log('employee =>'+JSON.stringify(SiteSetting));
    Employee.setSocialsettings(SiteSetting).then(res => {
      setGoogle_CallBack('');
      setGoogle_Client_Secret('');
      setGoogle_Client_Id('');
      setFBcallBack('');
      setFBclientsecret('');
      setFBclientid('');
    })
  }

  return (

    <div id="content-wrapper" class="d-flex flex-column samp" style={{ marginLeft: "13rem" }}>
      <Sidebar />
      <div className="container-fluid"   >
        
        {/* <Sample /> */}
        <h1 className="mt-4 text-white">Setting</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">Setting</li>
        </ol>
        <div className="card md-8" style={{ maxWidth: '91rem', paddingLeft: '0px' }}>
          <div className="container card-body">
            <div class="row">
              <div class="col col-lg-2">
                <Setting_sidebar />
              </div>
              <div class="col col-lg-9">
                <ul className='breadcrumb-item' style={{ paddingLeft: '0px' }}>
                  <form onSubmit="" method="post" className="registration-form">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="custom-label">
                            FB Settings
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            FB Client Id
                          </label>
                          <input type="text" placeholder="FB Client Id" name="FB Client Id" value={FBclientid} onChange={changeFBclientidHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            FB Client Secret
                          </label>
                          <input type="text" placeholder="FB Client Secret" name="FB Client Secret" value={FBclientsecret} onChange={changeFBclientsecretHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            FB CallBack
                          </label>
                          <input type="text" placeholder="FB CallBack" name="FB CallBack" value={FBcallBack} onChange={changeFBcallBackHandler} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label className="custom-label">
                            Google Settings
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Google Client Id
                          </label>
                          <input type="text" placeholder="Google Client Id" name="Google Client Id" value={Google_Client_Id} onChange={changeGoogle_Client_IdHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Google Client Secret
                          </label>
                          <input type="text" placeholder="Google Client Secret" name="Google Client Secret" value={Google_Client_Secret} onChange={changeGoogle_Client_SecretHandler} />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label className="custom-label">
                            Google CallBack
                          </label>
                          <input type="text" placeholder="Google CallBack" name="Google CallBack" value={Google_CallBack} onChange={changeGoogle_CallBackHandler} />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="col-md-2">
                          <div className="form-group">
                          <input type="submit" className="btn btn-info" name="submit" value="Submit" onClick={save} />
                          </div>
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
  );
};

export default Social_setting;
