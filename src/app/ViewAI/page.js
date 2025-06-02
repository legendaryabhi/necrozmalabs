import Image from "next/image";

export const metadata = {
  title : "ViewAI | Necrozma Labs",
  description: "ViewAI is an advanced AI system by Necrozma Labs, leveraging the Mixture of Experts architecture to redefine artificial intelligence.",
  keywords: "ViewAI, Necrozma Labs, Mixture of Experts, AI, artificial intelligence, innovation",
};

export default function ViewAI() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">
        Introducing ViewAI
      </h1>

      <p className="text-lg text-gray-300 mb-6">
        In a world where technology evolves at an unprecedented pace, a new
        force emerges to redefine the boundaries of artificial intelligence.{" "}
        <strong>Necrozma Labs</strong> proudly presents <strong>ViewAI</strong>,
        an AI system designed to propel humanity into the next era of
        innovation.
      </p>
      <p className="text-lg text-gray-300 mb-6">
        Imagine a future where AI doesn`t just process data but understands it,
        adapts to new challenges, and unlocks discoveries that were once beyond
        human reach. This is the world ViewAI envisions—a world where
        intelligence is not just artificial but intuitive, precise, and
        transformative.
      </p>

      <p className="text-lg text-gray-300">
        Deep within the research labs of Necrozma, a team of brilliant minds has
        pioneered an AI system built on the{" "}
        <strong>Mixture of Experts (MoE)</strong> architecture. Unlike
        conventional AI models, ViewAI dynamically selects specialized models
        for each task, optimizing efficiency, performance, and scalability. This
        means that whether it`s scientific research, engineering, or
        technological advancement, ViewAI is equipped to tackle complex problems
        with unparalleled precision.
      </p>
      <br></br>
      <p className="text-lg text-gray-300">
        At its core, ViewAI is more than just an AI system it`s a movement.
        Designed to empower researchers, engineers, and visionaries, it opens
        doors to possibilities that were once unimaginable. From accelerating
        AI-driven scientific discoveries to revolutionizing industries, ViewAI
        stands as a beacon of innovation.
      </p>
      <br></br>
      <p className="text-lg text-gray-300">
        The impact of ViewAI extends beyond a single industry. Researchers and
        scientists can leverage its capabilities to push the frontiers of
        knowledge. Engineers and developers can integrate its intelligence into
        groundbreaking solutions. Entrepreneurs and tech pioneers can harness
        its insights to build the future.
      </p>
      <br></br>
      <p className="text-lg text-gray-300 mb-6">
        The age of artificial intelligence is here, and ViewAI is at its
        forefront. Are you ready to be part of this revolution? Step into a
        world where AI is more than just a tool—it’s the key to unlocking the
        impossible.
      </p>
      <br></br>
    </div>
  );
}
