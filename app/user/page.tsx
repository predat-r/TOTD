import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import Input from "@/components/Input";
async function page() {
  const user = await currentUser();
  const fullName = user?.username;
  const image = user?.imageUrl;
  return (
    <div className="flex flex-col items-center justify-center mt-[-20px]">
      <div className="text-5xl mb-4">{fullName}</div>
      {image && (
        <div className="relative w-64 h-64 rounded-full overflow-hidden mb-4">
          <Image
            src={image}
            alt={fullName || "User Image"}
            fill
            className="object-cover"
          />
        </div>
      )}
      <h1 className="mt-10 text-2xl text-black font-semibold">
        Release your <span className="text-blue-600">controversial</span>,
        <span className="text-purple-600"> political</span> or{" "}
        <span className="text-cyan-600">random</span> thoughts to the world.
        Uncensored.
      </h1>
      <Input />
    </div>
  );
}

export default page;
