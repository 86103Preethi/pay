import React from 'react';
import bannerImg from '../../assets/banner.png';

const banner = () => {
  return (
    <div className="h-240 w-full mb-5">
        <img
          src={bannerImg}
          alt="QR Code"
          className="rounded-lg border"
        />
    </div>
  )
}

export default banner