import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ImgCarousel = () => {
  return (
    <div className='carousel-wrapper'>
      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} dynamicHeight={true} height='100px'>
        <div>
            <img 
            src='../image-01.jpg' 
            alt='vegetable stand'
            className='carousel'
            />
        </div>
        <div>
            <img src='../image-02.jpg' 
            alt='green vegetables'
            className='carousel'
            />
        </div>
        <div>
            <img src='../image-03.jpg' 
            alt='spoons with spices'
            className='carousel'
            />
        </div>
    </Carousel>
</div>
  );
}

export default ImgCarousel;
