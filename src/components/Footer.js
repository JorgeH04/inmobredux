import React from "react";
import Hero from "./Hero";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
       
  <footer class="site-footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="mb-5">
            <h3 class="footer-heading mb-4">Inmobiliaria de Lujo en Marbella. Essence of Marbella</h3>
            
         
            <p style="color:darkgrey">
                Tel: +34 951 356 691
              <br/>
                Email: info@realpropertyestate.com
            </p>
          </div>
  
          
          
        </div>
        <div class="col-lg-4 mb-5 mb-lg-0">
          <div class="row mb-5">
            <div class="col-md-12">
              <h3 class="footer-heading mb-4">Enlaces</h3>
            </div>
            <div class="col-md-6 col-lg-6">
              <ul class="list-unstyled">
                <li><a href="/index">Inicio</a></li>
                <li><a href="/nosotros">Nosotros</a></li>
  
               </ul>
            </div>
            <div class="col-md-6 col-lg-6">
              <ul class="list-unstyled">
                <li><a href="/ventas/1">Venta</a></li>
                <li><a href="/goldenvisa/1">Golden visa service</a></li>
               </ul>
            </div>
          </div>
  
  
        </div>
  
        <div class="col-lg-4 mb-5 mb-lg-0">
          <h3 class="footer-heading mb-4">Redes sociales</h3>
              <div>
                  <a href="https://www.instagram.com/realpropertyestate/" class="pl-3 pr-3"> <span class="icon-instagram"> </span></a>

                  <a href="https://www.facebook.com/realpropertyestate" class="pl-0 pr-3"><span class="icon-facebook"></span></a>
  
                  <a href="https://www.tiktok.com/@realpropertyesate?lang=es" class="pl-0 pr-3"><img src="https://res.cloudinary.com/dsk4fft6r/image/upload/c_scale,w_33/v1662743170/8e038e3951015c35b1a402fca9c37b9b_twtopx.jpg" /></a>

              </div>
        </div> 
  
  
        
      </div>
  
      <div class="row pt-5 mt-5 text-center">
        <div class="col-md-12">
          <p>
          Copyright  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script>document.write(new Date().getFullYear());</script> All rights reserved 

          </p>
        </div>
      </div>
  
    </div>
  </footer>
     
    </>
  );
}



