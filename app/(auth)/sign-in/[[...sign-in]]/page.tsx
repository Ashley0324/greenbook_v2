import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return(
    <div className="h-full flex flex-row">
      <div className="basis-1/2 bg-[#222222] flex items-center text-green-400 justify-center flex-col">
        <div className="text-heading1-bold">
          ✨
        </div>
        <div className="text-body-normal text-white">
          From DAOs to Network State
        </div>
        <div className="text-heading1-bold">
          GREENBOOK:
        </div>
        <div className="text-heading1-bold">
          Free, Connect, Flow
        </div>
      </div>
      <div className="basis-1/2 h-full w-full bg-[#80FC03] flex items-center justify-center">
        <SignIn />
      </div>
    </div>
  );
}
