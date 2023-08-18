import React from "react";

const Titlebox = () => {
  return (
    <div
      style={{ fontFamily: "Hanken Grotesk" }}
      className="flex flex-row justify-center"
    >
      <div className="flex flex-col w-[508px] gap-[59px]">
        <h1 className="text-center text-[72px] leading-[130%]">
          H1
          <br />
          Title
        </h1>
        <h2 className="text-center text-5xl">H2 or H3</h2>
        <div className="flex h-[82.7px] justify-between">
          <div className="btn-secondary">
            <p className="non-italic text-[34px] font-normal leading-[130%]">
              Button 2
            </p>
          </div>
          <div className="btn-secondary">
            <p className="non-italic text-[34px] font-normal leading-[130%]">
              Button 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Titlebox;
