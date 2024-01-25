import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="mx-auto container xl:px-10 lg:px-6 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="w-9/12 flex flex-col sm:gap-10 gap-8 justify-center mt-4 h-12">
          <div className="flex flex-col items-center justify-center text-3xl">
            <h1>QUỸ TỪ THIỆN SỨC KHỎE LÀ SỐ 1</h1>
            <h1>ONE HEALTH FOUNDATION</h1>
          </div>
          <div className='w-full grid grid-cols-2 gap-5' >
            <div>
              <div>{sections.name}</div>
              <div>{sections.address}</div>
              <div>{sections.hotline}</div>
            </div>
            <div>
              <div>{socialMedia.website}</div>
              <div>Youtube: {socialMedia.youtube}</div>
            </div>
          </div>
        </div>

        <div className="mt-6">
        </div>
      </div>
    </div>
  );
};
export default About;
