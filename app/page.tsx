import Buttonbox from "@/components/buttonbox";
import Titlebox from "@/components/titlebox";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-[100%] inline-flex flex-col items-center pt-[44px] pr-[39px] pb-[207.644px] pl-[41px] gap-[70px]">
      <Titlebox />
      <Image
        src={"/985CFBE7-24EF-46C3-B6FC-333315AE32A1.png"}
        width={774.5}
        height={283.4}
        alt={"cover image"}
      />
      <Buttonbox />
    </main>
  );
}
