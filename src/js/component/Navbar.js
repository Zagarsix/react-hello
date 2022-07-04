import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <a class="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//     <div className="container-fluid">
//         <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav">
//                 <li className="nav-item">
//                     <h5 className="nav-link" aria-current="page" href="#">Start Bootstrap</h5>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">About</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Services</a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Contact</a>
//                 </li>
//             </ul>
//         </div>
//     </div>
// </nav>
