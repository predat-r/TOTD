import Image from "next/image";
import LikeButton from "./likeButton";


type TopThoughtProps = {
  id: number;
  text: string;
  likes: string;
};

const TopThought =  ({ id, text, likes }: TopThoughtProps) => {

  return (
    <div className="h-[16vh] relative flex justify-center items-center pt-2 sm:pt-4 mb-10">
      <Image
        className="absolute top-0 rotate-[36deg] sm:rotate-[0deg]   sm:left-[12vh] md:left-[43vh] "
        src={"/crown.png"}
        width={50}
        height={50}
        alt="crown-image"
      ></Image>
      <div className="bg-[#f0f4ff] max-w-xl   w-full  p-4 rounded-2xl shadow-elevateLow flex items-center justify-between h-24">
        <div className="flex items-center">
          <div className="w-12 h-12 overflow-hidden rounded-full">
            <Image
              src="/placeholder.jpg"
              alt="Profile"
              width={48}
              height={48}
              className="rounded-full object-cover"
            />
          </div>
          <p className="ml-4 text-lg font-semibold text-gray-700">{text}</p>
        </div>
        <LikeButton id={id} likeCount={likes}></LikeButton>
      </div>
    </div>
  );
};

export default TopThought;
