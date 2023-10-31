import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [features, setFeatures] = useState([]);
  const [load, setLoad] = useState(true);

  // fetching data from courses.json file
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setCourses(data);
      });
  }, []);

  // fetching data from features.json file
  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setFeatures(data);
      });
  }, []);

  // returning an object
  return {
    load,
    courses,
    features,
  };
};

export default useCourses;
