import React from "react";

const researchesData = [
  { title: "NFuse Cell: A High-Efficiency 4-Terminal Perovskite–Silicon Tandem Solar Cell for Next-Generation Sustainable Energy", link: "https://www.necrozmalabs.com/papers/Nfuse_cell_paper.pdf" },
  { title:"PATTERNS OF SUBCONSCIOUS RECALL: INVESTIGATING HOW THE MIND RETRIEVES AND ENCODES EXPERIENCE", link: "https://www.necrozmalabs.com/papers/Mind_paper.pdf" },
  {title: "Critical Review on How Solar Energy Can Replace Fossil Fuels and Nuclear Power", link: "https://www.necrozmalabs.com/papers/Critical_review_on_how_Solar_energy_can_replace_other_alternatives_like_fossil_fuels_and_nuclear_power_.pdf" },
];

export const metadata = {
  title: "Abhinav Sharma | Necrozma Labs Research", 
  description: "Profile of Abhinav Sharma, founder of Necrozma Labs, focusing on clean energy, quantum computing, and AI research.",
  keywords: "Abhinav Sharma, Necrozma Labs, clean energy, quantum computing, AI, research"
}


const Profile = () => {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      {/* Top section: Fullscreen height adjusted for responsiveness */}
      <div
  className="flex flex-col md:flex-row items-center justify-center px-6 md:px-32 gap-10"
  style={{ minHeight: "60vh" }}
>
  {/* Left: Picture */}
  <img
    src="/researchers/abhinav.png"
    alt="Abhinav Sharma"
    className="w-40 h-40 p-10 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-lg object-cover"
  />

  {/* Right: Info */}
  <div className="flex flex-col space-y-4 max-w-md text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl font-bold">Abhinav Sharma</h1>
    <p className="text-base sm:text-lg">
      <strong>Email:</strong>{" "}
      <a
        href="mailto:abhinav@example.com"
        className="text-blue-400 hover:underline"
      >
        abhinav at this site domain.
      </a>
    </p>
    <p className="text-base sm:text-lg">
      <strong>Affiliation:</strong> Founder, Necrozma Labs
    </p>
    <p className="text-base sm:text-lg">
      <strong>Research Areas:</strong> Clean Energy, Quantum Physics, AI
    </p>
  </div>
</div>


      {/* About Section */}
      <section className="px-6 md:px-32 py-12 mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Abhinav Sharma is the founder of Necrozma Labs. His main areas of work are clean energy, quantum physics, and artificial intelligence. Abhinav aims to build new technologies that can make the world better and more sustainable. He brings together ideas from different fields to turn bold ideas into real solutions.
        </p>
      </section>

      {/* Divider */}
      <hr className="border-gray-700 mx-6 md:mx-32" />

      {/* Researches Section */}
      <section className="px-6 md:px-32 py-12 mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Researches</h2>
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {researchesData.map(({ title, link }, idx) => (
           <a
  key={idx}
  href={link}
  target="_blank"
  rel="noopener noreferrer"
  className="border-2 border-green-500 rounded-lg px-6 py-3 cursor-pointer transition text-center"
>
  <p className="text-white">{title}</p>
</a>


          ))}
        </div>
      </section>
    </main>
  );
};

export default Profile;
