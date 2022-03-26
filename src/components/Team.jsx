import React, { Component } from 'react';
import { FcPlus } from 'react-icons/fc';

const Team = () => {
  return (
    <>
      <div
        class="row row-cols-1 row-cols-md-3 mt-5 "
        style={{ width: '95%' }}
        id="team"
      >
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Our Team
          </h1>
        </div>
        <div class="col nt-3 mb-3">
          <div class="card card_img">
            <img
              src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
              class=" img-thumbnail "
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title ">Founder/chief Surgeon </h3>
              <h5 class="card-title d-flex  align-items-center just">
                Chase Franklin <FcPlus />
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as
              </p>

              <button class="btn button">Read more</button>
            </div>
          </div>
        </div>

        <div class="col nt-3 mb-3">
          <div class="card">
            <img
              src="https://img.freepik.com/free-photo/smiling-asian-woman-physician-white-coat_9083-2472.jpg?size=626&ext=jpg"
              class=" img-thumbnail"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title ">Founder/chief Surgeon </h3>
              <h5 class="card-title d-flex  align-items-center just">
                Chase Franklin <FcPlus />
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as
              </p>

              <button class="btn button">Read more</button>
            </div>
          </div>
        </div>
        <div class="col nt-3 mb-3">
          <div class="card">
            <img
              src="https://media.istockphoto.com/photos/portrait-of-male-doctor-in-white-coat-and-stethoscope-standing-in-picture-id1327024466?b=1&k=20&m=1327024466&s=170667a&w=0&h=vcw4Exhv4pkR8fMVLNXhNESaKq1HbYwJ1iElLlQBxI0="
              class=" img-thumbnail"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title ">Founder/chief Surgeon </h3>
              <h5 class="card-title d-flex  align-items-center just">
                Chase Franklin <FcPlus />
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as
              </p>

              <button class="btn button">Read more</button>
            </div>
          </div>
        </div>
        <div class="col nt-3 mb-3">
          <div class="card">
            <img
              src="https://media.istockphoto.com/photos/male-medical-professional-is-confident-in-studio-picture-id1201439096?k=20&m=1201439096&s=170667a&w=0&h=aYuJxV4SkvfMRjuacN_UeOn4t4aixa08wpPZxvBa82w="
              class=" img-thumbnail"
              alt="..."
            />
            <div class="card-body">
              <h3 class="card-title ">Founder/chief Surgeon </h3>
              <h5 class="card-title d-flex  align-items-center just">
                Chase Franklin <FcPlus />
              </h5>
              <p class="card-text">
                This is a longer card with supporting text below as
              </p>

              <button class="btn button">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
