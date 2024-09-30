import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/nextjs";
const Dropdown = () => {
  return (
    <div className="h-40 w-32 md:w-64 bg-[#AFAFFF] bg-opacity-80 absolute right-0 top-20 rounded-md shadow-elevateLow flex flex-col justify-center items-center gap-y-5 md:gap-y-10">
      <SignedOut>
        <SignInButton mode="modal">
          <button className="bg-[#3E0A9E] bg-opacity-80 hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32 rounded-lg">
            Log In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="bg-[#3E0A9E] bg-opacity-80 hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32 rounded-lg">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
      <SignOutButton >
          <button className="bg-[#3E0A9E] bg-opacity-80 hover:bg-[#5d1fcf] text-white font-bold py-2 px-4 w-24 md:w-32 rounded-lg">
            Sign Out
          </button>
        </SignOutButton>
      </SignedIn>
    </div>
  );
};

export default Dropdown;
