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
        Scientific Research Collaboration Platform
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
       Build Y is a platform for scientific research collaboration, connecting researchers and innovators to accelerate breakthroughs. Join us to share ideas, find collaborators, and drive innovation in science and technology. 
      </p>

      <p className="text-lg text-gray-300 mb-6">
        The platform was created to address a growing need in the scientific ecosystem: a space
        where researchers can openly share their research and collaborate across disciplines and
        geographies without institutional or financial barriers.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Contribute to Ongoing Research</h2>
      <p className="text-lg text-gray-300 mb-6">
        Each experiment or project on BuildY is open to contributions from the community.
        Researchers can submit enhancements, validate results, add supplementary data, or provide
        implementation improvements. Every contribution is credited, and collaboration is tracked
        transparently to ensure proper attribution.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Use Research in Your Work</h2>
      <p className="text-lg text-gray-300 mb-6">
        In addition to contributing, users can also reuse published research. Authors can mark
        specific components—such as procedures, datasets, simulation models, or derived equations—as
        reusable. These blocks can be directly imported into new experiments, enabling researchers
        to build faster and avoid duplication of effort.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Why Build Y?</h2>
      <p className="text-lg text-gray-300 mb-6">
        BuildY fosters a collaborative research culture where sharing is the default. The platform
        provides tools for:
        <ul className="list-disc list-inside mt-3">
          <li>Publishing research in a clean, markdown-based format</li>
          <li>Adding modular, reusable content blocks for others to build upon</li>
          <li>Tracking contributions from collaborators with full transparency</li>
          <li>Promoting interdisciplinary collaboration at a global scale</li>
        </ul>
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Open-Access Licensing</h2>
      <p className="text-lg text-gray-300 mb-6">
        All content published on BuildY is available under open-access terms. Users are free to
        explore, adapt, and redistribute the material, provided that appropriate credit is given to
        the original authors. This model is designed to advance rapid and ethical knowledge-sharing.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Submission Guidelines</h2>
      <p className="text-lg text-gray-300 mb-6">
        Build Y accepts contributions from scientists, engineers, academic researchers, and students.
        Projects can include theoretical research, experimental reports, simulations, prototypes, or
        open-source tools. Submissions are reviewed for quality, originality, and clarity before
        being published.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Visual Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 bg-gray-800 p-10 rounded-4xl gap-4 mb-12">
        {["1", "2", "3", "4", "5"].map((num) => (
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
