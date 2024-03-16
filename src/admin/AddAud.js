import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
// import '../csstemp/addAudio.css';
import { Link } from 'react-router-dom';

const AddAud = () => {
  //.....................................Admin Function............................................
 
  const [errors, setErrors] = useState({});
  const [thumbnail, setThumbnail] = useState(null);
  const save = async (e) => {
    e.preventDefault();
      const audioData = {
        
        thumbnail: thumbnail,
      };
      console.log("audioData")
      console.log(audioData)
  };
  
  return (
    <div>
      <div className='modal-body text-center'>
        <input
          type='file'
          className='form-control'
          placeholder='Choose Thumbnail'
          name='thumbnail'
          onChange={(e) => setThumbnail(e.target.files[0])}
        />
        {errors.thumbnail && <div className="error-message">{errors.thumbnail}</div>}
        <br />
        <button
          type='button'
          name='but_upload'
          className='btn btn-info'
          onClick={save}
        >
          Upload
        </button>
      </div>
    </div>
  );
};

export default AddAud;
