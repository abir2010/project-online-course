import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setCourses(data);
      });
  }, []);

  return {
    load,
    courses,
  };
};

export default useCourses;
