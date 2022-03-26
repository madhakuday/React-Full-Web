import React from 'react';
import '../stylesheet/Search.css';

function Search() {
  return (
    <>
      <div
        className="hero_search d-flex align-items-center justify-content-center"
        style={{ width: '95%' }}
      >
        <div className="search_manu ">
          <h1 class="fw-5  fs-3 text-white se_h1 ml-2">
            we have some good news
          </h1>

          <input
            type="text"
            class="inputs ml-2 mt-2 "
            placeholder="Enter your email"
          />
          <button class="btn buttons">Add</button>
        </div>
      </div>
    </>
  );
}

export default Search;
