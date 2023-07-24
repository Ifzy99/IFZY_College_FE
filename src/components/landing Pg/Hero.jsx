import React from "react";

const Hero = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active next"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        className="next"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        className="next"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <img src="https://res.cloudinary.com/dakiyibak/image/upload/c_scale,h_600,q_auto:best,w_1900/v1685979345/building.jpg" className="d-block w-100 img-responsive img-fluid" alt="..." />
            <div className="carousel-capt d-flex flex-column  d-md-block">
                <div className="w-auto text-start  ">
                <h5 className="display-6 fw-bold text-light">WELCOME TO IFZY</h5>
                <p className="text-center">
                  The Hub of Knowledge and Innovation.  
                </p>
                </div>
            </div>
          </div>

          <div className="carousel-item coyg"  data-bs-interval="2000">
            <img src="https://res.cloudinary.com/dakiyibak/image/upload/c_scale,h_600,q_auto:best,w_1900/v1685979464/code.jpg" className="d-block w-100 img-fluid" alt="..." />
            <div className="carousel-capt d-md-block">
              <div className="w-auto text-start ">
              <h5 className="display-6 fw-bold text-light">LIVING SPRING OF KNOWLEDGE AND CREATIVITY</h5>
              <p className="text-center ">
               At IFZY, we are poised to create a unique institution commited to pursuit of academic innovation, skill-based training and a tradition of excellence in teaching, research and creativity.
              </p>
              </div>
            </div>
          </div>

          <div className="carousel-item"  data-bs-interval="2000">
            <img src="https://res.cloudinary.com/dakiyibak/image/upload/c_scale,h_600,q_auto:best,w_1900/v1685979229/school.jpg" class="d-block w-100 img-fluid" alt="..." />
            <div class="carousel-capt  d-md-block">
              <div class="w-auto text-start ">
              <h5 className="display-6 fw-bold text-light">CONDUCIVE ACADEMIC LEARNING ENVIROMENT</h5>
              <p className="text-center">
                  IFZY is a modern learning institution which offers both physical classess as well as online classes.
              </p>
            </div>
            </div>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default Hero;
