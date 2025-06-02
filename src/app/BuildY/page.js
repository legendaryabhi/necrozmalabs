import Image from "next/image";

export const metadata = {
  title: "BuildY | Necrozma Labs",
  description:
    "BuildY is an open-source platform by Necrozma Labs, designed to foster innovation in AI, Biotechnology, Quantum Computing, and more. Join us in building the future together.",
  keywords: "BuildY, open-source, innovation, AI, Biotechnology, Quantum Computing, Necrozma Labs",
}

export default function BuildY() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-52 py-30">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
        BuildY
      </h1>
      <h2 className="text-xl mb-6 text-center md:text-left">
        An Open-Source Playground for Breakthrough Inventions
      </h2>

      {/* Image Collage Section */}
      <div className="w-full mb-10">
  <Image
    src="/buildy/1.png"
    alt="Image 1"
    width={1200}
    height={600}
    className="w-full h-auto object-cover"
    priority
  />
</div>


      {/* Storytelling Section */}
      <p className="text-lg text-gray-300 mb-6">
        The world is changing faster than ever. With every passing day,
        engineers, scientists, and visionaries push the boundaries of what’s
        possible. But for those who dream of building the future, one challenge
        remains: <strong>access</strong>. Access to cutting-edge tools,
        knowledge, and a community that thrives on collaboration.
      </p>

      <p className="text-lg text-gray-300 mb-6">
        That’s where <strong>BuildY</strong> was born. Created by{" "}
        <strong>Necrozma Labs</strong>, BuildY isn’t just another platform. It’s
        a movement—a space where the brightest minds come together to explore,
        create, and shape the world of tomorrow.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">A Hub of Innovation</h2>
      <p className="text-lg text-gray-300">
        Imagine a place where groundbreaking ideas in{" "}
        <strong>AI, Biotechnology, Quantum Computing</strong>, and more are not
        locked behind paywalls or patents. A place where open-source innovation
        is not just encouraged but celebrated.
      </p>

      <p className="text-lg text-gray-300 mb-6">
        BuildY is that place. It brings together researchers, developers, and
        creators from across the world, offering them an ever-evolving
        repository of cutting-edge projects and insights.
      </p>

      <p className="text-lg text-gray-300 mb-6">
        A scientist in Japan, an engineer in Germany, and a student in India can
        collaborate seamlessly, sharing their expertise to create something
        greater than themselves. No locked doors, no gatekeeping—everyone is
        welcome to contribute, and everyone benefits. Knowledge is no longer a
        privilege but a shared resource, updated constantly to keep pace with
        the world’s latest breakthroughs.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Who stands to gain from this?
      </h2>

      <p className="text-lg text-gray-300 mb-6">
        For engineers and scientists, BuildY is the missing piece of the
        puzzle—the platform where bold ideas meet the tools needed to bring them
        to life. Students and educators find in BuildY an ever-evolving learning
        hub, filled with resources that transcend traditional textbooks.
        <br />
        <br /> And for the entrepreneurs and innovators shaping the next wave
        of technology, BuildY offers the perfect ground to build, test, and
        refine solutions that can change the world.
        <br />
        <br />
        This is more than a platform. It’s a call to action. A call to create,
        to collaborate, and to redefine the limits of what’s possible.
        <br />
        <br />
        Welcome to BuildY—where the future is being built, together. 🚀
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Usage License</h2>
      <p className="text-lg text-gray-300 mb-6">
        The ideas presented on Build Y are intended to be free and open-source, aligning with our commitment to fostering innovation without barriers. Users are encouraged to utilize, modify, and share these concepts, provided that appropriate credit is given to the original contributors.
        <br />
        <br />
        This open-access model is designed to stimulate collaborative development and rapid technological advancement.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Credits & Transparency</h2>
      <p className="text-lg text-gray-300 mb-6">
        All ideas featured in Build Y are based on publicly available research and contributions from the open-source scientific community. Full credits to original researchers, developers, and contributors are provided:
        <br />
        <br />
        📜 Check the full credits page here:{" "}
        <a
          href="https://buildy.necrozmalabs.com/credits/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-500"
        >
          See here
        </a>
        <br />
        <br />
        We prioritize transparency and ensure that all resources are properly credited.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Submit your idea to Build Y
      </h2>
      <p className="text-lg text-gray-300 mb-6">
        We welcome contributions from innovators, engineers, and scientists worldwide! You can submit your ideas to Build Y by opening an issue on our GitHub repository.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-10">
        Graphics created for Build Y
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {["2", "3", "4", "5", "6"].map((num) => (
          <Image
            key={num}
            src={`/buildy/${num}.png`}
            alt={`Image ${num}`}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        ))}
      </div>

      <a
        href="https://buildy.necrozmalabs.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-500"
      >
        You can visit Build Y by clicking here...
      </a>
    </div>
  );
}
