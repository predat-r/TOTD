import { FaHeart } from "react-icons/fa";
import Image from "next/image";


const TopThoughtSkeleton
 = () => {
  return (
    <div className="h-[15vh] relative flex  justify-center items-center pt-2 sm:pt-4">
      <Image
        className="absolute top-0 rotate-[36deg] sm:rotate-[0deg] left-3 sm:left-[12vh] md:left-[48vh]"
        src={"/crown.png"}
        width={50}
        height={50}
        alt="crown-image"
      ></Image>
      <div className="bg-gray-300  w-full max-w-lg  p-4 rounded-2xl shadow-elevateLow flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <Image
              src={"/placeholder.jpg"}
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
          <p className="ml-4 text-lg font-semibold text-gray-700">Loading...</p>
        </div>

        <div className="flex items-center space-x-2">
          <FaHeart className="text-gray-400 text-2xl hover:text-red-500 cursor-pointer" />
          <p className="text-gray-500">0</p>
        </div>
      </div>
    </div>
  );
};

export default TopThoughtSkeleton
;
