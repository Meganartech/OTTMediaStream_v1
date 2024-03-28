// import axios from 'axios';
// import React, { useState } from 'react';
// import Navbar from './navbar';
// import Sidebar from './sidebar';
// // import '../csstemp/addVideo.css';
// import { Link } from 'react-router-dom';
// const AddVideo = () => {
//   // const [categoryName, setCategoryName] = useState('');
//   // const [tagName, setTagName] = useState('');
//   // const [userId, setUserId] = useState('');
//   // // const [file, setFile] = useState(null);
//   // const [categories, setCategories] = useState([]);
//   // const [tags, setTags] = useState([]);
//   // const [users, setUsers] = useState([]);
//   // const [thumbnail, setThumbnail] = useState(null);
//   // const name = sessionStorage.getItem('username');

//   // useEffect(() => {
//   //   // ------------------------------ Admin Functions  -----------------------------------------
//   //   const fetchData = async () => {
//   //     try {
//   //       const categoriesResponse = await axios.get('http://localhost/mediareact/src/php/GetCategories.php');
//   //       setCategories(categoriesResponse.data);

//   //       const tagsResponse = await axios.get('http://localhost/mediareact/src/php/GetTags.php');
//   //       setTags(tagsResponse.data);

//   //       const usersResponse = await axios.get('http://localhost/mediareact/src/php/GetUsers.php');
//   //       setUsers(usersResponse.data);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };
//   //   fetchData();
//   //   const fetchData_u = async () => {
//   //     try {
//   //       const categoriesResponse = await axios.get('http://localhost/z/src/php/GetCategories.php');
//   //       setCategories_u(categoriesResponse.data);

//   //       const tagsResponse = await axios.get('http://localhost/mediareact/src/php/GetTags.php');
//   //       setTags_u(tagsResponse.data);

//   //       const usersResponse = await axios.get('http://localhost/mediareact/src/php/GetUsers.php');
//   //       setUsers_u(usersResponse.data);
//   //     } catch (error) {
//   //       console.error(error);
//   //     }
//   //   };

//   //   fetchData_u();
//   // }, []);
//   // const generateVideoTitle = () => {
//   //   const fileName = file ? file.name : 'Untitled Video';
//   //   return fileName;
//   // };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData();
//   //   formData.append('videoTitle', generateVideoTitle());
//   //   formData.append('categoryName', categoryName);
//   //   formData.append('tagName', tagName);
//   //   formData.append('userId', userId);
//   //   formData.append('file', file);
//   //   formData.append('thumbnail', thumbnail);
//   //   axios.post('http://localhost/mediareact/src/php/AddVideo.php', formData)
//   //     .then((response) => {
//   //       console.log(response.data);
//   //       setCategoryName('');
//   //       setTagName('');
//   //       setUserId('');
//   //       setFile(null);
//   //       setThumbnail(null);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });
//   // };
//   // // ------------------------------ User Functions  -----------------------------------------
//   // const [categoryName_u, setCategoryName_u] = useState('');
//   // const [tagName_u, setTagName_u] = useState('');
//   // const [userId_u, setUserId_u] = useState('');
//   // const [file_u, setFile_u] = useState(null);
//   // const [categories_u, setCategories_u] = useState([]);
//   // const [tags_u, setTags_u] = useState([]);
//   // const [user_u, setUsers_u] = useState([]);
//   // const [thumbnail_u, setThumbnail_u] = useState(null);

//   // const generateVideoTitle_u = () => {
//   //   const fileName = file_u ? file_u.name : 'Untitled Video';
//   //   return fileName;
//   // };

//   // const handleSubmit_u = (e) => {
//   //   e.preventDefault();
//   //   const formData = new FormData();
//   //   formData.append('videoTitle', generateVideoTitle_u());
//   //   formData.append('categoryName', categoryName_u);
//   //   formData.append('tagName', tagName_u);
//   //   formData.append('userId', userId_u);
//   //   formData.append('file', file_u);
//   //   formData.append('thumbnail', thumbnail_u);

