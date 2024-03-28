import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import {  useLocation,Link} from 'react-router-dom';
import Axios from 'axios';
import AudioPlayer from 'react-audio-player';
import "../css/Sidebar.css";
const ViewAudio = () => {

  const location = useLocation();
  const { get } = location.state;
  console.log(get.id)


  const [audioData, setAudioData] = useState(null);
  const [image, setImage] = useState([]);
  // const imageData = get.thumbnail;
  // const imageUrl = URL.createObjectURL(new Blob([atob(imageData)], { type: 'image/png' }));
  


  useEffect(() => {
    // Fetch the audio file when the component mounts
    const fetchAudio = async () => {
      try {
        const response = await Axios.get(
          `http://localhost:8080/api/v2/${get.fileName.replace(/^.*[\\\/]/, '')}/file`,
          {
            responseType: 'arraybuffer', // Set the response type to arraybuffer for binary data
          }
        );

        // Set the audio data directly
        setAudioData(response.data);
      } catch (error) {
        console.error('Error fetching audio:', error);
      }
    };

    fetchAudio();
  }, [get.fileName]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch image data
        const response = await fetch(`http://localhost:8080/api/v2/GetThumbnailsById/${get.id}`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // if (data && Array.isArray(data)) {
        //   setImage(data);
        if(response.ok){
            setImage(data);

        } else {
          console.error('Invalid or empty data received:', data);
        }
      } catch (error) {
        console.error('Error fetching or processing image data:', error);
      }
    };

    fetchData();
  }, [get.id]);

  
 
  // const base64Audio = btoa(audioUrl);
  // const audioDataURL = `data:audio/mpeg;base64,${base64Audio}`;
  // const playAudio = () => {
  //   setAudioUrl(audioDataURL);
  // };

  return (
    <div id="content-wrapper" className="d-flex flex-column samp" style={{ marginLeft: "13rem"}}>
    <div className="container-fluid px-4">
      <Navbar />
      <Sidebar />
      {/* <h1 className="mt-4 text-black">{updatedget.categories}'s Profile</h1> */}

      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="breadcrumb-item active">View</li>
        
      </ol>
      <div className="row" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="col-lg-8">
          <div className="card mb-4">
            <div className="card-body" >
            <button class="btn btn-primary">
                  <Link
                    to={{
                      pathname: `/admin/ListAudio`,
                    }}
                  >Back
                    </Link> 
            </button>
              
              <br /><br />
            <h3 className="card-title">
                <p>Category: {get.category.categories}</p>
                <p>Name: {get.fileName.replace(/^.*[\\\/]/, '').replace(/^.*_/, '')}</p>
            </h3>
            <div style={{ width: '100%', height: '100%', borderRadius: '8px', overflow: 'hidden' }}>
                {/* Render your component with the fetched thumbnail data */}
                {image.map((base64Thumbnail, index) => (
                  <img
                    key={index}
                    src={`data:image/png;base64,${base64Thumbnail}`}
                    alt={`Thumbnail`}
                    style={{
                      width: '100%', // Set the width to 100% to ensure it takes up the full container width
                      height: '100%', // Set the height to 100% to maintain the aspect ratio
                      objectFit: 'cover', // Use 'cover' to make sure the image covers the entire container without stretching
                      borderRadius: '8px',
                    }}
                  />
                ))}
              </div>

            <div style={{ width: '100%', marginTop: '10px' }}>
            {audioData ? (
              <AudioPlayer
                src={URL.createObjectURL(new Blob([audioData], { type: 'audio/mpeg' }))}
                controls
                className="selected-audio"
                style={{
                  width: '100%',
                }}
              />
              ) : (
                <p>Loading audio...</p>
              )}
            </div>
            </div>
            </div>
            </div>
            </div>
      </div>
      </div>

  )
}

export default ViewAudio