"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Line, Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Nfuse() {
  const [energyOutput, setEnergyOutput] = useState(0);

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      counter += Math.floor(Math.random() * 5) + 10;
      if (counter >= 10000) {
        counter = 10000;
        clearInterval(interval);
      }
      setEnergyOutput(counter);
    }, 100);
  }, []);

  const energyData = {
    labels: ["Coal", "Oil", "Natural Gas", "Nuclear", "Hydro", "Solar", "Wind"],
    datasets: [
      {
        label: "Global Energy Consumption (TWh)",
        data: [25000, 18000, 16000, 2800, 4000, 850, 1600],
        backgroundColor: [
          "#7f1d1d",
          "#b91c1c",
          "#dc2626",
          "#facc15",
          "#3b82f6",
          "#fbbf24",
          "#4ade80",
        ],
      },
    ],
  };

  const data = {
    labels: ["2015", "2018", "2021", "2024", "2027", "2030"],
    datasets: [
      {
        label: "Solar Energy Conversion Efficiency (%)",
        data: [35, 45, 55, 70, 80, 90],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const futureEnergyMix = {
    labels: ["Project Nfuse", "Renewables", "Fossil Fuels"],
    datasets: [
      {
        label: "Projected Energy Mix (2050)",
        data: [60, 30, 10],
        backgroundColor: ["#10b981", "#3b82f6", "#ef4444"],
      },
    ],
  };

  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      <div className="mx-auto mt-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Project Nfuse</h1>
        <p className="text-lg text-gray-300 mb-10">
          Bringing the vision of limitless, sustainable energy to reality.
        </p>

        <section className="mb-12">
          <p className="text-lg text-gray-300">
            Energy has been the foundation of civilization’s progress. From fire
            to steam engines, coal, oil, and nuclear power, each step has
            propelled humanity forward. Yet, every one of these solutions has
            its limits—scarcity, pollution, geopolitical conflicts, or
            inefficiencies. We needed something better, something that wasn’t
            bound by Earth`s constraints.
          </p>
          <div className="mt-8">
            <Bar data={energyData} />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Current Global Energy Consumption by Source
            </p>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-lg text-gray-300">
            The Sun is the most powerful energy source we have ever known. But
            Earth’s atmosphere blocks a significant amount of its energy before
            it even reaches the surface. We realized that if we could collect
            solar energy directly from space, without atmospheric interference,
            we could unlock efficiency levels never seen before.
          </p>
          <div className="bg-gray-900 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold mb-4">
              Efficiency Gains Over Time
            </h2>
            <Line data={data} />
            <p className="text-sm text-white mt-2 text-center">
              Projected Solar Energy Conversion Efficiency
            </p>
          </div>
        </section>

        <section className="mb-12">
          <p className="text-lg text-gray-300">
            With this realization, we began developing Plasmonic Solar
            Cells—ultra-efficient solar collectors that operate in the vacuum
            of space. Our vision was simple but ambitious: capture solar energy
            at 80-90% efficiency, convert it into electricity, and wirelessly
            transmit it to Earth in the form of microwaves.
          </p>
          <div className="mt-8 text-center">
            <p className="text-4xl font-bold text-green-400">
              {energyOutput} MW
            </p>
            <p className="text-gray-400">Projected Real-time Energy Output</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-lg text-gray-300">
            Our Plasmonic Solar Cells are launched into space, where they
            collect unfiltered solar radiation. The energy is converted into
            electricity, which is then transmitted via high-frequency microwave
            beams to receiving stations on Earth. These stations then convert
            the microwaves back into usable electricity and feed it into the
            power grid.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Impact</h2>
          <p className="text-lg text-gray-300">
            If successful, Project Nfuse will solve one of humanity’s greatest
            challenges: access to unlimited, clean, and sustainable energy.
            This technology can power entire cities, industries, and even
            support off-grid locations where traditional infrastructure is not
            feasible.
          </p>
          <div className="mt-8">
            <Pie data={futureEnergyMix} />
            <p className="text-sm text-gray-500 mt-2 text-center">
              Projected Energy Mix in 2050
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Future</h2>
          <p className="text-lg text-gray-300">
            We are already conducting simulations and small-scale experiments.
            Our next steps involve testing prototypes in low Earth orbit before
            deploying a large-scale system in geostationary orbit. We envision
            a future where humanity no longer needs to burn fossil fuels to
            survive.
          </p>
        </section>

        
      </div>
    </div>
  );
}