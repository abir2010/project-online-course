import { useContext } from "react";
import { AuthContext } from "../Contexts/CourseProvider";

const useHook = () => {
  return useContext(AuthContext); // using react context
};

export default useHook;
