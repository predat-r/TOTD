import { useUser } from "@clerk/nextjs";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
const Dropdown = () => {
  const [page, setPage] = useState("");
  const router = useRouter();
  const { user } = useUser();
  const handleRedirect = () => {
    if (user && page === "home") {
      router.push(`/user/${user.username}`);
    }
    else{
      router.push("/");
    }
  };
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.includes("user")) {
      setPage("profile");
    } else {
      setPage("home");
    }
  }, [pathname]);

  return (
    <div className="h-40 w-32 md:w-64 bg-[#AFAFFF] absolute right-6 top-28 rounded-md shadow-elevateLow flex flex-col justify-center items-center gap-y-5 md:gap-y-5 z-10">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-[#3E0A9E]  hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32 rounded-lg">
            Log In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="bg-[#3E0A9E]  hover:bg-[#5d1fcf]  text-white font-bold py-2 px-4 w-24 md:w-32 rounded-lg z-10">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <button
          onClick={() => {
            handleRedirect();
          }}
          className="bg-[#3E0A9E]  hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32 rounded-lg"
        >
          {page === "profile" ? "Home" : "Profile"}
        </button>
        <SignOutButton>
          <button className="bg-[#3E0A9E]  hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32 rounded-lg">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
};

export default Dropdown;
