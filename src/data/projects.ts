export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectEntry {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  metric?: string;
  context?: string;
  links?: ProjectLink[];
}

export const projects: ProjectEntry[] = [
  {
    title: "Autonomous Student Productivity Agent",
    description:
      "A stateful AI agent for scheduling, task management, retrieval, and tool use, built with LangGraph and FastAPI. It explores long-term memory, intent-aware routing, and human-in-the-loop interaction.",
    image: "projects/student-agent.svg",
    imageAlt:
      "Illustration of an AI agent coordinating memory, scheduling, retrieval, and tools",
    tags: ["LangGraph", "FastAPI", "Tool Use", "Long-term Memory"],
    context: "Course Project",
    links: [
      {
        label: "GitHub",
        url: "https://github.com/sustech-cs304/team-project-26spring-26s-33",
      },
    ],
  },
  {
    title: "Robust Audio Deepfake Detection",
    description:
      "Built a robust detection pipeline for environmental spoofing conditions, resolving collapsed XLSR feature fusion and improving detection reliability.",
    image: "projects/audio-deepfake.svg",
    imageAlt:
      "Audio waveform and spectrogram illustration for deepfake detection",
    tags: ["XLS-R", "Audio", "Deepfake Detection"],
    metric: "EER 0.44 → 0.07",
    context: "ICME 2026 ESDD2 Challenge",
  },
  {
    title: "Scaling Qwen3-14B Training on 4× GH200",
    description:
      "Optimized distributed Qwen3-14B pre-training with JAX/MaxText on four NVIDIA GH200 GPUs.",
    image: "projects/gh200-training.svg",
    imageAlt:
      "Four connected GPU blocks feeding a rising distributed training performance chart",
    tags: ["JAX", "MaxText", "GH200", "Distributed Training"],
    metric: "9.89K tokens/s",
    context: "ISC 2026 · SUSTech Supercomputing Team",
  },
  {
    title: "Making CloverLeaf 4.19× Faster",
    description:
      "Explored compiler, MPI, and NUMA-level optimizations for the CloverLeaf CFD workload.",
    image: "projects/cloverleaf-speedup.svg",
    imageAlt:
      "Benchmark bars illustrating a four point one nine times CloverLeaf speedup",
    tags: ["HPC", "MPI", "NUMA", "Compilers"],
    metric: "4.19× speedup",
    context: "CloverLeaf CFD",
  },
];
