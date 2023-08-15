import React from "react";
import { Slider } from "antd";

const Filters = ({ 
    searchTerm, 
    handleSearchChange, 
    handlePriceChange, 
    priceRange,
    selectedCity,
    handleCityChange 
}) => {
  return (

    <>





<div class="slide-one-item home-slider owl-carousel">
 <div class="site-blocks-cover overlay" style={{backgroundImage: `url("${"https://res.cloudinary.com/dd3uzxyfv/image/upload/v1672106872/hero1_wkue4r.jpg"}")`}}  data-aos="fade" data-stellar-background-ratio="0.5">
  <div class="container">
    <div class="row align-items-center justify-content-center text-center">
      <div class="col-md-10">
        <span class="d-inline-block bg-success text-white px-3 mb-3 property-offer-type rounded">For Rent</span>
        <h1 class="mb-2">871 Crenshaw Blvd</h1>
        <p class="mb-5"><strong class="h2 text-success font-weight-bold">$2,250,500</strong></p>
        <p><a href="#" class="btn btn-white btn-outline-white py-3 px-5 rounded-0 btn-2">See Details</a></p>
      </div>
    </div>
  </div>
</div>  


</div>


<div class="site-section site-section-sm pb-0">
<div class="container">
  <div class="row">
    <form class="form-search col-md-12">
      <div class="row  align-items-end">

        <div class="col-md-3">
          <label for="list-types">Listing Types</label>
          <div class="select-wrap">
            <span class="icon icon-arrow_drop_down"></span>
            <select name="list-types" id="list-types" class="form-control d-block rounded-0">
              <option value="">Condo</option>
              <option value="">Commercial Building</option>
              <option value="">Land Property</option>
            </select>
          </div>
        </div>


        <div class="col-md-3">
          <label for="offer-types">Offer Type</label>
          <div class="select-wrap">
            <span class="icon icon-arrow_drop_down"></span>
            <input 
              type="text"
              className="form-control"
              name="search"
              placeholder="Keyword"
              value={searchTerm}
              onChange={handleSearchChange}                       
             />  
        
          </div>
        </div>


        <div class="col-md-3">
          <label for="select-city">Select City</label>
          <div class="select-wrap">
            <span class="icon icon-arrow_drop_down"></span>
            <select 
               name="name"
               id="select-city" class="form-control d-block rounded-0"
               value={selectedCity}
               onChange={handleCityChange}
                >
                  <option value="todos">All Cities</option>
                  <option value="Marbella">Marbella</option>
                  <option value="Benahavis">Benahavis</option>
                  <option value="Andalucia">Nueva Andalucia</option>
                  <option value="Benahavis Los Flamingos">Benahavis Los Flamingos</option>
              </select>
 
          </div>
        </div>
        <div class="col-md-3">
               <Slider
                  range
                  min={0}
                  max={6000} 
                  defaultValue={priceRange} 
                  onChange={handlePriceChange} 
              />
          {/* <input type="submit" class="btn btn-success text-white btn-block rounded-0" value="Search"/> */}
        </div>
      </div>
    </form>
  </div>  






 
</div>
</div>



   </>
  );
};

export default Filters;