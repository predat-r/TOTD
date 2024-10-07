import Image from "next/image";
import Input from "@/components/Input";
import UserProfileHeading from "@/components/UserProfileHeading";
import ProfilePageThoughts from "@/components/profilePageThoughts";
const ProfilePage = ({ params }: { params: { username: string } }) => {
  const username = params.username;
  return (
    <div className=" flex flex-col overflow-scroll items-center w-full h-full">
      <UserProfileHeading></UserProfileHeading>
      <div className="flex flex-row justify-center items-center rounded-full w-60 h-60 overflow-hidden mt-5">
        <Image
          src={"/placeholder.jpg"}
          width={300}
          height={300}
          alt="profile image"
        ></Image>
      </div>
      <h1 className="mt-10 text-2xl text-black font-semibold">
        Release your <span className="text-blue-600">controversial</span>,
        <span className="text-purple-600"> political</span> or{" "}
        <span className="text-cyan-600">random</span> thoughts to the world.
        Uncensored.
      </h1>
      <Input></Input>
      <ProfilePageThoughts username={username} />
      <div className="mt-5 w-full bg-blue flex flex-col gap-y-10 items-center">
        <h1 className="gradient-text text-5xl p-2">Live Thoughts</h1>
      </div>
    </div>
  );
};

export default ProfilePage;
