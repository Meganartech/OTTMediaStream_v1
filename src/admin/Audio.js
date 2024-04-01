import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import '../csstemp/AudioStyle.css';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import AudioPlayer from 'react-audio-player';
import "../css/Sidebar.css";

const Audio = () => {
  // ...................................Admin Functions.............................................

  const [audios, setAudios] = useState([]);
  const [image, setImage] = useState([]);
  const [selectedAudio, setSelectedAudio] = useState(null);
  const [audios_u, setAudios_u] = useState([]);
  const [selectedAudio_u, setSelectedAudio_u] = useState(null);
  const [users_u, setUsers] = useState([]);
  const [categories_u, setCategories_u] = useState([]);
  const [tags_u, setTags_u] = useState([]);
  const userid_u = parseInt(sessionStorage.getItem('id'), 10); // Get user ID from session storage
  const name=sessionStorage.getItem('username');


  useEffect(() => {
    // Fetch audios from the backend API
    fetchAudios();
    fetchData();
    // fetchAudios_u();
    // fetchCategories_u();
    // fetchTags_u();
  }, []);

  const fetchAudios = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v2/audio/list');
      setAudios(response.data);
      console.log('Fetched Audios:', response.data); // Added console.log()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/v2/GetAllThumbnail');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data && Array.isArray(data)) {
        setImage(data);
        console.log(data);
      } else {
        console.error('Invalid or empty data received:', data);
      }
    } catch (error) {
      console.error('Error fetching or processing data:', error);
    }
  };


  const openAudioModal = (audio) => {
    const audioLocation = `${audio.file_location}`;
    setSelectedAudio({ ...audio, file_location: audioLocation });
  };

  const closeAudioModal = () => {
    setSelectedAudio(null);
  };
  // ...................................Admin Functions.............................................
  // const fetchAudios_u = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost/mediareact/src/php/getUserAudios.php?userid=${userid_u}`);
  //     setAudios_u(response.data);
  //     console.log('Fetched Audios:', response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const fetchCategories_u = async () => {
  //   try {
  //     const response = await axios.get('http://localhost/mediareact/src/php/getCategories.php');
  //     setCategories_u(response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const fetchTags_u = async () => {
  //   try {
  //     const response = await axios.get('http://localhost/mediareact/src/php/getTags.php');
  //     setTags_u(response.data);
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  // const openAudioModal_u = (audioId) => {
  //   const selectedAudio_u = audios_u.find((audio) => audio.id === audioId);
  //   setSelectedAudio_u(selectedAudio_u);
  // };

  // const closeAudioModal_u = () => {
  //   setSelectedAudio_u(null);
  // };

  // const getUserName_u = (userId) => {
  //   const user = users_u.find((user) => user.id === userId);
  //   return user ? user.username : '';
  // };

  // const getCategoryName_u = (categoryId) => {
  //   const category = categories_u.find((category) => category.id === categoryId);
  //   return category ? category.category_name : '';
  // };

  // const getTagName_u = (tagId) => {
  //   const tag = tags_u.find((tag) => tag.id === tagId);
  //   return tag ? tag.tag_name : '';
  // };
  return (
    <div id="content-wrapper" class="d-flex flex-column samp" style={{ marginLeft: "13rem"}}>

   <Sidebar />
    <div className="container-fluid">
   

      <h1 className="mt-4 text-white">Audios</h1>
      <ol className="breadcrumb mb-4">
        <li className="breadcrumb-item">
          <Link to="/Dashboard">Dashboard</Link>
        </li>
        <li className="breadcrumb-item active">Audios</li>
      </ol>
      {/* {name=="admin"
      ? */}
      <div>
      <div className="audio-grid">
        {audios.length > 0 ? (
         audios.map((audio, index) => (
            <div key={audio.id}>
              <div className="audio-item" onClick={() => openAudioModal(audio)}>
                <div className="audio-thumbnail">
                {index < image.length && (
            <img
              src={`data:image/png;base64,${image[index]}`}
              alt={`Image ${index + 1}`}
              style={{ width: 'auto', height: 'auto', objectFit: 'cover' }}
            />
          )}
                  {selectedAudio && selectedAudio.id === audio.id && (
                  <AudioPlayer
            src={`http://localhost:8080/api/v2/${audio}`}
            controls
            className="selected-audio"
          />
                   )} 
                </div>
                <div className="play-button"></div>
              </div>
              <h3 className="audio-title">{audio.audio_title}</h3>
            </div>
          ))
        ) : (
          <p>No audios found.admin</p>
        )}
      
      </div>
      {selectedAudio && (
        <div className="audio-modal">
          <div className="audio-modal-content">
            <div className="selected-audio-container">
              <audio
                src={`http://localhost:8080/api/v2/${selectedAudio.file_location}`}
                controls
                className="selected-audio"
              ></audio>
            </div>
            <div className="audio-details">
              <h3 className="audio-title">Audio ID: {selectedAudio.id}</h3>
              <p className="audio-details">User: {selectedAudio.user}</p>
              <p className="audio-details">Category: {selectedAudio.categories}</p>
              <p className="audio-details">Tag: {selectedAudio.tag}</p>
              <p className="audio-details">Name: {selectedAudio.audio_title}</p>
            </div>
            <div className="close-icon" onClick={closeAudioModal}>
              X
            </div>
          </div>
        </div>
      )}
      </div>
      {/* :  */}
      {/* <div>
      <div className='audio-grid'>
        {Array.isArray(audios_u) && audios_u.length > 0 ? (
          audios_u.map((audio) => (
            <div className='audio-item' key={audio.id} onClick={() => openAudioModal_u(audio.id)}>
              {/* Display audio thumbnail if available, otherwise use a placeholder image */}
              {/* <img src={audio.thumbnail || '/placeholder-audio-thumbnail.png'} alt={audio.audio_title} />
              <h3 className='audio-title'>{audio.audio_title}</h3>
            </div>
          )) */}
        {/* ) : (
          <p>No audios found. user</p>
        )} */}
      {/* </div>
      {selectedAudio_u && (
        <div className='audio-modal'>
          <div className='audio-modal-content'>
            {/* Display audio file details here */}
            {/* <div className='image-container'>
            <img src={selectedAudio_u.thumbnail || '/placeholder-audio-thumbnail.png'} alt={selectedAudio_u.audio_title} /></div>
            <div className="player-container">
            <ReactPlayer url={`${selectedAudio_u.file_location}`} controls={true} />
            </div> */}
            {/* <div className='audio-details'>
              <h3 className='audio-title'>Audio ID: {selectedAudio_u.id}</h3>
              <p className='audio-details'>User: {getUserName_u(selectedAudio_u.user_id)}</p>
              <p className='audio-details'>Category: {getCategoryName_u(selectedAudio_u.category_id)}</p>
              <p className='audio-details'>Tag: {getTagName_u(selectedAudio_u.tag_id)}</p>
            </div>
            <div className='close-icon' onClick={closeAudioModal_u}>
              X */}
            {/* </div>
          </div>
        </di
      </div> */}
      {/* // } */}
    </div>
    </div>
  );
};

export default Audio;