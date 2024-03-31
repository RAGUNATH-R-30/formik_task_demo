import React from "react";

function AuthorCard({ content }) {
  return (
    <div className="col-lg-4">
      <div className="card mt-3" style={{ width: "18rem", height: 350 }}>
        <div className="card-body">
          <div className="row ">
            <div className="col ">
              <div className="mb-2"
                style={{
                  height: 110,
                  width: 110,
                  borderRadius: 100,
                  backgroundColor:"green"
                }}
              >
                <img src={`${content.avatar}`} alt="" style={{borderRadius:100,objectFit:"cover",width:"100%",height:"100%",justifyContent:"center",alignItems:"center"}} />
              </div>
            </div>
          </div>
          <h5 className="card-title">{`${content.name}`}</h5>
          <span className="card-subtitle mb-2 text-body-secondary" style={{fontSize:15}}>{`${content.birthdate}`}</span>
          <p className="card-text">{`${content.biography}`}</p>
        </div>
      </div>
    </div>
  );
}

export default AuthorCard;
