import React, { useState, useEffect } from 'react';
// import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, Outlet, useLocation,useNavigate } from 'react-router-dom';
import Dashboard from "./admin/Dashboard";
import "./App.css";
import "./css/sb-admin-2.css";
import "./css/style.css";


import AddUser from "./admin/AddUser";
import Video_setting from "./admin/Video_setting";
import Email_setting from "./admin/Email_setting";
import Social_setting from "./admin/Social_setting";
import Payment_setting from "./admin/Payment_setting";
import Siteurl_setting from "./admin/Siteurl_setting";
import Other_setting from "./admin/Other_setting";
import Contact_setting from "./admin/Contact_setting";
import SEO_setting from "./admin/SEO_setting";
import Mobile_setting from "./admin/Mobile_setting";
import SubscriptionPayments from "./admin/SubscriptionPayments";
import Setting from "./admin/Setting";
import Setting_sidebar from "./admin/Setting_sidebar";
import AddCastCrew from "./admin/AddCastCrew";
import Profile from "./admin/Profile";
import Video from "./admin/Video";
import AddVideo from "./admin/AddVideo";
import Audio from "./admin/Audio";
import AddAudio from "./admin/AddAudio";
import Photo from "./admin/Photo";
import AddPhoto from "./admin/AddPhoto";
import AddCategory from "./admin/AddCategory";
import ViewCategory from "./admin/ViewCategory";
import AddLanguage from './admin/AddLanguage';
import ViewLanguage from "./admin/ViewLanguage";
import Login from "./admin/login";
import UserLogin from './user/Screens/UserLogin'
import EditCategory from "./admin/EditCategory";
import AddCertificate from "./admin/AddCertificate";
import EditCertificate from "./admin/EditCertificate";
import ViewCertificate from "./admin/ViewCertificate";
import Editaudio1 from "./admin/Editaudio1";
import ListAudio from "./admin/ListAudio";
import AddMovie from "./admin/AddMovie";
import EditAudio from "./admin/EditAudio";
import EditTag from "./admin/EditTag";
import ViewTag from "./admin/ViewTag";
import Licence from "./admin/Licence";
import EditComponent from "./admin/EditComponent";
import VideoPlayer from "./admin/VideoPlayer";
import usersidebar from "./user/usersidebar";
import search from "./user/search";
import Homescreen from "./user/Homescreen";
import Userlogin from "./user/Userlogin";
import Userprofile from "./user/Userprofile";
import Signin from "./user/Signin";
import Subscription_details from "./user/Subscription_details";
// import Video from "./user/video";
import Playback from "./user/Playback";
import movie from "./sample/Movie";
import Home from "./user/Screens/HomeScreen";
import EditLanguage from "./admin/EditLanguage";
import EditVideo from "./admin/EditVideo";
import AddTag from "./admin/AddTag";
import AddAud from "./admin/AddAud";
import MoviesPage from "./user/Screens/Movies";
import Watch from './admin/player';
import PrivateRoute from './admin/PrivateRoute';
import Register from './user/Screens/Register'
import AboutUs from './user/Screens/AboutUs';
import SingleMovie from './user/Screens/SingleMovie';
import ViewAudio from "./admin/ViewAudio";
import PlanDetails from './user/PlanDetails';
import UserProfileScreen from './user/UserProfileScreen';
import VideoHomescreen from './user/VideoHomescreen';
import Test from './user/Test';
import Userplayer from './user/Userplayer';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState(); 
  const storedData = sessionStorage.getItem('mySessionData')
  useEffect(() => {

    const fetchData = async () => {
   
     
          
    
  };
  
  fetchData();
   
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      const storedData = sessionStorage.getItem('mySessionData')
      setIsLogged(storedData);
      console.log("inside the app.js Logged :", isLogged);
      console.log("inside the app.js sessionvakue :", storedData);
          
    
  };
  
  fetchData();
  
  }, []);

  const handleLogin = () => {
  
    const val=sessionStorage.getItem('mySessionData')
    setIsLogged(val);
    console.log("inside the app.js val :", val);
    console.log("inside the app.js Logged :", isLogged);// Log the state after it's updated
  };
 
  return (

    <div >
       {/* <Router> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='MoviesPage' element={<MoviesPage />} />
          <Route path='VideoHomescreen' element={<VideoHomescreen />} />
          {/* <Route path='Homescreen' element={<Videosam />} /> */}
          <Route path='test' element={<Test/>} />
          <Route path='UserLogin' element={<UserLogin />} />
          <Route path='Register' element={<Register />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path="/movie/:id" element={<SingleMovie />} />
          <Route path='play' element={<Userplayer/>} />
          <Route path='PlanDetails' element={<PlanDetails />} />
          <Route path="Subscriptiondetails" element={<Subscription_details />} />
          <Route path='UserProfileScreen' element ={<UserProfileScreen />} />


          <Route path='admin' element={<Login handleLogin={handleLogin} />}  >
            <Route path='dashboard' element={<PrivateRoute isAuthenticated={isLogged} element={<Dashboard />} />}/>
            <Route path='addUser'   element={<PrivateRoute isAuthenticated={isLogged} element={<AddUser/>} />} />
            <Route path='profile' element={<PrivateRoute isAuthenticated={isLogged} element={<Profile/>} />}/>
            <Route path='video' element={<PrivateRoute isAuthenticated={isLogged} element={<Video/>} />}/>
            <Route path='addVideo' element={<PrivateRoute isAuthenticated={isLogged} element={<AddVideo/>} />}/>
            <Route path='audio' element={<PrivateRoute isAuthenticated={isLogged} element={<Audio/>} />}/>
            <Route path='addAudio' element={<PrivateRoute isAuthenticated={isLogged} element={<AddAudio/>} />}/>
            <Route path='photo' element={<PrivateRoute isAuthenticated={isLogged} element={<Photo/>} />}/>
            <Route path='addPhoto' element={<PrivateRoute isAuthenticated={isLogged} element={<AddPhoto/>} />}/>
            <Route path='addCategory'element={<PrivateRoute isAuthenticated={isLogged} element={<AddCategory/>} />}/>
            <Route path='addCastCrew' element={<PrivateRoute isAuthenticated={isLogged} element={<AddCastCrew/>} />}/>
            <Route path='subscriptionPayments' element={<PrivateRoute isAuthenticated={isLogged} element={<SubscriptionPayments/>} />}/>
            <Route path='setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Setting/>} />}/>
            <Route path='Video_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Video_setting/>} />}/>
            <Route path='Setting_sidebar' element={<PrivateRoute isAuthenticated={isLogged} element={<Setting_sidebar/>} />}/>
            <Route path='Social_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Social_setting/>} />}/>
            <Route path='Payment_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Payment_setting/>} />}/>
            <Route path='Email_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Email_setting/>} />}/>
            <Route path='Siteurl_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Siteurl_setting/>} />}/>
            <Route path='Other_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Other_setting/>} />}/>
            <Route path='Contact_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Contact_setting/>} />}/>
            <Route path='SEO_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<SEO_setting/>} />}/>
            <Route path='Mobile_setting' element={<PrivateRoute isAuthenticated={isLogged} element={<Mobile_setting/>} />}/>
            <Route path='ViewCategory' element={<PrivateRoute isAuthenticated={isLogged} element={<ViewCategory/>} />}/>
            <Route path='AddLanguage' element={<PrivateRoute isAuthenticated={isLogged} element={<AddLanguage/>} />}/>
            <Route path='ViewLanguage' element={<PrivateRoute isAuthenticated={isLogged} element={<ViewLanguage/>} />}/>
            <Route path='EditCategory' element={<PrivateRoute isAuthenticated={isLogged} element={<EditCategory/>} />}/>
            <Route path='AddCertificate' element={<PrivateRoute isAuthenticated={isLogged} element={<AddCertificate/>} />}/>
            <Route path='VideoPlayer' element={<PrivateRoute isAuthenticated={isLogged} element={<VideoPlayer/>} />}/>
            <Route path='EditCertificate' element={<PrivateRoute isAuthenticated={isLogged} element={<EditCertificate/>} />}/>
            <Route path='ViewCertificate' element={<PrivateRoute isAuthenticated={isLogged} element={<ViewCertificate/>} />}/>
            <Route path='Watch' element={<PrivateRoute isAuthenticated={isLogged} element={<Watch/>} />}/>
            <Route path='EditAudio1' element={<PrivateRoute isAuthenticated={isLogged} element={<Editaudio1/>} />}/>
            <Route path='ViewAudio' element={<PrivateRoute isAuthenticated={isLogged} element={<ViewAudio/>} />}/>
            <Route path='ListAudio' element={<PrivateRoute isAuthenticated={isLogged} element={<ListAudio/>} />}/>
            <Route path='EditTag' element={<PrivateRoute isAuthenticated={isLogged} element={<EditTag/>} />}/>
            <Route path='ViewTag' element={<PrivateRoute isAuthenticated={isLogged} element={<ViewTag/>} />}/>
            <Route path='AddTag' element={<PrivateRoute isAuthenticated={isLogged} element={<AddTag/>} />}/>
            <Route path='EditLanguage' element={<PrivateRoute isAuthenticated={isLogged} element={<EditLanguage/>} />}/>
            <Route path='AddMovie' element={<PrivateRoute isAuthenticated={isLogged} element={<AddMovie/>} />}/>
            <Route path='AddAud' element={<PrivateRoute isAuthenticated={isLogged} element={<AddAud/>} />}/>
            <Route path='EditVideo' element={<PrivateRoute isAuthenticated={isLogged} element={<EditVideo/>} />}/>
            <Route path='ViewAudio' element={<PrivateRoute isAuthenticated={isLogged} element={<ViewAudio/>} />}/>
            <Route path='EditAudio' element={<PrivateRoute isAuthenticated={isLogged} element={<EditAudio/>} />}/>
            
            {/* <Route path='EditComponent' element={< EditComponent />} /> */}
            {/* <Route path='Navbar' element={< Navbar />} /> */}
            {/* 
            
       
            
            */}
          </Route>
          <Route path='licence' element={<Licence/>} />

        </Routes>
      {/* </Router> */}
    </div>
  );
};

export default App;
