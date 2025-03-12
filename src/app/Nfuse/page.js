import Image from "next/image";

export default function Nfuse() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      

      {/* Main Content */}
      <div className=" mx-auto mt-4">
        <h1 className="text-4xl font-bold ">Project Nfuse</h1>
        <p className="text-lg text-gray-300  mt-12">
          Bringing the vision of limitless, sustainable energy to reality.
        </p>

        {/* Section 1: The Problem */}
        <div className="mt-12">
          <p className="mt-4 text-gray-300 text-lg">
            Energy has been the foundation of civilization’s progress. From fire to steam engines, coal, oil, and nuclear power, 
            each step has propelled humanity forward. Yet, every one of these solutions has its limits—scarcity, pollution, geopolitical conflicts, 
            or inefficiencies. We needed something better, something that wasn’t bound by Earth`s constraints.
          </p>
        </div>

        {/* Section 2: The Breakthrough Idea */}
        <div className="mt-4">
          <p className="mt-4 text-gray-300 text-lg">
            The Sun is the most powerful energy source we have ever known. But Earth’s atmosphere blocks a significant amount of its energy before it even reaches the surface.
            We realized that if we could collect solar energy directly from space, without atmospheric interference, we could unlock efficiency levels never seen before.
          </p>
        </div>

        {/* Section 3: Project Nfuse is Born */}
        <div className="mt-4">
          <p className="mt-4 text-gray-300 text-lg">
            With this realization, we began developing Plasmonic Solar Cells—ultra-efficient solar collectors that operate in the vacuum of space.
            Our vision was simple but ambitious: capture solar energy at 80-90% efficiency, convert it into electricity, 
            and wirelessly transmit it to Earth in the form of microwaves.
          </p>
        </div>

        {/* Section 4: How It Works */}
        <div className="mt-4">
          <p className="mt-4 text-gray-300 text-lg">
            Our Plasmonic Solar Cells are launched into space, where they collect unfiltered solar radiation. 
            The energy is converted into electricity, which is then transmitted via high-frequency microwave beams to receiving stations on Earth. 
            These stations then convert the microwaves back into usable electricity and feed it into the power grid.
          </p>
        </div>

        {/* Section 5: The Impact */}
        <div className="mt-4">
          <p className="mt-4 text-gray-300 text-lg">
            If successful, Project Nfuse will solve one of humanity’s greatest challenges: access to unlimited, clean, and sustainable energy.  
            This technology can power entire cities, industries, and even support off-grid locations where traditional infrastructure is not feasible.
          </p>
        </div>

        {/* Section 6: The Future */}
        <div className="mt-4">
          <p className="mt-4 text-gray-300 text-lg">
            We are already conducting simulations and small-scale experiments.  
            Our next steps involve testing prototypes in low Earth orbit before deploying a large-scale system in geostationary orbit.  
            We envision a future where humanity no longer needs to burn fossil fuels to survive.
          </p>
        </div>

        {/* Join Us Section */}
        
      </div>
    </div>
  );
}
