import React, { useState } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          {data.length ? (
            data.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6" style={{ marginBottom: "20px" }}>
                <div className="card" id={item.id} style={{ width: "100%", height: "auto" }}>
                  <img src={item.image} className="card-img-top" style={{ height: "350px", objectFit: "contain" }} alt="..." />
                  <div className="card-body" style={{ height: "auto" }}>
                    <Link to={`/productDetails/${item.id}`} className="btn card-title-btn">
                      <h5 className="card-title">{item.title}</h5>
                      <h3 className="card-price">₹ {item.price}</h3>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p className="no-records-found">No records found</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
