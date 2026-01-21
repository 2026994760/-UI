
export const mockSystemStatus = () => ({
  engine: "震慑 AI Turbo 引擎",
  version: "3.5.0-static",
  cpu_load: (10 + Math.random() * 5).toFixed(1) + "%",
  gpu_memory: "44.2GB / 80GB",
  active_sessions: 14 + Math.floor(Math.random() * 5),
  api_latency: "2ms (Edge Optimized)",
  timestamp: Date.now()
});

export const db_models = [
  { id: "1", type: "LLM", name: "智算核心 A", url: "https://api.openai.com/v1", modelName: "gpt-4o", temperature: 0.7, status: "active" },
  { id: "2", type: "ASR", name: "语音网关-01", url: "https://speech.api.cloud/v2", modelName: "whisper-large-v3", status: "active" },
  { id: "3", type: "EMBEDDING", name: "向量中心", url: "https://vec.engine.local", modelName: "text-embedding-3-small", status: "active" },
];

export const db_users = [
  { id: "u1", name: "陈建国", dept: "总经办", role: "系统管理员", permissions: ["sys_admin", "write"], status: "在线" },
  { id: "u2", name: "张主任", dept: "行政部", role: "高级行政岗", permissions: ["write", "minutes"], status: "在线" },
];
