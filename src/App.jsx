import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Cslider from "./Components/Cslider/Cslider";
import CourseProvider from "./Components/Contexts/CourseProvider";

function App() {
  return (
    <CourseProvider>
      <Navbar />
      <Banner />
      <Cslider />
      <Footer />
    </CourseProvider>
  );
}

export default App;
