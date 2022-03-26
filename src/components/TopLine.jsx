import React from 'react';
import '../stylesheet/TopLine.css';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

function TopLine() {
  return (
    <>
      <div className="topline">
        <div className="number">
          <p>Emargins Call 789-112-455</p>
        </div>
        <div className="social">
          <ul>
            <small>Follow us :</small>
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default TopLine;
