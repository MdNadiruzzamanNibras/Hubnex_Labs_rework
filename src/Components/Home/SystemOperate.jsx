import upload from "../../assets/images/systemOperate/Frame 48095633.png";
import signUp from "../../assets/images/systemOperate/signUp.png";
import rewards from "../../assets/images/systemOperate/rewards.png";
const SystemOperate = () => {
  return (
    <div className="my-32">
      <h1 className="text-4xl my-10 text-custom-purple text-center">
        <span className="font-bold">How Our System</span>{" "}
        <span className="font-medium">Operates</span>
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-96 h-64 pl-4 relative">
          {" "}
          <h2 className="mt-10 text-xl font-bold">Upload Documents</h2>
          <img className="absolute ml-[270px] mt-[-68px]" src={upload} alt="" />
          <p className="w-80 mt-10">
            Shortlist the most qualified candidate and upload their details for
            the top companies
          </p>
        </div>
        <div className="w-96 bg-purple-300 m-0 pl-4 h-64  relative">
          <h2 className="mt-10 text-xl font-bold">Sign Up</h2>

          <p className="w-80 mt-10">
            Follow the link below to sign up and get access of the current job
            postings
          </p>

          <img
            className=" absolute ml-[270px] mb-[-200px]"
            src={signUp}
            alt=""
          />
        </div>
        <div className="w-96 h-64 pl-4 ">
          <div className="flex justify-between">
            {" "}
            <h2 className="mt-10 text-xl font-bold">Get Rewards</h2>
            <div>
              <img src={rewards} alt="" />
            </div>
          </div>

          <p className="w-80">
            As soon as the candidate gets selected you get your benefits
          </p>
        </div>
      </div>
    </div>
  );
};

export default SystemOperate;
