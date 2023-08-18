import Image from "next/image";
import React from "react";

const Buttonbox = () => {
  return (
    <div
      style={{ fontFamily: "Hanken Grotesk" }}
      className="flex flex-col w-[700px] h-[460px] items-center justify-center gap-[48.5px]"
    >
      <div className="flex w-[707px] justify-between">
        <div className="btn-primary">
          <Image width={39} height={45} src={"/chat.svg"} alt={"chat"} />
          <p className="text-[34px] font-normal leading-[130%]">
            Button
            <br />
            (Hover)
          </p>
        </div>
        <div className="btn-primary">
          <Image width={39} height={45} src={"/face.svg"} alt={"facebook"} />
          <p className="text-[34px] font-normal leading-[130%]">
            Button
            <br />
            Button
          </p>
        </div>
        <div className="btn-primary">
          <Image
            width={39}
            height={45}
            src={"/instagram.svg"}
            alt={"instagram"}
          />
          <p className="text-[34px] font-normal leading-[130%]">Button</p>
        </div>
      </div>
      <div className="flex w-[707px] justify-between">
        <div className="btn-primary">
          <Image
            width={39}
            height={45}
            src={"/linkedin.svg"}
            alt={"linkedin"}
          />
          <p className="text-[34px] font-normal leading-[130%]">
            Button
            <br />
            Button
          </p>
        </div>
        <div className="btn-primary">
          <Image
            width={39}
            height={45}
            src={"/discordsmall.svg"}
            alt={"discord"}
          />
          <p className="text-[34px] font-normal leading-[130%]">Button</p>
        </div>
        <div className="btn-primary">
          <Image
            width={39}
            height={45}
            src={"/telegram.svg"}
            alt={"telegram"}
          />
          <p className="text-[34px] font-normal leading-[130%]">Button</p>
        </div>
      </div>
    </div>
  );
};

export default Buttonbox;
