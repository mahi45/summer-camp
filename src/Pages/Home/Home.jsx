import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Home = () => {
  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-12 items-center">
          <img
            src="https://i.ibb.co/dPsHyCp/Banner1.png"
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="space-y-4">
            <h1 className="text-3xl">hi</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              recusandae, omnis at optio architecto minus minima impedit commodi
              similique corrupti, voluptas totam sequi consectetur laborum culpa
              perferendis labore alias reprehenderit explicabo eligendi? Quo,
              voluptatem recusandae? Dolorem non at, repellat molestiae nisi
              quaerat praesentium autem, deleniti explicabo recusandae molestias
              iure soluta.
            </p>
            <button className="btn btn-accent mr-3">Button</button>
            <button className="btn btn-accent">Button</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-12 items-center">
          <img
            src="https://i.ibb.co/dPsHyCp/Banner1.png"
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="space-y-4">
            <h1 className="text-3xl">hi</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              recusandae, omnis at optio architecto minus minima impedit commodi
              similique corrupti, voluptas totam sequi consectetur laborum culpa
              perferendis labore alias reprehenderit explicabo eligendi? Quo,
              voluptatem recusandae? Dolorem non at, repellat molestiae nisi
              quaerat praesentium autem, deleniti explicabo recusandae molestias
              iure soluta.
            </p>
            <button className="btn btn-accent mr-3">Button</button>
            <button className="btn btn-accent">Button</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-12 items-center">
          <img
            src="https://i.ibb.co/dPsHyCp/Banner1.png"
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="space-y-4">
            <h1 className="text-3xl">hi</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              recusandae, omnis at optio architecto minus minima impedit commodi
              similique corrupti, voluptas totam sequi consectetur laborum culpa
              perferendis labore alias reprehenderit explicabo eligendi? Quo,
              voluptatem recusandae? Dolorem non at, repellat molestiae nisi
              quaerat praesentium autem, deleniti explicabo recusandae molestias
              iure soluta.
            </p>
            <button className="btn btn-accent mr-3">Button</button>
            <button className="btn btn-accent">Button</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-12 items-center">
          <img
            src="https://i.ibb.co/DMRsS5j/Banner4.png"
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="space-y-4">
            <h1 className="text-3xl">hi</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              recusandae, omnis at optio architecto minus minima impedit commodi
              similique corrupti, voluptas totam sequi consectetur laborum culpa
              perferendis labore alias reprehenderit explicabo eligendi? Quo,
              voluptatem recusandae? Dolorem non at, repellat molestiae nisi
              quaerat praesentium autem, deleniti explicabo recusandae molestias
              iure soluta.
            </p>
            <button className="btn btn-accent mr-3">Button</button>
            <button className="btn btn-accent">Button</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-12 items-center">
          <img
            src="https://i.ibb.co/FmGmh6M/Banner5.png"
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="space-y-4">
            <h1 className="text-3xl">hi</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              recusandae, omnis at optio architecto minus minima impedit commodi
              similique corrupti, voluptas totam sequi consectetur laborum culpa
              perferendis labore alias reprehenderit explicabo eligendi? Quo,
              voluptatem recusandae? Dolorem non at, repellat molestiae nisi
              quaerat praesentium autem, deleniti explicabo recusandae molestias
              iure soluta.
            </p>
            <button className="btn btn-accent mr-3">Button</button>
            <button className="btn btn-accent">Button</button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="grid grid-cols-2 gap-12 items-center">
          <img
            src="https://i.ibb.co/Xpy7T0W/Banner6.png"
            alt=""
            className="w-full object-cover h-full"
          />
          <div className="space-y-4">
            <h1 className="text-3xl">hi</h1>
            <p className="text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              recusandae, omnis at optio architecto minus minima impedit commodi
              similique corrupti, voluptas totam sequi consectetur laborum culpa
              perferendis labore alias reprehenderit explicabo eligendi? Quo,
              voluptatem recusandae? Dolorem non at, repellat molestiae nisi
              quaerat praesentium autem, deleniti explicabo recusandae molestias
              iure soluta.
            </p>
            <button className="btn btn-accent mr-3">Button</button>
            <button className="btn btn-accent">Button</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Home;
