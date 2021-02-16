import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const ImgCarousel = () => {
  return (
    <div className='carousel-wrapper'>

      <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} dynamicHeight={true}>

        <div>
            <img 
            src='../image-01.jpg' 
            alt='vegetable stand'
            className='carousel'
            height={'950px'}
            />
        </div>
        <div>
            <img src='../image-02.jpg' 
            alt='green vegetables'
            className='carousel'
            height={'950px'}
            />
        </div>
        <div>
            <img src='../image-03.jpg' 
            alt='spoons with spices'
            className='carousel'
            height={'950px'}
            />
        </div>
        <div>
            <img src='../image-04.jpg' 
            alt='spoons with spices'
            className='carousel'
            height={'950px'}
            />
        </div>
        <div>
            <img src='../image-05.jpg' 
            alt='spoons with spices'
            className='carousel'
            height={'950px'}
            />
        </div>
        <div>
            <img src='../image-06.jpg' 
            alt='spoons with spices'
            className='carousel'
            height={'950px'}
            />
        </div>
        <div>
            <img src='../image-07.jpg' 
            alt='spoons with spices'
            className='carousel'
            height={'950px'}
            />
        </div>
    </Carousel>
</div>
  );
}

export default ImgCarousel;
