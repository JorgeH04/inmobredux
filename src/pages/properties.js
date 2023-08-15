import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProperties } from "../redux/actions";
import Pagination from "../components/Pagination";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";

const MainList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]); 
  const [selectedCity, setSelectedCity] = useState("todos"); 

  const ITEMS_PER_PAGE = 2;
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);

  useEffect(() => {
    dispatch(getProperties());
  }, [dispatch]);



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const filteredProperties = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredByPrice = filteredProperties.filter(
    (property) => property.price >= priceRange[0] && property.price <= priceRange[1]
  );

  const filteredByCity = selectedCity === "todos" ? filteredByPrice : filteredByPrice.filter(
    (property) => property.name.toLowerCase() === selectedCity.toLowerCase()
  );

  const pageData = filteredByCity.slice(startIndex, endIndex);

 
  return (
    <>




 <Filters 
     searchTerm={searchTerm} 
     handleSearchChange={handleSearchChange}
     priceRange={priceRange}
     handlePriceChange={handlePriceChange}
     selectedCity={selectedCity}
     handleCityChange={handleCityChange}
  />

 <div class="site-section site-section-sm bg-light">
      <div class="container">
        <div class="row mb-5">
          {pageData.map((post) => (
          <div class="col-md-6 col-lg-4 mb-4">
            <div class="property-entry h-100">
                  <Link to={`property/${post._id}`}>
                      <img src={post.imageuno} alt="" class="img-fluid"/>
                    </Link>
             
             
              <div class="p-4 property-body">
                 
                <h2 class="property-title">{post.name} </h2>
                <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span>{post.title}</span>
                <strong class="property-price text-primary mb-3 d-block text-primary">€ enstock</strong>
             
                <ul class="property-specs-wrap mb-3 mb-lg-0">

                  <li>
                        <span class="property-specs-number">
                            <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />
                          Beds: {post.color}</span> 
                  </li>
                  <br/>

                  <li>
 
                    <span class="property-specs-number">
                        <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />
                        Bath: {post.colorstock}</span>
                    
                  </li>
                 <br/>
                  
                  <li>
 
                      <span class="property-specs-number">
                          <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />

                        m2 built: {post.talle}</span>
                      
                  </li>

                  <br/>

                  <li>
 
                    <span class="property-specs-number">
                        <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />

                      m2 Plot:{post.enstock} </span> 
                  </li>
                  
                </ul>

              </div>
            </div>
          </div>
          ))}
        </div>
    
       




     <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProperties.length / ITEMS_PER_PAGE)}
        onPageChange={handlePageChange}
      />



   </div>
 </div>
    </>
  );
};

export default MainList; 