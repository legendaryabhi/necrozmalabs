import Image from "next/image";

export const metadata = {
  title :"Season Updates | Necrozma Labs",
  description: "Discover the latest updates from Necrozma Labs this summer, including the launch of BuildY, an open-source platform for innovation.",
  keywords: "summer updates, BuildY, open-source, innovation, Necrozma Labs",
};

export default function Update() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      {/* Heading */}

      {/* Image Section */}
      <div className="w-full mb-8">
        <Image
          src="/summerupdate.png" // Update this with the correct image path
          alt=" Updates - Necrozma labs"
          layout="responsive"
          width={800}
          height={400}
          className=" shadow-lg"
        />
      </div>
  
      {/* Introduction */}
      <p className="text-lg text-gray-300 mb-6">
        As summer unfolds, so does innovation!
        <br></br>
        <br></br>
         This season, <strong>Necrozma Labs</strong> is thrilled to introduce <span className="text-green-500">Necrozma Labs Research Suite</span>  <strong>(Build Y and Open Research Laboratory)</strong> an ecosystem where groundbreaking inventions take shape. <a href="/necrozma-labs-research-suite" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">Learn more here</a>.
      </p> 

      {/* Visit BuildY Button */}
      
    </div>
  );
}
