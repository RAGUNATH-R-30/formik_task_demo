import React from 'react'

function Createauthor() {
  return (
 
    <div className="col-lg-4 mt-3">
     <h3>Create Author</h3>
    <div style={{ fontFamily: "sans-serif", fontSize: 14 }}>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Birth Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Short Biography
          </label>
          <textarea
            type="text"
            rows="4"
            className="form-control"
            id="exampleInputPassword1"
            style={{resize:"none"}}
          />
        </div>


        <div className="row ">
          <div className="col">
            <button
              type="submit"
              className="btn btn-primary "
              style={{ backgroundColor: "#20236D", border: "none" }}
              onClick={() => { }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Createauthor