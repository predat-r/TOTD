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
      <p className="mt-4 text-lg">
        Release your
        <span className="text-indigo-600 font-bold">Controversial</span>,{" "}
        <span className="text-red-600 font-bold">Political</span> or{" "}
        <span className="text-blue-600 font-bold">Random</span> thoughts with
        the world. Uncensored.
      </p>
      <Input/>
    </div>
  );
}

export default page;
