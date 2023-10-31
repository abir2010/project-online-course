import React from "react";
import Button from "./../Button/Button";
import { motion } from "framer-motion";

export default function Course(props) {
  const { id, name, image, des, price, duration, rating } = props.course;
  return (
    <div className="relative">
      <div class="h-auto px-4 flex-shrink-0 ">
        <div class="cursor-pointer rounded-xl p-3 shadow-lg hover:shadow-xl">
          {/* image section */}
          <div class="relative flex items-end overflow-hidden rounded-xl">
            <img src={image} className="h-48" alt="wallpaper" />

            <div class="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <span class="ml-1 text-sm text-slate-400">{rating}/5</span>
            </div>
          </div>
          {/* description section */}
          <div class="mt-1 p-2">
            <h2 class="text-slate-700">{name}</h2>
            <p class="mt-1 text-sm text-slate-400">{des}</p>
            <div class="mt-3 flex items-end justify-between">
              <p>
                <span class="text-lg font-bold text-indigo-600">${price}</span>
                <span class="text-sm text-slate-400"> | {duration} weeks</span>
              </p>
              {/* icon section */}
              <div class="group inline-flex rounded-xl bg-gray-200 p-2 hover:bg-indigo-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4  text-gray-500 group-hover:text-indigo-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
              </div>
            </div>{" "}
            <br />
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
