import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" text-white mt-40 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/About" className="hover:text-gray-400">About Us</Link></li>
            <li><Link href="mailto:abhinav@necrozmalabs.com" className="hover:text-gray-400">Press</Link></li>
            <li><Link href="mailto:abhinav@necrozmalabs.com" className="hover:text-gray-400">Contact</Link></li>
            <li><Link href="/researchers/abhinavsharma" className="hover:text-gray-400">Researchers</Link></li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 md:mt-8 mb-4">Founder</h3>
          <ul className="space-y-2">
            <li><Link href="https://www.linkedin.com/in/abhinavsharma07/" className="hover:text-gray-400">LinkedIn</Link></li>
            <li><Link href="https://x.com/abhinavsharma_x" className="hover:text-gray-400">X</Link></li>
            <li><Link href="mailto:abhinav@necrozmalabs.com" className="hover:text-gray-400">E-Mail</Link></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Projects</h3>
          <ul className="space-y-2">
            <li><Link href="/Nfuse" className="hover:text-gray-400">Nfuse</Link></li>
            <li><Link href="/BuildY" className="hover:text-gray-400">Build Y</Link></li>
            <li><Link href="/ViewAI" className="hover:text-gray-400">View AI</Link></li>
            <li><Link href="/openresearchlaboratory" className="hover:text-gray-400">Open Research Laboratory</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><Link href="https://x.com/Necrozmalabs" className="hover:text-gray-400">X</Link></li>
            <li><Link href="https://www.linkedin.com/company/necrozmalabs" className="hover:text-gray-400">LinkedIn</Link></li>
            <li><Link href="https://github.com/Necrozmalabs" className="hover:text-gray-400">Github</Link></li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 md:mt-8 mb-4">Build Y Social</h3>
          <ul className="space-y-2">
            <li><Link href="https://x.com/buildY_HQ" className="hover:text-gray-400">X</Link></li>
            <li><Link href="https://www.linkedin.com/company/build-y" className="hover:text-gray-400">LinkedIn</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer Section */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        &copy; 2025 Necrozma Labs, All Rights Reserved.
      </div>
    </footer>
  );
}
