
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import '../style.css'

export const metadata = {
  title: "Nfuse | Necrozma Labs",
  description:
    "Project Nfuse aims to revolutionize solar energy with the Nfuse Cell, a next-generation solar cell that is highly efficient, cost-effective, and sustainable. Join us in making solar energy the primary energy source across the globe.",
  keywords: "Nfuse, solar energy, renewable energy, clean technology, Necrozma Labs",
};

const description = `

# Project Nfuse: Revolutionizing Energy

### Introduction

Climate change is no longer a distant threat — it's a present-day crisis. Fossil fuels continue to pollute our air, oceans, and communities. While renewable sources like wind and hydro are progressing, **solar energy holds the highest untapped potential**.

**Project Nfuse** aims to develop a **next-generation solar cell**, known as the **Nfuse Cell**, which will be **highly efficient, cost-effective, and sustainable**. Our goal: make solar energy the **primary energy source** across the globe — accessible to everyone, everywhere.

### Our Mission
Our mission is to **create a world powered by clean, renewable energy**. We believe that **solar energy** can be the cornerstone of a sustainable future, and we are committed to making it **affordable, efficient, and accessible** for all.

## Why Are We Doing This?

### Global Problems We're Tackling:

- **Climate Change**: Rising temperatures, melting glaciers, extreme weather
- **Pollution**: Air and water pollution from fossil fuels
- **Energy Inequality**: 770 million+ people lack access to electricity
- **Rising Energy Costs**: Fossil fuels are becoming economically and geopolitically volatile

### Emissions by Energy Source:

\`\`\`
gCO₂/kWh emitted:
Coal        ████████████████████████████████████████ 820
Oil         ████████████████████████████████████ 720
Natural Gas ████████████████████████ 490
Solar PV    ██ 48
Nfuse (Est.) █ 5 (Target)
\`\`\`

_Source: IPCC, Nfuse R&D estimates_


## Our Vision: The Nfuse Cell

The **Nfuse Cell** is a new type of solar cell designed to **outperform traditional photovoltaic cells** in efficiency, longevity, and affordability.

### Key Innovations:

- **Efficiency**:  
  - Traditional Solar: 15–22%  
  - Nfuse Cell (Target): **35–40%**

- **Cost per Watt**:  
  - Traditional Solar: \$0.25–\$0.30  
  - Nfuse Cell (Target): **\$0.20–\$0.25**

- **Lifespan**:  
  - Traditional Solar: 20–25 years  
  - Nfuse Cell (Target): **25+ years**

- **Material Type**:  
  - Traditional: Silicon-based  
  - Nfuse: **Hybrid nanomaterials**

- **Recyclability**:  
  - Traditional: Low to Medium  
  - Nfuse: **High**

## How We'll Do It:

1. **Material Science Breakthroughs**  
   Using quantum dots and nanostructures to capture broader light spectrums.
   
2. **Layered Architecture**  
   Multi-junction designs to maximize photon absorption.
   
3. **AI-Driven Optimization**  
   Accelerate R&D and material selection using neural networks.
   
4. **Open Hardware and Open Data**  
   Shared designs to allow rapid iteration and community innovation.



### Benefits to Earth & Humanity

- **Environmental**: 90% reduction in carbon emissions from the energy sector
- **Energy Access**: Deployable in rural, remote areas with minimal infrastructure
- **Industry Shift**: Reduces dependency on coal, oil, and gas
- **Jobs**: Creates new green-tech manufacturing, R&D, and installation jobs
- **Science Boost**: Advances materials science, AI, and hardware innovation



### Our Team and Collaborations

- **Necrozma Labs**: Deep tech R&D and AI acceleration  
- **ConquerortheCrown**: Making technology equitable and accessible  
- Collaborating with materials scientists, environmentalists, and engineers globally.



### Why We Believe This Will Work

> *“The future belongs to clean, decentralized, democratized energy.”*  
Our multi-disciplinary approach, deep belief in open innovation, and commitment to tackling the **climate crisis head-on** position us to **transform the energy landscape permanently**. - Abhinav Sharma, Founder of Necrozma Labs

`;

export default function Nfuse() {
  return (
    <div className="bg-black text-white min-h-screen px-6 md:px-12">
      <div className="mx-auto mt-4 max-w-4xl">
        <div
          className="markdown-body"
          style={{ backgroundColor: "black", color: "white" }}
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{description}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
