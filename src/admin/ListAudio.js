import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import AudioPlayer from 'react-audio-player';
import "../css/Sidebar.css";
const ListAudio = () => {
  const [image, setImage] = useState([]);
  // const [audios, setAudios] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState(null);
  const [filename, setFilename] = useState(null);
  const [getall, setGetall] = useState(null);

  useEffect(() => {
    fetchData();
  }, [deleteStatus]);

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
      } else {
        console.error('Invalid or empty data received:', data);
      }
    } catch (error) {
      console.error('Error fetching or processing image data:', error);
    }
  };

 

  const handleDelete = async (audioId, index) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v2/audio/${audioId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // fetchAudios();
        setDeleteStatus('Audio deleted successfully');
      setGetall((prevGetAll) => {
        const updatedGetAll = [...prevGetAll];
        updatedGetAll.splice(index, 1);
        return updatedGetAll;
      });
        console.log(deleteStatus);
       
      } else {
        setDeleteStatus('Error deleting audio');
        console.log(deleteStatus);
      }
    } catch (error) {
      console.error('Error:', error);
      setDeleteStatus('Error deleting audio');
      console.log(deleteStatus);
    }
    
  };
  
  useEffect(() => {
    console.log(deleteStatus);
  }, [deleteStatus]);

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
       
       

        <h1 className="mt-4 text-white">Audios</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li className="breadcrumb-item active">Audios</li>
        </ol>
        
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {getall && getall.length > 0 ? (
    getall.map((get, index) => (
      
      <div key={get.id}>
        <div className="audio-item">
          <div
            className="audio-thumbnail"
            style={{
              background: '#606060',
              width: '300px',
              height: '250px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '10px',
              marginTop: '20px',
              marginRight: '30px',
              boxSizing: 'border-box',
              borderRadius: '10px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* {index < .length && ( */}
              {/* <div style={{ width: '100%', height: '70%', borderRadius: '8px', overflow: 'hidden' }}>
                <img
                  src={`data:image/png;base64,${image[index]}`}
                  alt={`Image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div> */}
              <div style={{ width: '100%', height: '70%', borderRadius: '8px', overflow: 'hidden' }}>
                  {get.thumbnail !== null && get.thumbnail !== undefined && (
                    <Link
                    to={{
                      pathname: `/admin/ViewAudio`,
                      state: { get },
                    }}
                  >
                    <img
                    src = {`data:image/png;base64,${image[index]}`}
                      alt={`Image ${index + 1}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    </Link>
                  )}
                </div>
            {/* )} */}
            {/* {index < audios.length && ( */}
            <div style={{ width: '100%', marginTop: '10px' }}>
              {/* <AudioPlayer
                src={URL.createObjectURL(new Blob([`http://localhost:8080/api/v2/${get.fileName.replace(/^.*[\\\/]/, '')}/file`]))}
                controls
                className="selected-audio"
                style={{
                  width: '100%',
                }}
              /> */}
              <p style={{textAlign:'center'}}>{get.fileName.replace(/^.*[\\\/]/, '').replace(/^.*_/, '')}</p>
            </div>
            {/* )} */}
            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', width: '100%', color: 'white' }}>
              <button>
                <Link
                  to={{
                    pathname: `/admin/Editaudio1`,
                    state: { get },
                    
                  }}
                >
                  <i className="fas fa-edit"></i>
                  EDIT
                </Link>
              </button>
              <button onClick={() => handleDelete(get.id, index)}>DELETE</button>
              <button>
                <Link
                  to={{
                    pathname: `/admin/ViewAudio`,
                    state: { get},
                  }}
                >
                  VIEW
                </Link>
              </button>
            </div>
          </div>
          <div className="play-button"></div>
        </div>
      </div>
     
    ))
  ) : (
    <p>No audios found.admin</p>
  )}
   </div>



        {/* <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {audios.length > 0 ? (
            audios.map((audio, index) => (
              <div key={audio.id}>
                <div className="audio-item">
                  <div
                    className="audio-thumbnail"
                    style={{
                      background: '#606060',
                      width: '300px',
                      height: '250px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '10px',
                      marginTop: '20px',
                      marginRight: '30px',
                      boxSizing: 'border-box',
                      borderRadius: '10px',
                      boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {index < image.length && (
                      <div style={{ width: '100%', height: '70%', borderRadius: '8px', overflow: 'hidden' }}>
                        <img
                          src={`data:image/png;base64,${image[index]}`}
                          alt={`Image ${index + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    )}
                    <div style={{ width: '100%', marginTop: '10px' }}>
                      <AudioPlayer
                        src={`http://localhost:8080/api/v2/${audio}`}
                        controls
                        className="selected-audio"
                        style={{
                          width: '100%',
                        }}
                      />
                    </div>
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', width: '100%', color: 'white' }}>
                      <button>
                        <Link
                          to={{
                            pathname: `/admin/EditAudio`,
                            state: { audio, image: image[index] },
                          }}
                        >
                          <i className="fas fa-edit"></i>
                          EDIT
                        </Link>
                      </button>
                      {/* <button onClick={() => handleDelete(audio.id, filename)}>DELETE</button> */}
                    {/* <button onClick={() => handleDelete(audio.id)}>DELETE</button> 

                      <button>
                        <Link
                          to={{
                            pathname: `/admin/ViewAudio`,
                            state: { audio },
                          }}
                        >
                          VIEW
                        </Link>
                      </button> */}
                    {/* </div>
                  </div>
                  <div className="play-button"></div>
                </div>
              </div>
            ))
          ) : (
            <p>No audios found.admin</p>
          )} */}
        {/* </div> */}
      </div> 
    </div>
  );
};

export default ListAudio;
