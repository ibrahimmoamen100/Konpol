import React from "react";

function Map() {
  return (
    <div className="w-full h-auto ">
      <div className="container m-auto flex justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90617.12075097894!2d39.220174976040695!3d21.365143706160605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3c9de92c5b481%3A0xca3f1fae7e7de629!2sKhumrah%2022524%2C%20Saudi%20Arabia!5e0!3m2!1sen!2seg!4v1689491866493!5m2!1sen!2seg"
          width="800"
          height="650"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
