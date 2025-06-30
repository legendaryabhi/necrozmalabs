
export const metadata = {
  title: "Necrozma Labs Ecosystem",
  description: "Our ecosystem is designed to redefine the research",
  keywords: "Necrozma labs ecosystem, necrozma ecosystem, research ecosystem, scientifc research ecosystem, necrozma, necrozmalabs",
 
};
export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col justify-center items-start px-6 py-10  ">
      <h1 className="text-3xl md:text-5xl font-bold  mb-6">
        The Future of Research
      </h1>

      <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
        You wake up. Your <a href="/ViewAI"><span className="text-green-400 font-semibold">View AI </span></a> briefs you on overnight progress and suggests 3 experiment directions.
        <br /><br />
        You test one of them in a <a href="/openresearchlaboratory"><span className="text-blue-400 font-semibold">Open Research Laboratory</span></a> powered by IBM`s global Q-network.
        <br /><br />
        You share your results to an <a href="/BuildY"><span className="text-yellow-400 font-semibold">Build Y</span></a>; within hours, a collaborator in Africa adds improvements.
        <br /><br />
        You co-write a paper in a real-time.
        <br /><br />
        By evening, you receive build Y recognition and funding for the next phase — no paperwork, just merit.
      </p>

     

      <h2 className="text-xl md:text-2xl font-semibold text-white mt-16">
        And we redefined the research.
      </h2>
    </main>
  );
}