//   //   axios.post('http://localhost/mediareact/src/php/AddVideo.php', formData)
//   //     .then((response) => {
//   //       console.log(response.data);
//   //       setCategoryName_u('');
//   //       setTagName_u('');
//   //       setUserId_u('');
//   //       setFile_u(null);
//   //       setThumbnail_u(null);
//   //     })
//   //     .catch((error) => {
//   //       console.error(error);
//   //     });

//   // };
//   const [file, setFile] = useState(null);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('video', file);

//       const response = await axios.post('http://localhost:8010/api/postit', formData, {
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgress(progress);
//         }
//       });

//       console.log('Upload successful!', response.data);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };


//   return (
//     <div id="content-wrapper" class="d-flex flex-column" style={{ marginLeft: "13rem" }}>
//       <div className='container-fluid px-4'>
//         <Navbar />
//         <Sidebar />
//         <h1 className="mt-4 text-white">Add Video</h1>
//         <ol className="breadcrumb mb-4">
//           <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
//           </li>
//           <li className="breadcrumb-item active">Add Video</li>
//         </ol>
//         <div className='row justify-content-center'>
//           <div className='col-lg-12'>

//             <div className='card shadow-lg border-0 rounded-lg mt-5'>
//               <div className='card-header'>
//                 <h2 className='text-center'>Add Movie</h2>
//                 <hr />
//               </div>
//               <div className='card-body'>
//                 <form className='form-container'>
//                   {/* <div className='modal-header bg-info'>
//                       <h5 className='modal-title' id='exampleModalLongTitle'>
//                         Add New Video
//                       </h5>
//                     </div> */}
//                   <div className='modal-body text-center'>
//                     {/* <select
//                         className='form-control'
//                         name='categoryName'
//                         value={categoryName}
//                         onChange={(e) => setCategoryName(e.target.value)}
//                       >
//                         <option value=''>Select Category</option>
//                         {categories.map((category) => (
//                           <option key={category.category_id} value={category.category_name}>
//                             {category.category_name}
//                           </option>
//                         ))}
//                       </select> */}
//                     <br />

//                     {/* <select
//                         className='form-control'
//                         name='tagName'
//                         value={tagName}
//                         onChange={(e) => setTagName(e.target.value)}
//                       >
//                         <option value=''>Select Tag</option>
//                         {tags.map((tag) => (
//                           <option key={tag.tag_id} value={tag.tag_name}>
//                             {tag.tag_name}
//                           </option>
//                         ))}
//                       </select> */}
//                     <br />

//                     {/* <select
//                         className='form-control'
//                         name='userId'
//                         value={userId}
//                         onChange={(e) => setUserId(e.target.value)}
//                       >
//                         <option value=''>Select User ID</option>
//                         {users.map((user) => (
//                           <option key={user.id} value={user.id}>
//                             {user.id}
//                           </option>
//                         ))}
//                       </select> */}
//                     <br />

//                     <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
//                       Add New Video
//                     </h5>
//                     <input type="file" className='form-control' placeholder='Choose File' accept="video/*" onChange={handleFileChange} />
//                     {/* <input
//                         type='file'
//                         className='form-control'
//                         placeholder='Choose File'
//                         accept="video/*"
//                         name='file'
//                         onChange={handleFileChange}
//                       /> */}
//                     <br />
//                     {/* // <input type="file" accept="video/*" onChange={handleFileChange} /> */}


