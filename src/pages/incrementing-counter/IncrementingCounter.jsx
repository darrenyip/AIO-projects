import React from "react";
import Incrementer from "./incrementer";
import styled from "styled-components";

function IncrementingCounter(props) {
  return (
    <div className="w-full h-screen bg-[#8e44ad] flex justify-center items-center">
      <div className="flex justify-center items-center gap-[20px]">
        {/* twitter */}
        <div className="flex flex-col gap-3">
          {/* <img src="" alt="" /> */}
          <div className="fill-white flex justify-center items-center h-[50px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="scale-125"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>
          <div className="my-0 mx-auto text-white text-[40px]">
            <Incrementer maxValue={12000} />
          </div>
          <div className="text-center text-white text-[24px]">
            Twitter Followers
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {/* <img src="" alt="" /> */}
          <div className="fill-white flex justify-center items-center h-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              width="48"
              viewBox="-35.20005 -41.33325 305.0671 247.9995"
            >
              <path
                d="M93.333 117.559V47.775l61.334 34.893zm136.43-91.742c-2.699-10.162-10.651-18.165-20.747-20.881C190.716 0 117.333 0 117.333 0S43.951 0 25.651 4.936C15.555 7.652 7.603 15.655 4.904 25.817 0 44.236 0 82.667 0 82.667s0 38.429 4.904 56.849c2.699 10.163 10.65 18.165 20.747 20.883 18.3 4.934 91.682 4.934 91.682 4.934s73.383 0 91.683-4.934c10.096-2.718 18.048-10.72 20.747-20.883 4.904-18.42 4.904-56.85 4.904-56.85s0-38.43-4.904-56.849"
                fill="#fff"
              />
            </svg>
          </div>
          <div className="my-0 mx-auto text-white text-[40px]">
            <Incrementer maxValue={300} />
          </div>
          <div className="text-center text-white text-[24px]">
            Youtube Subscribers
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {/* <img src="" alt="" /> */}
          <div className="fill-white flex justify-center items-center h-[50px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="scale-125"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </div>
          <div className="my-0 mx-auto text-white text-[40px]">
            <Incrementer maxValue={1200} />
          </div>
          <div className="text-center text-white text-[24px]">
            Twitter Followers
          </div>
        </div>
      </div>
    </div>
  );
}

export default IncrementingCounter;
