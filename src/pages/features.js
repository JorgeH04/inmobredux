// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { setData } from "../redux/actions"; // Importa la acción setData desde el archivo de acciones


//  //   const initialUrl = `https://backre.herokuapp.com/properties`;

// const API_URL = `http://localhost:4000/ofertauno/uno`;

// const ProductList = ({ featured, setData }) => {
//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, [setData]);

//   return (
//     <>
 

//      <section class="featured-properties-area section-padding-100-50">
//         <div class="container">
//             <div class="row">
//                 <div class="col-12">
//                     <div class="section-heading wow fadeInUp">
//                         <h2>Featured Properties</h2>
//                         <p>Suspendisse dictum enim sit amet libero malesuada feugiat.</p>
//                     </div>
//                 </div>
//             </div>

//             <div class="row">

//              {featured.map(post => (
//                 <div class="col-12 col-md-6 col-xl-4" key={post._id}>
//                     <div class="single-featured-property mb-50 wow fadeInUp" data-wow-delay="600ms">
//                         <div class="property-thumb">
//                         <Link to={`featured/${post._id}`}>
//                              <img src={post.imageuno} alt=""/>
//                             </Link>

//                             <div class="tag">
//                                 <span>For Sale</span>
//                             </div>
//                             <div class="list-price">
//                                 <p>${post.price || 0}</p>
//                             </div>
//                         </div>
//                         <div class="property-content">
//                             <h5>{post.title || "default title"}</h5>
//                             <p class="location"><img src="img/icons/location.png" alt=""/>Upper Road 3411, no.34 CA</p>
//                             <p>Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.</p>
//                             <div class="property-meta-data d-flex align-items-end justify-content-between">
//                                 <div class="new-tag">
//                                     <img src="img/icons/new.png" alt=""/>
//                                 </div>
//                                 <div class="bathroom">
//                                     <img src="img/icons/bathtub.png" alt=""/>
//                                     <span>2</span>
//                                 </div>
//                                 <div class="garage">
//                                     <img src="img/icons/garage.png" alt=""/>
//                                     <span>2</span>
//                                 </div>
//                                 <div class="space">
//                                     <img src="img/icons/space.png" alt=""/>
//                                     <span>120 sq ft</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 ))}
//             </div>
//         </div>
//     </section>
 

 
//     </>
//   );
// }


// const mapStateToProps = (state) => ({
//   featured: state.data, // Mapea el estado 'data' de Redux a la prop 'featured'
// });

// const mapDispatchToProps = (dispatch) => ({
//   setData: (data) => dispatch(setData(data)), // Mapea la acción setData a la prop 'setData'
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ProductList);





import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFeatured } from "../redux/actions";  

const ProductList = () => {
  const featured = useSelector((state) => state.featured);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeatured()); 
  }, [dispatch]);

  return (
    <>



<div class="container">
  <div class="row">
      <div class="col-md-12">
        <h1 >Destacados</h1>
     </div>
  </div>
</div>




<div class="site-section site-section-sm bg-light">
 <div class="container">
  <div class="row mb-5">
     {featured.map((post) => (
    <div class="col-md-6 col-lg-4 mb-4">
      <div class="property-entry h-100">
       <Link to={`featured/${post._id}`}>
          <div class="offer-type-wrap">
           </div>
          <img src={post.imageuno} alt="Image" class="img-fluid"/>
          </Link>
        <div class="p-4 property-body">
             
            <h2 class="property-title">{post.name}</h2>
            <span class="property-location d-block mb-3"><span class="property-icon icon-room"></span> {post.title || "default title"}</span>
            <strong class="property-price text-primary mb-3 d-block text-primary">€ {post.price || 0}</strong>
            <ul class="property-specs-wrap mb-3 mb-lg-0" >
                <li type="circle">
                 

                    <span class="property-specs-number" >
                      <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />
                      Beds: {post.color}</span> 
              </li>
              <br/>
          
              
              <li>
          
                <span class="property-specs-number">
                    <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />
                    Bath: {post.colorstock} </span>
                
              </li>
             <br/>
              
              <li>
               
                  <span class="property-specs-number">
                      <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />
                    m2 built: {post.talle} </span>
                  
              </li>

              <br/>

              <li>
         
                <span class="property-specs-number">
                    <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_30/v1662653194/images_pw3ywc.png" />
                  m2 Plot: {post.enstock} </span> 
              </li>


              
            </ul>

          </div>
        </div>
      </div>
      ))}


  </div>
</div>
</div>

 
    


    </>
  );
};

export default ProductList;