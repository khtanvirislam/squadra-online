import { FaArrowTrendUp } from "react-icons/fa6";
export const GetStarted = () => {
  return (
    <div>
      <div className="w-[120px] h-[120px] rounded-3xl bg-teal-300 p-[2px] cursor-pointer  ">
        <div className="flex flex-col bg-gradient-to-r from-slate-800 to-slate-900 w-[100%] h-[100%] rounded-3xl ">
          <div className="flex flex-row justify-center items-center pt-6 px-4 ">
            <p className="font-medium text-lg mr-2">
              <span className="text-white">Get</span>
            </p>
            <FaArrowTrendUp className="text-2xl" />
          </div>
          <p className="font-medium text-xl">
            <span className="px-5">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};
