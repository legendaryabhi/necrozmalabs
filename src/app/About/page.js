import Image from "next/image";

export const metadata = {
  title: "About | Necrozma Labs",
  description:
    "Learn about Necrozma Labs, our mission, vision, and how we are leveraging AI and Quantum Computing to solve global challenges.",
  keywords: "Necrozma Labs, About, AI, Quantum Computing, Innovation",

}

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      {/* Logo Section */}
      <div className="flex justify-center mb-8">
        <Image
          src="/logo.svg" // Update with the correct logo path
          alt="Necrozma Labs Logo"
          width={200}
          height={200}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Introduction */}
      <h1 className="text-4xl  mb-6">About Necrozma Labs</h1>
      <p className="text-lg text-gray-300 mb-6">
        Necrozma Labs is a Research and Development Company dedicated to solving the world`s most pressing challenges through Artificial Intelligence (AI) and Quantum Computing. Our mission is to push humanity forward by developing solutions that not only address current needs but also anticipate future demands.
      </p>

      {/* Vision */}
      <p className="text-lg text-gray-300 mb-6">
        We envision a world where technological advancements serve as catalysts for positive change, enhancing the quality of life globally. By pushing the boundaries of innovation, we transform ambitious ideas into tangible realities.
      </p>

      {/* Join Us */}
      <p className="text-lg text-gray-300 mb-6">
        We welcome researchers, engineers, and innovators to collaborate with us in solving global challenges. Let`s harness the power of AI and quantum computing to build a brighter, sustainable future.
      </p>

      {/* Contact Section */}
      
    </div>
  );
}
