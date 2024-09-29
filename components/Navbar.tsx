import { TfiAlignLeft } from "react-icons/tfi";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between bg-regal-blue p-4 border rounded-xl mb-20">
        <div className="text-white text-2xl">
          <TfiAlignLeft size={30}/>
        </div>

        <div className="text-white text-xl font-semibold">LOGO</div>

        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
