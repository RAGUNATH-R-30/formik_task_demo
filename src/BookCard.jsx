import React from "react";
import { LiaBookSolid } from "react-icons/lia";
import { FaBook } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
function BookCard({content}) {
  return (
    <div className="col-lg-12">
      <div className="card mb-3" style={{ maxWidth: "100%",height:152 }}>
        <div className="row g-0">
          <div className="col-md-2">
            <div
              style={{
                height: 150,
                width: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`${content.avatar}`}
                alt="Error"
                style={{ width: "100%", height: "100%", objectFit: "cover",borderTopLeftRadius:5,borderBottomLeftRadius:5}}
              />
            </div>
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title"><FaBook size={18}/>{` -${content.bookname}`}</h5>
              <p className="card-text">
              <FaPen size={18}/>
               {` -${content.authorname}`}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  {`ISBN Number: ${content.isbnnumber}`}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
