import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { useLocation } from 'react-router-dom';

const Userplayer = () => {

  const [videoUrl, setVideoUrl] = useState('');
  const location = useLocation();
  const id = localStorage.getItem('items');
  const get = location.state ? location.state.get : null; // Check if location.state exists
  
  useEffect(() => {
    console.log("EditVideo=" + id);
    
    const fetchAudio = async () => {
      if (get) { // Ensure get exists before using it
        console.log(get.id);
        // Fetch data using get...
      } else {
        console.log("No 'get' data found in the state.");
      }
    };
    fetchAudio();
  }, [get]);


  return (<div className="video-player">
  <div class="work_user">
{/* <div class="row"> */}
<div class="work_user">
        <div class="row">
            <div className='log-user' style={{ width: '100%', height: '100%' }}>
            <ReactPlayer 
  style={{ width: '100%', height: '100%' }} // Set both width and height to 100%
  controls={true}
  url={`http://localhost:8080/api/play/${id}`} // Use backticks for string interpolation
  config={{
    file: {
      attributes: {
        controlsList: 'nodownload'
      }
    }
  }}
/>

</div>
</div>
</div>
</div>
</div>
// </div>
);
}

export default Userplayer