import AmazingBenifit from "../Components/Home/AmazingBenifit";
import Brand from "../Components/Home/Brand";
import Hero from "../Components/Home/Hero";
import SystemOperate from "../Components/Home/SystemOperate";
import Navbar from "../Components/Shered/Navbar";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-purple-200">
        <Brand />
      </div>
      <div className="container mx-auto">
        <AmazingBenifit />
        <SystemOperate />
      </div>
    </div>
  );
};

export default Home;
