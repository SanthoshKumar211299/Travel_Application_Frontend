import React from 'react'
import GalleryImages from './GalleryImages'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
const MasonryGalleryImages = () => {
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
        <Masonry gutter="1rem">
          {GalleryImages.map((item, index) => (
            <img
            className='masonry__img'
              src={item}
              key={index}
              alt=""
              style={{ width: "100%", display: "block", borderRadius: "10px" }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
}

export default MasonryGalleryImages
