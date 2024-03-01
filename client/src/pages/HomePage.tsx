import { Link } from "react-router-dom";
import global from "../assets/global.png";

const HomePage = () => {
  return (
    <div>
      <div className="flex px-32">
        <div className="flex flex-col basis-1/2 items-center justify-center h-screen">
          <div className="flex flex-col gap-10 w-[80%] mx-auto">
            <h1 className="font-poppins font-bold text-5xl text-wrap ">
              Find Your Dream Job Here In One Place
            </h1>
            <div className="font-poppins text-2xl">
              Find jobs, create trackable resumes and enrich your application
            </div>
            <div className="flex gap-10">
              <Link to="/dashboard">
                <button className="shadow-lg px-4 py-2 text-2xl rounded-xl flex gap-2 items-center">
                  <div>Find</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </Link>
              <button className="shadow-lg px-4 bg-black text-white rounded-xl text-2xl py-2 flex gap-2 items-center">
              <div>Hire</div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-screen">
          <img
            className="w-[500px] h-[600px] ml-20"
            src={global}
            alt="global image"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
