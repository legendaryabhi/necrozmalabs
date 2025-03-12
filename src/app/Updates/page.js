import Image from "next/image";

export default function Update() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      {/* Heading */}

      {/* Image Section */}
      <div className="w-full mb-8">
        <Image
          src="/summerupdate.png" // Update this with the correct image path
          alt="Summer Updates - BuildY"
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
         This season, <strong>Necrozma Labs</strong> is thrilled to introduce <strong>Build Y</strong>—an open-source playground where groundbreaking inventions take shape. <a href="/BuildY" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500">Learn more here</a>.
      </p> 

      {/* Visit BuildY Button */}
      <div className="flex  mt-8">
        <a href="https://buildy.necrozmalabs.com" target="_blank" rel="noopener noreferrer" className=" text-white font-bold  shadow-md transition">
          Visit BuildY
        </a>
      </div>
    </div>
  );
}
