import React from "react";

const researchesData = [
  { title: "Tandem Solar Cell", link: "https://www.necrozmalabs.com/papers/Nfuse_cell_paper.pdf" },
];



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
    src="https://media.licdn.com/dms/image/v2/D5603AQHyDX37TQDgQA/profile-displayphoto-shrink_800_800/B56ZOnHwe5GgAc-/0/1733675649747?e=1753920000&v=beta&t=B269HrN46pTbnpm-bHROjYoYVF39QAXA5YBDwLICHUY"
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
        abhinav@necrozmalabs.com
      </a>
    </p>
    <p className="text-base sm:text-lg">
      <strong>Affiliation:</strong> Founder, Necrozma Labs
    </p>
    <p className="text-base sm:text-lg">
      <strong>Research Areas:</strong> Clean Energy, Quantum Computing, AI
    </p>
  </div>
</div>


      {/* About Section */}
      <section className="px-6 md:px-32 py-12 mx-auto">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Abhinav Sharma is a visionary founder passionate about leveraging
          technology to solve some of the world's biggest challenges. With a strong
          focus on clean energy, quantum computing, and artificial intelligence,
          Abhinav drives innovative research to make a positive impact globally.
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
