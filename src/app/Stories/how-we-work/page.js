import Image from "next/image";

export default function HowWeWork() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">How We Work</h1>
        <p className="text-lg text-gray-400 mt-2">
          Our approach to solving the world’s biggest problems with AI and Quantum Computing.
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full mb-8 flex justify-center">
        <Image
          src="/logo.svg" // Replace with actual Necrozma Labs logo path
          alt="Necrozma Labs Logo"
          width={200}
          height={100}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Interdisciplinary Research */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interdisciplinary Research</h2>
        <p className="text-gray-300">
          At Necrozma Labs, we foster collaboration across various scientific and technological disciplines.
          Our research integrates AI, Quantum Computing, and other advanced technologies to develop comprehensive,
          scalable solutions to real-world challenges.
        </p>
      </section>

      {/* Strategic Partnerships */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Strategic Partnerships</h2>
        <p className="text-gray-300">
          Collaboration is key to progress. We work closely with academic institutions, industry leaders,
          and government agencies to amplify our impact and accelerate the development of practical solutions.
        </p>
      </section>

      {/* Ethical Considerations */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Ethical Considerations</h2>
        <p className="text-gray-300">
          We ensure that all our projects prioritize ethics, security, and equity. Innovation must serve humanity,
          and we take every measure to ensure that our advancements are used responsibly and fairly.
        </p>
      </section>

      {/* Call to Action */}
      
    </div>
  );
}
