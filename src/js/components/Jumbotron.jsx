import React from "react";

export const Jumbotron = () => {
    return (
        <div className="bg-light text-dark py-4">
            <div className="container-fluid py-5 text-start">    
                <h1 className="card-text fw-bold">A Warm Welcome!</h1>
                <p>Welcome to my first landing page with React</p>
                <a href="#" className="btn btn-primary">Call to action!</a>
             </div>       
        </div>
    )
}
