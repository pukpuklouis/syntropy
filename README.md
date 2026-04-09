# _________             __                        
  / ___/__  ______  / /__________  ____  __  __
  \__ \/ / / / __ \/ __/ ___/ __ \/ __ \/ / / /
 ___/ / /_/ / / / / /_/ /  / /_/ / /_/ / /_/ / 
/____/\__, /_/ /_/\__/_/   \____/ .___/\__, /  
     /____/                    /_/    /____/

**Syntropy** is a high-performance framework designed to find **patterns in the chaos** of autonomous agentic execution.

By utilizing isolated sandboxes and rapid-fire execution units, Syntropy transforms unpredictable "chaos storms" into structured, observable, and actionable intelligence.

---

## 🌀 The Philosophy: Chaos $\rightarrow$ Pattern

In the era of autonomous AI, agentic workflows often descend into a "Chaos Storm"—a non-deterministic, unpredictable explosion of actions and outputs. 

**Syntropy** acts as the invisible harness. It is the process of increasing order and structure within a system. We don't just run code; we capture the emerging patterns within the noise.

- **Chaos:** The entropy of multiple, uncoordinated agents acting in parallel.
- **Syntropy:** The emergence of structured intelligence, predictable outputs, and actionable data.

---

## 🚀 Core Components

### 💎  (The Container)
The foundational layer. A secure, ephemeral, and isolated environment (powered by **E2B**) where agents can execute code, manipulate files, and interact with the world without risking the host system.

### ✨  (The Trigger)
The engine of execution.  are lightweight, high-velocity agents designed to "ignite" specific tasks, execute logic within a sandbox, and extract the resulting "pattern" (structured data).

---

## 🛠️ Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [TypeScript](https://www.typescriptlang.org/)
- An [E2B API Key](https://e2b.dev/)

### Installation



### Running the Demo

1. Create a `.env` file in the root directory:
   ```env
   E2B_API_KEY=your_api_key_here
   ```

2. Start the development server:
   
> syntropy@1.0.0 dev
> ts-node src/index.ts

---

## 🛠️ Development

### Build for Production

> syntropy@1.0.0 build
> tsc

### Run Compiled Version

> syntropy@1.0.0 start
> node dist/index.js

---

## 📜 License
MIT
