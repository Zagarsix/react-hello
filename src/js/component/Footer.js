import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer class="footer-dark bg-dark text-center pt-3">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <p style={{color: "white"}}>{props.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string,
};

export default Footer;
