import "./style.css";
import React from 'react'


function Footer() {
  return (
    <div className="wrapper ">
    <div className="main-footer " id="page-container">
      <div className="container-fluid" id="content-wrap">
        <div className="row bg-secondary" id="footer">
          <div className="col-1">
            <a
              href="https://github.com/Eryk1997"
              target="_blank"
              style={{ color: "white" }}
            >
              <i class="fab fa-github"></i>{" "}
            </a>
          </div>
          <div className="col-1">
            <a
              href="https://www.linkedin.com/in/eryk-janocha-9852b11ab/"
              target="_blank"
              style={{ color: "white" }}
            >
              <i class="fab fa-linkedin-in"></i>{" "}
            </a>
          </div>
         
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;
