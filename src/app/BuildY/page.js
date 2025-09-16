import Image from "next/image";

export const metadata = {
  title: "BuildY | Necrozma Labs",
  description:
    "BuildY is an open-access research platform by Necrozma Labs, enabling scientists and engineers to publish, collaborate, and build upon shared knowledge.",
  keywords: "BuildY, research sharing, collaboration, open science, innovation, Necrozma Labs",
};

export default function BuildY() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-52 py-30">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Build Y</h1>
      <h2 className="text-xl mb-6 text-center md:text-left">
        Home for Theoretical Researchers
      </h2>

      {/* Main Visual */}
      <div className="w-full mb-10">
        <Image
          src="/buildy/buildy.png"
          alt="BuildY Research Visualization"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      <p className="text-lg text-gray-300 mb-6">
        At Necrozma Labs, our mission has always been clear: to build tools that empower researchers to push the boundaries of knowledge. Today, we are excited to introduce our latest project — Build Y, a platform designed exclusively for theoretical researchers.
      </p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Why Build Y?</h2>

      <p className="text-lg text-gray-300 mb-6">
        Theoretical research often starts with early ideas — sparks that can evolve into groundbreaking theories when shared, refined, and expanded. But most existing platforms are either too formal (demanding peer-reviewed publications) or too broad (open to anyone, diluting focus). Build Y fills this gap by creating a dedicated space for theoretical researchers to share, collaborate, and grow their ideas together.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Key Features of Build Y</h2>
      <p className="text-lg text-gray-300 mb-6">
        1. Publish Early Ideas<br></br>
        Build Y allows researchers to publish their early theoretical ideas without the barriers of formal peer review. These ideas can be raw but powerful, sparking collaboration and feedback from other like-minded researchers.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        2. Collaboration<br></br>
        Inspired by open-source platforms, Build Y enables researchers to contribute directly to each other`s work. Just as GitHub allows developers to collaborate on code, Build Y allows researchers to collaborate on theories. Any researcher can join an existing project, add their insights, and help build the idea further.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        3. Dedicated Discussion Space<br></br>
        A rich discussion page is built into every project. Here, researchers can debate, refine, and brainstorm around theoretical concepts. These discussions are central to creating stronger, more unified research outcomes.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        4. Restricted to Researchers Only<br></br>
        To maintain quality, Build Y is not an open-for-all platform. Onboarding requires proof of work to verify that you are an active researcher. This ensures that the platform remains highly focused and credible.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">A Home for Collaboration</h2>
      <p className="text-lg text-gray-300 mb-6">
        Every feature of Build Y is designed to increase the chances of collaboration. From publishing early work to open contribution and structured discussion, the platform makes it easier for researchers to connect and move forward together.
      </p>


      <h2 className="text-2xl font-bold mt-8 mb-4">Visual Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 bg-gray-800 p-10 rounded-4xl gap-4 mb-12">
        {["1", "2", "3", "4", "5", "6"].map((num) => (
          <Image
            key={num}
            src={`/buildy/${num}.png`}
            alt={`BuildY Visual ${num}`}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        ))}
      </div>



      <h2 className="text-2xl font-bold mt-8 mb-4">Join the Community</h2>
      <p className="text-lg text-gray-300 mb-6">
        Build Y is designed for the global research community.
      </p>

      <a
        href="https://buildy.necrozmalabs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500"
      >
        Visit the Build Y platform to get started.
      </a>
    </div>
  );
}
