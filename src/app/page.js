import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-12">
      <h1 className="md:text-4xl text-lg mt-16">
        Creating things to push the human race forward.
      </h1>

      {/* Top Section: One Big Card + Two Vertical Cards */}
      <div className="flex flex-col md:flex-row h-screen gap-6 mb-40 pt-16">
        {/* Big Card on Left */}
        <Link href="/Nfuse" className="md:w-4/5 flex flex-col">
          <div className="w-full min-h-[300px] md:h-full relative rounded-lg overflow-hidden">
            <Image src="/img1.jpeg" alt="Big Card" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-xl font-bold mt-4">Project Nfuse</h2>
        </Link>

        {/* Two Equal-Height Cards on Right */}
        <div className="md:w-1/5 flex flex-col gap-4 h-full">
          <Link href="/ViewAI" className="flex flex-col flex-1">
            <div className="w-full min-h-[150px] md:h-full relative rounded-lg overflow-hidden">
              <Image src="/img2.jpeg" alt="Card 1" layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-lg font-bold mt-4">View AI</h2>
          </Link>

          <Link href="BuildY" className="flex flex-col flex-1">
            <div className="w-full min-h-[150px] md:h-full relative rounded-lg overflow-hidden">
              <Image src="/img3.jpeg" alt="Card 2" layout="fill" objectFit="cover" />
            </div>
            <h2 className="text-lg font-bold mt-4 ">Build Y</h2>
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
          <h2 className="text-lg font-bold mt-4">Why Sustanible Energy Matters</h2>
        </Link>

        <Link href="/Stories/how-we-work" className="flex flex-col">
          <div className="w-full h-40 relative rounded-lg overflow-hidden">
            <Image src="/img6.jpeg" alt="Card 5" layout="fill" objectFit="cover" />
          </div>
          <h2 className="text-lg font-bold mt-4">How We Work</h2>
        </Link>
      </div>
    </div>
  );
}
