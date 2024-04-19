import React, { useState } from "react";

export default function Counter() {
  const [Count, setCount] = useState();
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-bgCounter bg-cover bg-no-repeat bg-center">
      <div className="w-[600px] h-[500px] backdrop-blur-md  rounded-2xl bg-gradient-to-tr from-white/10 via-green-300/10 to-black/50">
        <h1 className="text-6xl font-bold text-black text-center tracking-[2px] mt-10">
          Counter
        </h1>
        <p className="text-[150px] text-center text-black mt-7">0</p>
        <div className="flex items-center justify-center gap-8 mt-12 ">
          <button
            // onClick={increase}
            className=" text-xl text-white hover:text-black hover:border hover:border-white bg-black hover:bg-white font-bold rounded-md w-[120px] py-2 "
          >
            Increase
          </button>
          <button className=" text-xl text-white hover:text-black hover:border hover:border-white bg-black hover:bg-white font-bold rounded-md w-[120px] py-2">
            Decrease
          </button>
          <button className=" text-xl text-white hover:text-black hover:border hover:border-white bg-black hover:bg-white font-bold rounded-md w-[120px] py-2">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
