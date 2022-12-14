import React from 'react';

const Banner = () => {
    return (
         
        <div className="carousel mt-6  h-2/6">
  <div id="slide1" className="carousel-item relative w-full">
  <iframe className=' w-screen h-96'   src="https://www.youtube.com/embed/hpR5ycqEWQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <iframe className=' w-screen h-96'  src="https://www.youtube.com/embed/3Y25TTSrj9Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <iframe className=' w-screen h-96'  src="https://www.youtube.com/embed/JMMwCTc-IbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <iframe className=' w-screen h-96' src="https://www.youtube.com/embed/JMMwCTc-IbE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-4 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;