import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Mục tiêu
          </p>
          <p className="text-left mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto">
            Nâng cao nhận thức và khả năng tự chăm sóc sức khoẻ cho mọi người để giảm chi phí y
            tê, nâng cao chât lượng cuộc sông và góp phân xây dựng một xã hội khoẻ mạnh, hạnh phúc.
          </p>
        </div>
        <div className="lg:text-center pt-10">
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Hoạt động
          </p>
          <ul className='text-left mt-4 max-w-3xl text-xl text-gray-500 lg:mx-auto'>
            <li className='list-disc'>
              Tư vân, hướng dân phương pháp thanh lọc thân tâm, thải độc tô ra ngoài cơ thể.
            </li>
            <li className='list-disc'>
              Tư vân, hướng dân phương pháp ăn thực dưỡng, quân bình âm dương phù hợp với
              thể trạng và lứa tuổi.
            </li>
            <li className='list-disc'>
              Tư vân, hướng dân sử dụng các sản phẩm tăng chiêu cao cho trẻ em, phương pháp
              chữa bệnh không dùng thuôc.
            </li>
            <li className='list-disc'>
              Tư vân vê tâm soát ung thư; phương pháp ngăn ngừa và chữa bệnh ung thư băng thực
              dưỡng.
            </li>
          </ul>
          
        </div>

        {/* <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                    <img
                      className={`inline-block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div> */}
      </div>
    </div>
  );
};

export default Features;
