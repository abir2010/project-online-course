import React from "react";
import Course from "./../Course/Course";
import useHook from "../Hooks/useHook";

export default function Cslider() {
  const { load, courses } = useHook();
  if (courses) console.log("true");
  return (
    <div id="container" class="flex flex-col my-16">
      <h1 class="text-3xl text-gray-900 text-center mb-4  font-bold">
        <span className="text-indigo-600">Courses</span> We Offer
      </h1>
      <div id="scrolling-content" class="flex overflow-x-scroll">
        {load ? (
          <div className="flex justify-center align-middle ">
            <div className="w-16 h-16 border-4 border-indigo-600 border-dashed rounded-full animate-spin dark:border-indigo-600"></div>
          </div>
        ) : (
          courses.map((course) => <Course key={course.id} course={course} />)
        )}
      </div>
    </div>
  );
}
