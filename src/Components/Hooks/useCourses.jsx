import { useEffect, useState } from "react";

const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [features, setFeatures] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setCourses(data);
      });
  }, []);

  useEffect(() => {
    fetch("/features.json")
      .then((res) => res.json())
      .then((data) => {
        setLoad(false);
        setFeatures(data);
      });
  }, []);

  return {
    load,
    courses,
    features,
  };
};

export default useCourses;
