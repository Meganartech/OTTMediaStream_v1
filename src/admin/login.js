import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const Login = ({ handleLogin }) => {
  const [user, setUser] = useState({ username: '', password: '' });
  const [samp1, setsamp] = useState(1);
  const [users, setUsers] = useState([]);
  const [valid, setValid] = useState();
  let value = 1;
  const [isEmpty, setIsEmpty] = useState();
  // var isEmpty;
  const location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {

    fetchUsers();

    if (location.pathname === '/admin') {
      setsamp(0);
    } else {
      setsamp(1);
    }
  }, [location.pathname]);



  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // fetchUsers();




  };
  const hide = () => {
    // setsamp(1);
    setValid('');
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v2/GetAllUser');
      setUsers(response.data.userList);
      setIsEmpty(response.data.empty); // Corrected from setisEmpty to setIsEmpty
      setValid(response.data.valid);
      console.log("Is empty: " + isEmpty); // Corrected from empty to isEmpty
      console.log("Valid: " + valid);
      console.log("--------------------------------------------------------------------");
      // After setting the users state, check if the username exists
      // const userFound = response.data.find(userData => userData.username === user.username);
    } catch (error) {
      console.log('Error fetching users:', error);
    }

  }


  const Submit = (e) => {
    e.preventDefault();
    fetchUsers();
    

    const userFound = users.find(userData => (
      user.username === userData.username && user.password === userData.password
    ));

    if (userFound && !isEmpty && valid) {
      hide();
      handleLogin();
      navigate('/admin/Dashboard');
      sessionStorage.setItem('mySessionData', true);
      const itrm= sessionStorage.getItem('mySessionData')
      console.log("session :"+itrm)
      
      // If needed, perform navigation or any other action here
    } else if (isEmpty) {
      alert("Licence required")
      navigate('/licence');
    } else if (!valid) {

      alert("Licence Expired")
      navigate('/licence');
    }
    else {
      alert("Invalid username or password");
    }
    
    // if(
    //   // user.username==users.username
    //   //  && 
    //    user.password==users.password
    //    ){
    //   // navigate('Dashboard'); 
    //   navigate('/admin/Dashboard', { state: { username: user.username, password: user.password } });
    // }
    // else{
    //   alert("invalid");
    // }

  }
  return (
    <>
      {samp1 === 0 ? (
        <div className="contain">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="card shadow-lg border-0 rounded-lg mt-5">
                <div className="bg-image" style={{ backgroundImage: "url('img/bg.jpg')" }}>
                  <div className="card-header">
                    <h3 className="text-center text-black font-weight-light my-4">Login </h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={Submit}>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          name="username"
                          type="text"
                          placeholder="Username"
                          value={user.username}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="inputUsername">Username</label>
                      </div>
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          name="password"
                          type="password"
                          placeholder="Password"
                          value={user.password}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="inputPassword">Password</label>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                        <a className="small" href="password-recovery.php">
                          Forgot Password?
                        </a>
                        <button className="btn btn-primary" type="submit" style={{ color: "black" }}>LOGIN</button>
                      </div>
                      <div className="small text-center">
                        <Link to="Dashboard" onClick={hide}>Back to Home</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <Outlet />
    </>
  );
};

export default Login;
