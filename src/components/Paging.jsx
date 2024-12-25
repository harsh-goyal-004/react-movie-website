import React from "react";

function Paging({ pageNo, setPageNo }) {
  return (
    <>
      <div className="mx-10 h-[1.5px] mt-10 bg-gray-700"></div>
      <div className=" flex mt-4 gap-10 text-xl mb-10 pb-10 justify-center">
        <button
          className="bg-black h-8 w-8 bg-opacity-75 text-white"
          onClick={() => {
            setPageNo((prev) => (prev === 1 ? 1 : prev - 1));
          }}
        >
          &#10094;
        </button>
        <p className="font-semibold">{pageNo}</p>
        <button
          className="bg-black h-8 w-8 bg-opacity-75 text-white"
          onClick={() => {
            setPageNo((prev) => prev + 1);
          }}
        >
          &#10095;
        </button>
      </div>
    </>
  );
}

export default Paging;
