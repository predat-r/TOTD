/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Input from "@/components/Input";
import UserProfileHeading from "@/components/UserProfileHeading";
import ProfilePageThoughts from "@/components/profilePageThoughts";
import UserProfileInput from "@/components/userProfileInput";
import { UserButton } from "@clerk/nextjs";

const ProfilePage = ({ params }: { params: { username: string } }) => {
  const username = params.username;
  return (
    <div className=" flex flex-col overflow-scroll items-center w-full h-full">
      <UserProfileHeading></UserProfileHeading>
      <div className="flex flex-row justify-center items-center rounded-full w-60 h-60 overflow-hidden mt-5">
        {/* <Image
          src={"/placeholder.jpg"}
          width={300}
          height={300}
          alt="profile image"
        ></Image> */}
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: {
                height: 150,
                width: 150,
              }
            }
          }}
        />
      </div>
      <UserProfileInput></UserProfileInput>
      <div className="mt-5 w-full bg-blue flex flex-col  gap-y-5 items-center">
        <h1 className="gradient-text text-5xl p-2 flex-shrink-0">
          Live Thoughts
        </h1>
        <ProfilePageThoughts username={username} />
      </div>
    </div>
  );
};

export default ProfilePage;
