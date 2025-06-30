import Image from "next/image";

export const metadata = {
  title: "Open Research Laboratory | Necrozma Labs",
  description:
    "Open Research Laboratory is a virtual lab for conducting experiments in quantum computing, physics, and other scientific fields. Open Research Laboratory is a project by Necrozma Labs to provide a platform for researchers to conduct experiments in a virtual environment.",
  keywords:
    "Open Research Laboratory, virtual lab, quantum computing, physics, scientific research, Necrozma Labs",
};

export default function BuildY() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-52 py-20">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
        Open Research Laboratory
      </h1>
      <h2 className="text-xl mb-6 text-center md:text-left text-gray-300">
        A Virtual Laboratory for the Next Generation of Scientists
      </h2>

      {/* Banner Image */}
      <div className="w-full mb-10">
        <Image
          src="/orl/orl.png"
          alt="Open Research Laboratory Interface"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
          priority
        />
      </div>

      {/* Overview Section */}
      <p className="text-lg text-gray-300 mb-8 leading-relaxed">
        **Open Research Laboratory** is a web-based, interactive platform that empowers individuals across the globe to perform scientific experiments entirely online. Built by <strong>Necrozma Labs</strong>, this platform is engineered to eliminate barriers in experimentation — making scientific research more accessible, reproducible, and collaborative than ever before.
      </p>

      {/* Features Section */}
      <h3 className="text-2xl font-semibold mb-4 ">How It Works</h3>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        Within the Open Research Laboratory, users can explore a wide range of scientific domains — from <strong>quantum computing</strong> and <strong>classical physics</strong> to <strong>data science</strong> and <strong>AI-based modeling</strong>. The lab interface includes a growing collection of virtual equipment and components, available directly through an intuitive dashboard.
      </p>
      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        To run an experiment, simply choose your desired components on the lab page, enter the required input parameters, and execute your setup with one click. The results are displayed in real time — whether it's a graph, simulation output, or numerical result. You can also save, edit, and share your experiments with others through the platform.
      </p>

      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
        This platform is ideal for:
      </p>
      <ul className="list-disc list-inside text-gray-300 mb-6 space-y-2 text-lg">
        <li>Independent researchers and inventors</li>
        <li>University students and academic labs</li>
        <li>Startup teams and R&D departments</li>
        <li>Educators and science outreach programs</li>
      </ul>
<div className="w-full mb-10">
        <Image
          src="/orl/labs.png"
          alt="Open Research Laboratory Interface"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
          priority
        />
      </div>
<h3 className="text-2xl font-semibold  mb-4"> Labs</h3>
      <ul className="flex flex-col gap-4 mb-8 text-gray-300 text-lg">
        <li><strong>Physics</strong> — Simulate circuits, optics, and mechanics</li>
        <li><strong>Quantum</strong> — Explore quantum circuits and algorithms</li>
        <li> <strong>Chemistry</strong> - Model chemical reactions and molecular structures</li>
        and more!
      </ul>
      

            {/* Experiments */}

      <h3 className="text-2xl font-semibold  mb-4">Experiments: The Core of Research</h3>
      <p className="text-lg text-gray-300 mb-4">
        Experiments are the building blocks of research in the Open Research Laboratory. Each experiment represents a self-contained setup where you can test hypotheses, validate models, or learn through simulation.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        You can include a single component (like a Multimeter) or multiple devices to simulate complex systems. Think of it like setting up a real lab bench — just virtually.
      </p>
      <p className="text-lg text-gray-300 mb-8 italic">
        Example: “Test the waveform output of a function generator on an oscilloscope.”
      </p>


      {/* Workflows */}
      <h3 className="text-2xl font-semibold mb-4">Workflows: Simulating a Full Research Pipeline</h3>
      <div className="md:w-1/2 w-full mb-10">
        <Image
          src="/orl/4.png"
          alt="Open Research Laboratory Interface"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
          priority
        />
      </div>

      <p className="text-lg text-gray-300 mb-4">
        A workflow allows you to chain multiple components or stages together, creating a full scientific pipeline. This is especially useful for simulations that involve input/output stages or inter-lab processes.
      </p>
      <p className="text-lg text-gray-300 mb-4">
        For example, a quantum signal can be generated → amplified → analyzed → visualized — all through a single workflow.
      </p>

    

      {/* Credit System */}
      <h3 className="text-2xl font-semibold mb-4">Understanding the Credit System</h3>

      <p className="text-lg text-gray-300 mb-4">
        Open Research Laboratory operates on a transparent credit-based model to support sustainable usage and fair access for all users.
      </p>
      <ul className="list-disc list-inside text-lg text-gray-300 space-y-2 mb-6">
        <li>All new users receive <strong>100 free credits</strong></li>
        <li>Each component costs between <strong>3–10 credits</strong></li>
        <li>Setup is free; credits are only charged when you run the simulation</li>
        <li>Saved experiments can be re-run (credits apply)</li>
        <li>Students and institutions are eligible for discounts</li>
      </ul>

      <p className="text-lg text-gray-300 mb-12 italic">
        Tip: Preview each component to understand credit cost before starting.
      </p>

      {/* AI Research Assistant */}

      <div className="md:w-1/2 w-full mb-10">
        <Image
          src="/orl/ai.png"
          alt="Open Research Laboratory Interface"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
          priority
        />
      </div>

