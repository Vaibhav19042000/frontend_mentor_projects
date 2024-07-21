import React from 'react'


const ThankYou = ({rating}) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-very-dark-blue">
      <div className="p-10 w-[600px] h-[400px] bg-dark-blue rounded-xl">
        <div className='flex flex-col items-center'>
          <img
            src="/images/illustration-thank-you.svg"
            alt="star-image"
            className="mb-6"
          />
          <div className="border-2 border-orange text-center rounded-full py-2 px-4 mb-6">
            <p className="text-orange">You have selected {rating} / 5</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl text-white mb-4"> Thank you!</h1>
            <p className="text-light-grey text-center w-[300px]">
              We appreciate you taking the time to give a rating. If you ever
              need more support, don’t hesitate to get in touch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou
