import React from "react";

export const Card = () => {
    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 p-2">
            <div className="card" >               
                <img src="https://picsum.photos/500/325" className="card-img-top" alt="..." />   
                <div className="card-body">                   
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>                   
                </div>
            </div>
        </div>
    )

}