//                     {/* <h5 className='modal-title modal-header bg-info' id='exampleModalLongTitle'>
//                         Add Thumbnail
//                       </h5>
//                       <input
//                         type='file'
//                         className='form-control'
//                         placeholder='Choose Thumbnail'
//                         name='thumbnail'
//                         onChange={(e) => setThumbnail(e.target.files[0])}
//                       />
//                       <br /> */}
//                   </div>
//                   <div className='modal-footer'>
//                   <button onClick={handleUpload}>Upload</button>
//                     {/* <button onClick={handleUpload}>Upload</button> */}
//                     {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}
//                   </div>
//                 </form>
//               </div>
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddVideo;
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './navbar';
import Sidebar from './sidebar';
import { Link } from 'react-router-dom';
import Employee from './Employee';
import "../css/Sidebar.css";
const AddVideo = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('video', file);

      const response = await axios.post('http://localhost:8080/api/postit', formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        }
      });

      console.log('Upload successful!', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };
  const [Movie_name, setMovie_name] = useState('');
  const changeMovie_name = (event) => {
    const newValue = event.target.value;
    setMovie_name(newValue); // Updating the state using the setter function
  };
  const [Tags, setTags] = useState('');
  const changeTags = (event) => {
    const newValue = event.target.value;
    setTags(newValue); // Updating the state using the setter function
  };
  const [Description, setDescription] = useState('');
  const changeDescription = (event) => {
    const newValue = event.target.value;
    setDescription(newValue); // Updating the state using the setter function
  };
  

  const save = (e) => {
    e.preventDefault();
    let Addvideo = { title: Movie_name, tags: Tags, description: Description};
    console.log("employee =>"+JSON.stringify(Addvideo));
    Employee.setVideo(Addvideo).then(res => {
      // handleUpload();
      setMovie_name('');
      setTags('');
      setDescription('');
    })
  }

  return (

    <div id="content-wrapper" class="d-flex flex-column samp" style={{ marginLeft: "13rem" }}>
        <Sidebar />
      <div className='container-fluid'>
      
        <div>
          {/* <h1 className="mt-4 text-white">Add Video</h1> */}
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item"><Link to="/Dashboard">Dashboard</Link>
            </li>
            <li className="breadcrumb-item active">Add Video</li>
          </ol>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className="card shadow-lg border-0 rounded-lg mt-5" style={{ marginLeft: "0px", marginRight: "0px",minWidth: "100%" }} >
                <div className='card-header'>
                  <h2 className='text-center'>Add Movie</h2>
                </div>
                <div className='card-body'>
                  {/* <form className='form-container'> */}
                  <div className='modal-body '>
                    <div className='row'>
                    <div className='col-lg-6'>
                      <label >Movie_name</label>
                    <input
                      type="text"
                      name="Movie_name"
                      // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                      className="form-control"
                      onChange={changeMovie_name}
                      value={Movie_name}
                    />
                    </div>
                    <div className='col-lg-6'>
                      <label >Tags</label>
                    <input
                      type="text"
                      name="Tags"
                      // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                      className="form-control"
                      onChange={changeTags}
                      value={Tags}
                    />
                    </div>
                    </div>
                    <br></br>
                    <div className='row'>
                    <div className='col-lg-6'>
                      <label >Description</label>
                    <input
                      type="text"
                      name="Description"
                      // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                      className="form-control"
                      onChange={changeDescription}
                      value={Description}
                    />
                    </div>
                    {/* <div className='col-lg-6'>
                      <label >Name</label>
                    <input
                      type="text"
                      name="confirmPassword"
                      // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                      className="form-control"
                      onChange={""}
                      value={"categoryName"}
                    />
                    </div>*/}
                    </div> 
                    {/* <br></br>
                    <input
                      type="text"
                      name="confirmPassword"
                      // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                      className="form-control"
                      onChange={''}
                      value={'categoryName'}
                    /> */}
                    <br></br>
                    {/* <input
                      type="text"
                      name="confirmPassword"
                      // className={`form-control ${errors.confirmPassword ? 'error' : ''}`}
                      className="form-control"
                      onChange={''}
                      value={'categoryName'}
                    /> */} 
                    <br></br>
                    <input type="file" accept="video/*" onChange={handleFileChange} />
                    <button className='text-center btn btn-info' onClick={save}>Add_Details</button>{/*handleUpload*/}&nbsp;&nbsp;
                    <button className='text-center btn btn-info' onClick={handleUpload}>Upload</button>{/**/}&nbsp;&nbsp;
                    {/* <button className='text-center btn btn-info' > */}
                    <Link to="/admin/Watch" className="btn btn-info">Play</Link>
                    {/* </button> */}
                    {uploadProgress > 0 && <p>Upload Progress: {uploadProgress}%</p>}

                  </div>

                  {/* </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;




