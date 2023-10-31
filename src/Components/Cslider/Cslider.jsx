import React from "react";
import Course from "./../Course/Course";
import useHook from "../../Hooks/useHook";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./Cslider.css";

import { Pagination } from "swiper/modules";

export default function Cslider() {
  const { load, courses } = useHook();

  return (
    <>
      <div id="courses">
        <div className="relative">
          <h1 class="text-3xl text-black text-center mb-8 mt-8">
            <span className="text-indigo-600">Courses</span> We Offer
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {load ? (
            <div className="flex justify-center align-middle ">
              <div className="w-16 h-16 border-4 border-indigo-600 border-dashed rounded-full animate-spin dark:border-indigo-600"></div>
            </div>
          ) : (
            courses.map((course) => (
              <SwiperSlide>
                <Course key={course.id} course={course} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </>
  );
}
