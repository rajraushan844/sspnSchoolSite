import React from "react";
import PropTypes from "prop-types";

export function FeaturedImageGallery({ images }) {
  const [active, setActive] = React.useState(images[0] || "");

  return (
    <div className="grid gap-4 m-10 mb-20">
      <div>
        <img
          className="lg:h-auto w-full lg:w-3/5 mx-auto max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active}
          alt="Featured"
        />
      </div>
      <div className="grid grid-cols-5 lg:grid-cols-8 gap-2 lg:w-3/5 mx-auto space-between">
        {images.map((imgelink, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(imgelink)}
              src={imgelink}
              className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
              alt="Gallery thumbnail"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

FeaturedImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FeaturedImageGallery;
