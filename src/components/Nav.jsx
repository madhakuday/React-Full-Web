import React from 'react';
import '../stylesheet/Nav.css';
function Nav() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ width: '95%' }}
      >
        <div class="container-fluid ">
          <a class="navbar-brand" href="#">
            Health Medicare
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div
            class="collapse navbar-collapse nav_space_bet "
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 ml-6 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">
                  About us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#services">
                  services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#testimonial">
                  testimonial
                </a>
              </li>
            </ul>
            <form class="d-flex flot-right">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
