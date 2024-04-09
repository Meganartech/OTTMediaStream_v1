import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import AudioPlayer from 'react-audio-player';
import { useNavigate } from 'react-router-dom';
import "../css/Sidebar.css";
const ListAudio = () => {
  const [image, setImage] = useState([]);
  const [vimage, setvImage] = useState([]);
  // const [audios, setAudios] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(null);
  const [filename, setFilename] = useState(null);
  const [getall, setGetall] = useState(null);
  const [all, setall] = useState(null);
  const userid = parseInt(sessionStorage.getItem('id'), 10); // Get user ID from session storage
  const name = sessionStorage.getItem('username');
  let Id;
  const navigate = useNavigate();
 

  useEffect(() => {
    // fetch category data from the backend
    fetch('http://localhost:8080/api/v2/GetAll')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setGetall(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });

    

  }, []);

  

  const fetchData = async () => {
    try {
      // Fetch image data
      const response = await fetch('http://localhost:8080/api/v2/GetAllThumbnail');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data && Array.isArray(data)) {
        setImage(data);
        console.log(image);
      } else {
        console.error('Invalid or empty data received:', data);
      }
    } catch (error) {
      console.error('Error fetching or processing image data:', error);
    }

   
  };

 

  const handleDelete = async (audioId) => {
    const  audId=audioId
    console.log(audId)
    try {
      const response = await fetch(`http://localhost:8080/api/v2/audio/${audId}`);
  
      if (response.ok) {
        // fetchAudios();
        // setDeleteStatus('Audio deleted successfully');
      // setGetall((prevGetAll) => {
      //   const updatedGetAll = [...prevGetAll];
      //   updatedGetAll.splice(index, 1);
      //   return updatedGetAll;
      // });
        console.log('deleteStatus');
       
      } else {
        // setDeleteStatus('Error deleting audio');
        console.log('deleteStatus');
      }
    } catch (error) {
      console.error('Error:', error);
      // setDeleteStatus('Error deleting audio');
      console.log("deleteStatus");
    }
    
  };

  const handlEdit = async (audioId) => {
    localStorage.setItem('items', audioId);
    navigate('/admin/Editaudio1');
  };
  
  

  // const fetchAudios = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/api/v2/audio/list');
  //     setAudios(response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  return (

    <div id="content-wrapper" className="d-flex flex-column samp" style={{ marginLeft: '13rem' }}>

       <Sidebar />
      <div className="container-fluid">
       <div className='container2'>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item text-white">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">Audios</li>
        </ol>
        
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {getall && getall.length > 0 ? (
    getall.map((get, index) => (
      

      <h1 className="mt-4 text-white">{name=="admin"?"Admin-Audios":"User-Audios"}</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="breadcrumb-item active">Audios</li>
      </ol>
      <div className="card-1 mb-4" style={{height: "auto"}}>
          <div className="card-header">
            <i className="fas fa-table me-1"></i>
            Audio List
          </div>
      {/* {name=="admin"
      ? */}
      <div className="card-body profile-card-body">
              <table id="datatablesSimple">
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>songname</th>
                    <th>category</th>
                  </tr>
                </thead>
                <tbody>
                {getall && getall.map((audio, index) => (
                  <tr key={audio.id}>
                    <td>{index + 1}</td>
                    <td>{audio.fileName.replace(/^.*[\\\/]/, '').replace(/^.*_/, '').replace(/\.mp3$/, '')}</td>
                    <td>{audio.category.categories}</td>
                    <td>
                      <button onClick={() => handlEdit(audio.id)}>
                        <i className="fas fa-edit" aria-hidden="true"></i>
                      </button>
                      <button onClick={() => handleDelete(audio.id)}>
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

export default ListAudio;
