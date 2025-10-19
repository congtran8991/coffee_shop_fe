'use client';

import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

function SimpleSlider() {
  const settings: Settings = {
    dots: true,
    customPaging: (_i) => (
      <div className="custom-dot"></div> // Custom dots
    ),
    dotsClass: 'slick-dots custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };
  return (
    <div className="xl:container">
      <Slider {...settings}>
        <div style={{ width: '100%' }}>
          <Image
            src="https://hcm.fstorage.vn/images/2025/02/z6354760025523_12445341681b2738b00b305e3265cc74-20250226105255.jpg"
            width={500}
            height={500}
            alt="Picture"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div style={{ width: '100%' }}>
          <Image
            src="https://hcm.fstorage.vn/images/2025/02/z6354760025523_12445341681b2738b00b305e3265cc74-20250226105255.jpg"
            width={500}
            height={500}
            alt="Picture"
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
