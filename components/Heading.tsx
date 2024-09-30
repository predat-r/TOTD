import { SignedIn, SignedOut } from "@clerk/nextjs";
import Input from "./Input";
function Heading() {
  return (
    <div>
      <SignedOut>
        <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-7xl md:h-12 lg:h-24 text-center gradient-text leading-normal">
          Thought Of The Day
        </h1>
        <p className="text-center text-indigo-950  text-xl mb-14">
          Share your thoughts today, gone tomorrow
        </p>
      </SignedOut>

      <SignedIn>
        <div className="flex justify-center items-center">
          <div className="w-2/3 ">
            <p className="text-3xl gradient-text text-center mb-9">
              Share what&apos;s on your mind. No censor. No persistence. All
              thoughts are wiped after 24hrs.
            </p>
          </div>
        </div>
        <Input />
      </SignedIn>
    </div>
  );
}

export default Heading;