<h3 className="text-2xl font-semibold mb-4">AI Research Assistant: View AI</h3>
<p className="text-lg text-gray-300 mb-4">
  Need help while setting up or analyzing your experiments? Our built-in assistant, <strong>View AI</strong>, is here to support you. Whether you're a beginner or a seasoned researcher, View AI can provide suggestions, generate workflows, explain equipment behavior, or even help debug your experimental setup.
</p>
<p className="text-lg text-gray-300 mb-6">
  Simply open the <strong>View AI panel</strong> from the lab interface and type your query. It is like having a research collaborator by your side — one that works 24/7.
</p>

<ul className="list-disc list-inside text-lg text-gray-300 space-y-2 mb-12">
  <li>Ask for step-by-step guidance on setting up experiments</li>
  <li>Get explanations of circuit behavior, optics simulations, or quantum mechanics</li>
  <li>Receive personalized component recommendations</li>
  <li>Automatically generate full workflows with a single request</li>
</ul>

<p className="text-lg text-gray-300 mb-12 italic">
  Example: “Design a workflow to analyze the interference pattern of a double-slit experiment.”
</p>

{/* Documentation Support */}
<h3 className="text-2xl font-semibold mb-4">Full Documentation Included</h3>
<p className="text-lg text-gray-300 mb-4">
  Open Research Laboratory comes with an extensive and regularly updated documentation portal that walks you through every part of the platform — from basic lab setup to advanced simulation features.
</p>
<p className="text-lg text-gray-300 mb-6">
  Whether you're creating your first experiment or designing complex inter-lab workflows, our documentation ensures that help is always a click away. It covers:
</p>

<ul className="list-disc list-inside text-lg text-gray-300 space-y-2 mb-12">
  <li>Getting started with labs and credits</li>
  <li>Component descriptions with use cases</li>
  <li>Workflow creation and real-world examples</li>
  <li>Licensing and publishing your experiments</li>
  <li>Integrating with View AI for dynamic support</li>
</ul>

<p className="text-lg text-gray-300 italic mb-12">
  You can access documentation anytime via the Help menu or at:{" "}
  <a href="https://documentation.necrozmalabs.com" className="text-green-400 hover:underline">/docs</a>
</p>


<h2 className="text-2xl font-bold mt-8 mb-4">Visual Highlights</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 p-10 rounded-4xl gap-4 mb-12">
        {["1", "2", "3", "4", "5", "6"].map((num) => (
          <Image
            key={num}
            src={`/orl/${num}.png`}
            alt={`BuildY Visual ${num}`}
            width={400}
            height={300}
            style={{ objectFit: "cover" }}
            className="rounded-lg"
          />
        ))}
      </div> 
      <div className="text-center md:text-left">
        <a
          href="https://openresearchlaboratory.necrozmalabs.com"
          className="inline-block  text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          Visit Open Research Laboratory
        </a>
        <a
          href="https://documentation.necrozmalabs.com/guides/getting-started/"
          className="inline-block  text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          Get Started 
        </a>
        <a
          href="https://documentation.necrozmalabs.com"
          className="inline-block  text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
         View Documentation
        </a>
      </div>
    </div>
  );
}
