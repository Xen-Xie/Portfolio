import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const date = new Date();
  const monthYear = date.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="border-t border-clean dark:border-ground px-6 py-2 font-outfit">
      <div className="mt-3 text-center text-xs text-clean dark:text-ground font-poppins font-semibold">
        <div className="text-center space-x-3 mb-2">
          <Link
            to="https://www.facebook.com/hemel.707"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="iconstyle" />
          </Link>

          <Link
            to="https://www.instagram.com/md.rakibulhasanhemel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="iconstyle" />
          </Link>
          <Link
            to="https://github.com/Xen-Xie"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="iconstyle" />
          </Link>

          <Link
            to="https://www.linkedin.com/in/hemel707/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="iconstyle" />
          </Link>
        </div>
        <p>Copyright © {monthYear} xenxie, designed by Xen Xie</p>
      </div>
    </div>
  );
}

export default Footer;
