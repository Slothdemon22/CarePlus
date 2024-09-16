import React from "react";

const Experience = () => {
  return (
    <>
      <div className="experience overflow-x-hidden font-gilroy">
        <div className="heading mb-6">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl sm:text-4xl text-[#252B61] font-bold mt-10 md:w-[700px] text-center">
              Our doctors and clinics have earned over{" "}
              <br className="hidden md:block" />
              <span className="text-center">5,000+ reviews on Google!</span>
            </h1>
          </div>
        </div>

        <div className="main w-full flex flex-col md:flex-row md:items-center md:justify-center">
          <div className="left w-full md:w-[50%] p-3">
            <div className="h-[250px] md:h-[300px] bg-[#F0DA69] flex rounded-3xl p-3">
              <div className="left-div w-[50%]">
                <div className="heading flex flex-col h-[70%] p-1 md:gap-2 md:p-2">
                  <h1 className="text-[#252B61] text-3xl md:text-5xl">
                    Nutrition and mental health.
                  </h1>
                  <p className="text-[#252B61] text-sm md:text-base mb-3">
                    The food we eat provides the nutrients that our bodies need to function properly.
                  </p>
                </div>
                <div className="play h-[30%] flex items-center ml-20 mt-4 md:m-6">
                  <img src="arroww.png" alt="" className="w-[45px] md:max-w-[50px]" />
                </div>
              </div>
              <div className="right-pic w-[50%]">
                <img src="Cart.png" alt="" className="h-full max-w-full object-contain mix-blend-multiply" />
              </div>
            </div>
          </div>
          <div className="right w-full md:w-[50%] p-3">
            <div className="h-[250px] md:h-[300px] rounded-3xl flex flex-col gap-4">
              <div className="upper-div h-[45%] bg-[#2C438A] rounded-3xl flex">
                <div className="h-full w-[60%] flex items-center m-4 md:pl-4">
                  <h1 className="text-white text-xl md:text-3xl">
                    Healthy Habits for A <br /> Happy Heart
                  </h1>
                </div>
                <div className="h-full w-[40%]">
                  <img src="Gift.png" alt="" className="max-w-full h-full object-contain mix-blend-multiply" />
                </div>
              </div>
              <div className="lower-div h-[50%] rounded-3xl flex gap-3">
                <div className="left w-[50%] h-full bg-[#A3DAC2] rounded-3xl flex justify-between">
                  <div className="w-[50%] m-3 flex flex-col justify-center">
                    <h1 className="text-[#252B61] text-3xl md:text-5xl">09</h1>
                    <p className="text-[#252B61] text-sm md:text-base">Years Experience.</p>
                  </div>
                  <div className="w-[50%]">
                    <img src="Shop.png" alt="" className="max-w-full h-full object-contain mix-blend-multiply" />
                  </div>
                </div>
                <div className="right w-[50%] h-full bg-red-300 rounded-3xl flex justify-between">
                  <div className="w-[50%] m-3 flex flex-col justify-center">
                    <h1 className="text-[#252B61] text-3xl md:text-5xl">150k</h1>
                    <p className="text-[#252B61] text-sm md:text-base">Happy Customers.</p>
                  </div>
                  <div className="w-[50%]">
                    <img src="Basket.png" alt="" className="max-w-full h-full object-contain mix-blend-multiply" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
