import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';

// import '../csstemp/addAudio.css';
import { Link } from 'react-router-dom';

const Licence = () => {
    //.....................................Admin Function............................................
 
  const [categoryName, setCategoryName] = useState('');
  const [tagName, setTagName] = useState('');
  const [categories, setCategories] = useState([]);
  const [errors, setErrors] = useState({});
  const [categoryId, setCategoryId] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesResponse = await axios.get('http://localhost:8080/api/v2/GetAllCategories');
        setCategories(categoriesResponse.data);
        console.log(categories)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const generateAudioTitle = () => {
    const fileName = audioFile ? audioFile.name : 'Untitled Audio';
    return fileName;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
      const audioData = {
        // category: categoryId,
        audioFile: audioFile,
        // thumbnail: thumbnail,
      };
      console.log(audioData)
  
      // Append each property in the audioData object to FormData
      for (const key in audioData) {
        formData.append(key, audioData[key]);
      }
  
      const response = await axios.post('http://localhost:8080/api/v2/uploadfile', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log(response.data);
      console.log("audio updated successfully");
      // Handle success, e.g., show a success message to the user
    } catch (error) {
      console.error('Error uploading audio:', error);
      // Handle error, e.g., show an error message to the user
    }
    setCategoryId('')
    setAudioFile(null)
    setThumbnail(null)

  };

    const validateForm = () => {
    let isValid = true;
    const errors = {};

    // if (!categoryName) {
    //   errors.categoryName = 'Category is required.';
    //   isValid = false;
    // }

    // if (!tagName) {
    //   errors.tagName = 'Tag is required.';
    //   isValid = false;
    // }

    // if (!audioFile) {
    //   errors.audioFile = 'Audio file is required.';
    //   isValid = false;
    // }

    // if (!thumbnail) {
    //   errors.thumbnail = 'Thumbnail is required.';
    //   isValid = false;
    // }

    setErrors(errors);
    return isValid;
  };


    return (
        <div className="contain">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="bg-image" style={{ backgroundImage: "url('img/bg.jpg')" }}>
                            <div className="card-header">
                                <h6 className="text-center" style={{ fontSize:"30px" }}>licence file</h6>
                            </div>
                            <br></br>
                            <br></br>
                            <div className="card-body">
                            <form className='form-container' onSubmit={handleSubmit}>

             
                <div className='modal-body text-center'>
                     {/* -------------------------- 
                <select
                  className='form-control'
                  name='category'
                  value={categoryId}
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                <option value=''>Select Category</option>
                    {categories.map((category) => (
                     <option key={category.id} value={category.id}>
                    {category.categories}
                </option>
                ))}
               </select>
                  {errors.categoryId && <div className="error-message">{errors.categoryId}</div>}
                  {/* ----------------------- */}
                  <br />
                  <br />
                  <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                    Add New Audio File
                  </h5>
                  <input
                    type='file'
                    className='form-control'
                    placeholder='Choose Audio File'
                    name='audioFile'
                    onChange={(e) => setAudioFile(e.target.files[0])}
                  />
                  {errors.audioFile && <div className="error-message">{errors.audioFile}</div>}
                  <br />

                  {/* -----------------------------------
                  <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
                    Add Thumbnail
                  </h5>
                  <input
                    type='file'
                    className='form-control'
                    placeholder='Choose Thumbnail'
                    name='thumbnail'
                    onChange={(e) => setThumbnail(e.target.files[0])}
                  />
                  {errors.thumbnail && <div className="error-message">{errors.thumbnail}</div>}
                  <br />
                  // ------------------------------------------------  */}
                </div>
                <div className='modal-footer'>
                  <input
                    type='submit'
                    // name='but_upload'
                    value='Upload'
                    className='btn'style={{ backgroundColor:"#17a2b8",color:"White",fontWeight:"500" }}
                  />
                </div>
              </form>



                                </div>
                                <br></br>
                                <br></br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Licence