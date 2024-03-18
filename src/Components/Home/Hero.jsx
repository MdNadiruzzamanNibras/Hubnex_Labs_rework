import click from "../../assets/images/hero/click.png";
import main from "../../assets/images/hero/main.png";
import mask from "../../assets/images/hero/mask.png";

const Hero = () => {
  return (
    <div className="grid grid-cols-12 lg:grid-cols-2 gap-1">
      <div className="mt-10">
        <h1 className="text-6xl text-custom-purple">
          {" "}
          <span className="font-extrabold">
            Power Up Your Hiring
          </span> <br /> <span>with Rework .</span>
        </h1>
        <p className="text-lg mt-5">
          Empower your business with cutting-edge A.I. technology, simplified
          processes, and top-tier <br /> talent connections. Rework is your
          strategic partner in redefining how you hire{" "}
        </p>
        <button className="rounded-xl my-10 px-10 py-3 text-xl bg-custom-purple text-white">
          Book A Demo
        </button>
        <div className="text-custom-purple flex items-center">
          <img src={click} alt="" /> <p className="ml-3">No credit Required</p>
        </div>
        <div className="text-custom-purple my-3 flex items-center">
          <img src={click} alt="" />{" "}
          <p className="ml-3">Streamlined Recruitment Process</p>
        </div>
      </div>
      <div className="flex justify-end mr-6">
        <div className="">
          <div className="bg-custom-purple p-3 rounded absolute mt-[220px] ml-[-220px] text-white">
            <div className="flex items-center">
              <div className="bg-custom-lavender flex justify-center items-center w-16 h-16">
                <img src={mask} alt="" className="" />
              </div>
              <h1 className="pl-3">
                <span className="text-2xl font-bold">+10K</span> <br />{" "}
                <span className="text-lg font-light">Candidates Hired</span>
              </h1>
            </div>
          </div>
          <div>
            <img
              className="w-[450px] h-[450px] rounded-full relative"
              src={main}
              alt=""
            />
          </div>
          <div className="bg-custom-purple p-2 absolute z-10 mt-[-75px] ml-[-70px] text-white">
            <div className="flex items-center">
              <div className="bg-custom-lavender flex justify-center items-center w-16 h-16">
                <img src={mask} alt="" className="" />
              </div>
              <h1 className="pl-3">
                <span className="text-2xl font-bold">+10K</span> <br />{" "}
                <span className="text-lg font-light">Candidates Hired</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
