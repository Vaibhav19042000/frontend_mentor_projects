import React, { useState } from "react";
import ThankYou from './ThankYou'

const Home = () => {
  const [data,setData] = useState('');
  const [submitted,setSubmitted] = useState(false);
  const handleClick = (number) =>{
     setData(number);
    
  }

  const handleSubmit = () =>{
     setSubmitted(true);
  }

  if(submitted){
    return <ThankYou rating = {data}/>
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-very-dark-blue">
      <div className="relative w-[700px] h-[600px] bg-dark-blue rounded-xl">
        <img
          src="/images/icon-star.svg"
          alt="star-image"
          className=" p-16"
        />
        <div className="p-4">
          <h1 className="text-4xl text-white mb-4">How did we do? </h1>
          <p className="text-light-grey mb-4">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <div className="flex justify-around mt-20">
            {[1, 2, 3, 4, 5].map((number) => (
              <span
                key={number}
                onClick={() => handleClick(number)}
                className={`w-12 h-12 flex items-center justify-center  border-2 border-custom-dark rounded-full text-light-grey cursor-pointer  ${
                  data === number
                    ? "bg-orange border-orange text-custom-dark"
                    : "bg-custom-dark hover:bg-white"
                }`}
              >
                {number}
              </span> 
            ))}
          </div>
          <div className="p-8 flex justify-around mt-5 ">
            <button
              onClick={handleSubmit}
              className="border-2 h-[40px] bg-orange border-orange rounded-full text-custom-dark w-full hover:bg-white hover:border-white"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
