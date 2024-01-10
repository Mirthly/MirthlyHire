import { Link } from "react-router-dom";
import global from "../assets/global.png";

const HomePage = () => {
  return (
    <div>
      <div className="flex ">
        <div className="flex flex-col basis-1/2 items-center justify-center h-screen">
          <div className="flex flex-col gap-10 w-[60%] mx-auto">
            <h1 className="font-poppins font-bold text-6xl text-wrap ">
              Find Your Dream Job Here In One Place
            </h1>
            <div className="font-poppins text-2xl">
              Find jobs, create trackable resumes and enrich your application
            </div>
            <div className="flex gap-10">
              <Link to="/dashboard">
                <button className="shadow-lg px-4 py-2 text-2xl rounded-xl">
                  Hire
                </button>
              </Link>
              <button className="shadow-lg px-4 rounded-xl text-2xl py-2 ">
                Find
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <img
            className="w-[700px] h-[8 00px] ml-20"
            src={global}
            alt="global image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
