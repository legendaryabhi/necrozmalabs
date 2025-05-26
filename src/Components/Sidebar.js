import Link from "next/link";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen z-40 bg-black text-white p-6 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 w-64 md:w-1/5 flex flex-col justify-center`}
    >
      {/* Close Button (Only for Mobile) */}
      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-4 right-4 text-white text-2xl"
      >
        <FaTimes />
      </button>


      {/* Centered Navigation */}
      <ul className="space-y-6">
        <li>
          <Link href="/Nfuse" className="block p-2 hover:bg-gray-700 rounded">
            Nfuse
          </Link>
        </li>
        <li>
          <Link href="/ViewAI" className="block p-2 hover:bg-gray-700 rounded">
            ViewAI
          </Link>
        </li>
        <li>
          <Link href="/BuildY" className="block p-2 hover:bg-gray-700 rounded">
            Build Y
          </Link>
        </li>
        <li>
          <Link href="/Updates" className="block p-2 hover:bg-gray-700 rounded">
            Updates
          </Link>
        </li>
        <li>
          <Link href="/About" className="block p-2 hover:bg-gray-700 rounded">
            About Us
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
