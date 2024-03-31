import React from 'react'

function Createbook({modalclose}) {
  return (
    <>

    <div className="col-lg-4 mt-3">
     <h3>Create Book</h3>
    <div style={{ fontFamily: "sans-serif", fontSize: 14 }}>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Author Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            ISBN Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Publication Date
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
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
      
    </>
  )
}

export default Createbook