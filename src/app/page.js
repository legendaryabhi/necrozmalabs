import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-2">
      <h1 className="md:text-4xl text-lg mt-16">
        Creating things to push the human race forward.
      </h1>

      {/* Top Section: One Big Card + Two Vertical Cards */}
      <div className="flex flex-col md:flex-row gap-6 mb-20 pt-16">
        {/* Big Card on Left */}
        <Link href="/Nfuse" className="md:w-4/5 w-full">
          <div className="w-full h-60 md:h-[550px] relative rounded-lg overflow-hidden">
            <Image src="/img1.jpeg" alt="Big Card" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-xl font-bold mt-4 text-center md:text-left">Project Nfuse</h2>
        </Link>

        {/* Two Equal-Height Cards on Right */}
        <div className="md:w-1/5 w-full flex flex-col gap-6">
          <Link href="/ViewAI" className="w-full">
            <div className="w-full h-48 md:h-60 relative rounded-lg overflow-hidden">
              <Image src="/img2.jpeg" alt="Card 1" layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-lg font-bold mt-4 text-center md:text-left">View AI</h2>
          </Link>

          <Link href="/BuildY" className="w-full">
            <div className="w-full h-48 md:h-60 relative rounded-lg overflow-hidden">
              <Image src="/img3.jpeg" alt="Card 2" layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-lg font-bold mt-4 text-center md:text-left">Build Y</h2>
          </Link>
        </div>
      </div>

      <h1 className="md:text-4xl text-lg md:mt-28 mb-20">The Stories we stand for:</h1>
      {/* Bottom Section: Three Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Link href="/Stories/why-we-started" className="flex flex-col">
          <div className="w-full h-40 relative rounded-lg overflow-hidden">
            <Image src="/img4.jpeg" alt="how-we-started" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-lg font-bold mt-4">Why We Started</h2>
        </Link>

        <Link href="/Stories/why-sustainable-energy-matters" className="flex flex-col">
          <div className="w-full h-40 relative rounded-lg overflow-hidden">
            <Image src="/img5.jpeg" alt="why-sustanible-energy-matters" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-lg font-bold mt-4">Why Sustainable Energy Matters</h2>
        </Link>

        <Link href="/Stories/how-we-work" className="flex flex-col">
          <div className="w-full h-40 relative rounded-lg overflow-hidden">
            <Image src="/img6.jpeg" alt="Card 5" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-lg font-bold mt-4">How We Work</h2>
        </Link>
      </div>
      <div className="w-full h-[50vh] bg-gray-900 flex flex-col items-center justify-center text-center mt-20 p-6">
        <h2 className="text-2xl md:text-4xl font-bold">Created for Engineers and Scientists</h2>
        <Link href="https://buildy.necrozmalabs.com/">
          <button className="mt-6 px-6 py-3 text-lg font-semibold bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-950 transition">
            Visit Build Y
          </button>
        </Link>
      </div>
      
    </div>
  );
}