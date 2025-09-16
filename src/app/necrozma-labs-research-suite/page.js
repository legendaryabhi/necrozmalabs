import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Necrozma Labs Research Suite",
  description: "Necrozma Labs Research Suite is designed to redefine scientific research",
  keywords: "Necrozma labs research suite, necrozma ecosystem, research suite, scientific research ecosystem, necrozma, necrozmalabs",
};

export default function Page() {
  return (
    <main className="bg-black px-6 md:px-52 py-20 text-white min-h-screen flex flex-col justify-start items-start space-y-4">

      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6">
        Necrozma Labs Research Suite
      </h1>

      {/* Introduction */}
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        The Future of Scientific Research is Here.<br></br> Necrozma Labs Research Suite is a curated collection of cutting-edge tools that empower engineers and researchers 
  to <span className="text-green-500">design experiments,</span> <span className="text-yellow-500">collaborate,</span> <span className="text-blue-500">test hypotheses,</span> and <span className="text-orange-500">accelerate scientific discovery.</span>

      </p>

      {/* Tool 1 */}
      <div className=" rounded-xl text-lg md:text-xl p-6 w-full mt-8 md:mt-20 shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Open Research Laboratory
        </h2>
        <Image
          src="/orl/orl.png"
          alt="Research Collaboration Community"
          width={800}
          height={400}
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="text-gray-300 mb-4">
          The Open Research Laboratory allows users to conduct realistic simulations, analyze complex phenomena, and contribute to the global scientific community.
          <br></br><br></br>
          By combining state-of-the-art computational tools with collaborative features, the platform empowers researchers to accelerate their work and push the boundaries of scientific understanding. It is designed to be inclusive, ensuring that both seasoned scientists and emerging researchers can engage with experiments and data in meaningful ways.
        </p>
        <p className="text-gray-400 italic">
          Built by Necrozma Labs, this tool provides the freedom to experiment without limits.
        </p>

        <Link href="https://openresearchlaboratory.necrozmalabs.com" target="_blank">
  <span className="inline-block mt-6 px-6 py-2 border-2 border-gray-200 text-white transition-colors duration-300 hover:border-green-500 cursor-pointer">
    Visit Open Research Laboratory
  </span>
</Link>
        
      </div>

      {/* Tool 2 / Community */}
      <div className=" rounded-xl p-6 w-full text-lg md:text-xl mt-8 md:mt-20  shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Build Y
        </h2>
        <Image
          src="/buildy/buildy.png"
          alt="Research Collaboration Community"
          width={800}
          height={400}
          className="w-full h-auto mb-4 rounded-lg"
        />

        <p className="text-gray-300 mb-4">
          Build Y is a dedicated platform for theoretical researchers, created by Necrozma Labs. It is a space where researchers can publish their early ideas, collaborate with other researhcers and refine theories through open contributions and structured discussions.
         </p>
        <p className="text-gray-400 italic">
          Unlike general platforms, Build Y is highly focused and restricted to verified researchers only, ensuring credibility and meaningful collaboration.<br></br> It is designed to make theoretical research more open, connected, and collaborative from the very beginning of an idea.
          </p>

          <Link href="https://buildy.necrozmalabs.com" target="_blank">
  <span className="inline-block mt-6 px-6 py-2 border-2 border-gray-200 text-white transition-colors duration-300 hover:border-green-500 cursor-pointer">
    Visit Build Y
  </span>
</Link>

      </div>

      {/* Call to Action */}
      <div className="mt-8 md:mt-20">
        <p className="text-lg md:text-xl text-gray-300">
          Join the Necrozma Labs Research Suite today and become part of a vibrant,
          forward-thinking research community.
        </p>
      </div>

    </main>
  );
}
