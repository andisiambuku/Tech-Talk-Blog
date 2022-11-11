import React from 'react'
import "./Cards.css";


function Cards({title, image, category, description}) {


  return (

      <div className="col" id="allCard">
      <div className="card" style={{ width: 18 + "rem" }}>
        <img src={image} alt="" className="image" />
        <div className="card-body"></div>
        <div className="card__info">
          <h2>Title:{title}</h2>
          <h5>Catgory:{category}</h5>
          <h4>Description:{description}</h4>
          <div>
            {/* <button
              id="button"
              onClick={() => {
                alert("Your Product Has Been Added to Cart");
              }}
            >
              Add to Cart
            </button> */}
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cards
