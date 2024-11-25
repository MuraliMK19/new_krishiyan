import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Preloader from "../Components/Preloader";
import Home1 from '../pages/Home1'
import Home2 from '../pages/Home2'
import Mission_vision from "./Mission_vision";
import We_are_best from "./We_are_best";
import Cultivating from "./Cultivating";
import Tech from "./Tech";
import Team from "./Team";
import CardCarousel from "./CardCarousel";

const Home = () => {
  return (
    <>
      <Preloader />
      <Navbar />
      <Home1 />
      <Home2 />
      <Mission_vision />
      <We_are_best />
      <Cultivating />
      <Tech />
      <Team />
      <CardCarousel />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
