import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
 

 
export default function Nav() {

return (
<>
<div class="site-loader"></div>
      <div class="site-wrap">
    
          <div class="site-mobile-menu">
            <div class="site-mobile-menu-header">
              <div class="site-mobile-menu-close mt-3">
                  <span class="icon-close2 js-menu-toggle"></span>
              </div>
            </div>
            <div class="site-mobile-menu-body"  ></div>
          </div>  
    
        <div class="site-navbar mt-4">
            <div class="container py-1">
              <div class="row align-items-center">
                <div class="col-8 col-md-8 col-lg-4">
                    <a href="/index">
                      <Link to="/">     
                      <img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_300/v1661526111/WhatsApp_Image_2022-08-26_at_11.53.36_AM_mgcm7z.jpg"  />
                      </Link>
                    </a>
                </div>
    
                <div class="col-4 col-md-4 col-lg-8">
                  <nav class="site-navigation text-right text-md-right" role="navigation">
    
                    <div class="d-inline-block d-lg-none ml-md-0 mr-auto py-3" ><a href="#" class="site-menu-toggle js-menu-toggle text-white" ><span class="icon-menu h3" ></span></a></div>
    
                    <ul class="site-menu js-clone-nav d-none d-lg-block">
                        <li class="active">
                            <Link to="/">Home</Link>
                        </li>
              
                        <li><a href="/goldenvisa">Golden visa service</a></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/properties">Properties</Link> </li>
                                
                        <li><Link to="/properties">Contact</Link> </li>
                    </ul>
                  </nav>
                </div>
    
    
              </div>
            </div>
          </div>
        </div>
 
  </>
         );
        }