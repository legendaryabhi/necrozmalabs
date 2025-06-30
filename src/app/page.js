"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="text-white w-full p-10 md:p-20 min-h-screen bg-black overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mb-20 " style={{ height: "60vh" }}>
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl mt-20 md:mt-0 md:text-5xl leading-snug">
            Solving<br />World`s biggest problems<br /> with Technology
          </h1>
          <p className="text-lg mt-6">Making Earth Liveable again.</p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="/imagebanner.png"
            alt="Hero"
            className="rounded-lg shadow-lg object-cover max-h-[500px] mx-auto"
          />
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full py-20">

        <div className="w-full h-[50vh] bg-gray-900 flex flex-col items-center justify-center text-center  rounded-xl shadow-lg mb-40 mt-20 md:mt-0 p-8">
          <h2 className="text-2xl md:text-4xl font-bold">
            Necrozma Labs Research Ecosystem
          </h2>
          <Link href="/necrozma-labs-ecosystem">
            <button className="mt-6 px-6 py-3 text-lg font-semibold bg-gray-800 text-white rounded-lg hover:bg-gray-950 transition">
              Created for researchers, by researchers
            </button>
          </Link>
        </div>

        <h1 className="text-2xl md:text-4xl mb-10">Our Projects:</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Big Project */}
          <Link href="/openresearchlaboratory" className="md:w-4/5 w-full">
            <div className="relative h-60 md:h-[550px] rounded-lg overflow-hidden group">
              <Image
                src="/img1.jpeg"
                alt="Open Research Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-xl sm:text-3xl font-semibold text-center px-4">
                  We Redefined the Research...
                </p>
              </div>
            </div>
            <h2 className="text-xl font-bold mt-4 text-center md:text-left">
              Open Research Laboratory
            </h2>
          </Link>

          {/* Right Two Smaller Projects */}
          <div className="md:w-1/5 w-full flex flex-col gap-6">
            <Link href="/Nfuse">
              <div className="relative h-48 md:h-60 rounded-lg overflow-hidden group">
                <Image
                  src="/img2.jpeg"
                  alt="Nfuse "
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    Creating Unlimited Sustainable Energy
                  </p>
                </div>
              </div>
              <h2 className="text-lg font-bold mt-4 text-center md:text-left">
                Project Nfuse
              </h2>
            </Link>

            <Link href="/BuildY">
              <div className="relative h-48 md:h-60 rounded-lg overflow-hidden group">
                <Image
                  src="/img3.jpeg"
                  alt="Build Y"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold text-center px-4">
                    Innovating the way we build
                  </p>
                </div>
              </div>
              <h2 className="text-lg font-bold mt-4 text-center md:text-left">
                Build Y
              </h2>
            </Link>
          </div>
        </div>

        {/* Stories Section */}
        <h1 className="text-2xl md:text-4xl mt-28 mb-10">
          The Stories we stand for:
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              href: "/Stories/why-we-started",
              src: "/img4.jpeg",
              title: "Why We Started",
            },
            {
              href: "/Stories/why-sustainable-energy-matters",
              src: "/img5.jpeg",
              title: "Why Sustainable Energy Matters",
            },
            {
              href: "/Stories/how-we-work",
              src: "/img6.jpeg",
              title: "How We Work",
            },
          ].map((story) => (
            <Link key={story.href} href={story.href} className="flex flex-col">
              <div className="relative h-40 rounded-lg overflow-hidden">
                <Image
                  src={story.src}
                  alt={story.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg font-bold mt-4">{story.title}</h2>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        

        {/* Placeholder Section */}
        <div className=" flex mt-20 flex-col">
          <h2 className="text-white text-2xl md:text-4xl mb-20">Research Areas:</h2>

          <div className="px-4 md:px-12 py-8">
            <h2 className="text-white text-2xl md:text-4xl mb-6">Clean Energy</h2>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Image */}
              <img
                src="/susbanner.png"
                alt="image"
                className="w-full md:w-[60vw] px-10 h-auto rounded-lg"
              />

              {/* Text Content */}
              <div className="flex-1 flex flex-col justify-center items-start">
                <h2 className="text-xl md:text-3xl text-white">
                  Our Mission: Clean Energy for a Better World
                </h2>

                <hr className="w-full border-gray-600 my-4" />

                <span className="text-base md:text-lg text-gray-300 mt-2">
                  We are Using AI to Lead the Change
                </span>

                <hr className="w-full border-gray-600 my-4" />

                <p className="text-base md:text-lg text-gray-300">
                  Project Nfuse: Our Flagship Initiative
                </p>

                <a
                  href="/Nfuse"
                  className="mt-6 px-6 py-2 border border-white text-white bg-black hover:bg-gray-900 transition rounded-lg"
                >
                  Know More
                </a>
              </div>
            </div>
          </div>

          <div className="mt-20 px-4 md:px-12 py-8">
  <h2 className="text-white text-2xl md:text-4xl mb-6">Artificial Intelligence</h2>

  <div className="flex flex-col md:flex-row gap-8">
    <img
      src="/aibanner.png"
      alt="Artificial Intelligence"
      className="w-full md:w-[60vw] h-auto px-10 rounded-lg"
    />

    <div className="flex-1 flex flex-col justify-center items-start">
      <h2 className="text-xl md:text-3xl text-white">
        AI for Scientific and Technological Breakthroughs
      </h2>

      <hr className="w-full border-gray-600 my-4" />

      <span className="text-base md:text-lg text-gray-300 mt-2">
        Accelerating Discovery with Artificial Intelligence
      </span>

      <hr className="w-full border-gray-600 my-4" />

      <p className="text-base md:text-lg text-gray-300">
        Redefining Possibilities with AI-Driven Research
      </p>
    </div>
  </div>
</div>

<div className="mt-20 px-4 md:px-12 py-8">
  <h2 className="text-white text-2xl md:text-4xl mb-6">Quantum Computing</h2>

  <div className="flex flex-col md:flex-row gap-8">
    <img
      src="/qcbanner.png"
      alt="Quantum Computing"
      className="w-full md:w-[60vw] px-10 h-auto rounded-lg"
    />

    <div className="flex-1 flex flex-col justify-center items-start">
      <h2 className="text-xl md:text-3xl text-white">
        Quantum Computing for Solving the Seemingly Impossible
      </h2>

      <hr className="w-full border-gray-600 my-4" />

      <span className="text-base md:text-lg text-gray-300 mt-2">
        Reimagining What is Possible with Quantum Power
      </span>

      <hr className="w-full border-gray-600 my-4" />

      <p className="text-base md:text-lg text-gray-300">
        The Next Leap: Unlocking Quantum Solutions for Global Problems
      </p>
    </div>
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
