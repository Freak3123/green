import React from 'react';

function Navbar(){
    return (<section id="Navbar"><nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Green Circle</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link nav-link-pad" href="/">Home</a>
          <a class="nav-link nav-link-pad" href="/">Dump it!</a>
          <a class="nav-link nav-link-pad" href="/">News</a>
          <a class="nav-link nav-link-pad" href="/">Articles</a>
          <a class="nav-link nav-link-pad" href="/">About</a>
        </div>
      </div>
    </div>
  </nav></section>);
}
export default Navbar;