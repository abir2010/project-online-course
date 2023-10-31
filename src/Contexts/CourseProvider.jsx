import React, { createContext } from "react";
import useCourses from "../Hooks/useCourses";

export const AuthContext = createContext(); // using react context

const CourseProvider = ({ children }) => {
  const allContext = useCourses();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default CourseProvider;
