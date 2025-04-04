import React from "react";

export const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-navbar">
        <div className="container">
          <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link text-white" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-text-grey" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-text-grey" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link custom-text-grey" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
