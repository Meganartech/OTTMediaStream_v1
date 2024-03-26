import React from 'react'

const Licence = () => {
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

                            <div className='col-lg-6'>
                      {/* <label >sample</label> */}
                      <input type="file" accept="file/*" onChange={""} />
                      <button className='text-center btn btn-info' onClick={""}>Upload</button>
                    </div>

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