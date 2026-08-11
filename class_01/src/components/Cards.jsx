import React from "react";

function Cards(props) {

    return (

        <>
            <div className="card bg-dark text-white mx-4 mt-4" style={{width:"300px",border:"1px solid black"}}>
                <img className="card-img-top" src={props.image_path} alt="Card image" style={{width: "100%"}}/>
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">Laptop Description: This is a simple laptop description.</p>
                        <a href="/" className="btn btn-outline-primary fw-bold me-4">Buy Now</a>
                        <a href="/" className="btn btn-outline-success fw-bold ms-4">Add to cart</a>
                    </div>
            </div>
        </>

    );
}
export default Cards;