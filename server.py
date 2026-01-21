
import os
import webbrowser
import mimetypes
import uuid
import time
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pydantic import BaseModel
import uvicorn

# 调整 MIME 类型：将 .tsx 设为文本，由前端加载器进行转译
mimetypes.add_type('text/plain', '.tsx')
mimetypes.add_type('text/plain', '.ts')

app = FastAPI(
    title="智能办公助手 - 企业级算力中枢",
    description="后端 API 支撑系统 v3.2.0"
)

# --- 模拟内存数据库 ---
class ModelData(BaseModel):
    id: Optional[str] = None
    type: str
    name: str
    url: str
    modelName: str
    temperature: Optional[float] = 0.7
    status: str = "active"

class UserData(BaseModel):
    id: Optional[str] = None
    name: str
    dept: str
    role: str
    permissions: List[str]
    status: str = "离线"

db_models = [
    {"id": "1", "type": "LLM", "name": "智算核心 A", "url": "https://api.openai.com/v1", "modelName": "gpt-4o", "temperature": 0.7, "status": "active"},
    {"id": "2", "type": "ASR", "name": "语音网关-01", "url": "https://speech.api.cloud/v2", "modelName": "whisper-large-v3", "status": "active"},
]

db_users = [
    {"id": "u1", "name": "陈建国", "dept": "总经办", "role": "系统管理员", "permissions": ["sys_admin", "write"], "status": "在线"},
]

# --- 业务 API 接口 ---

@app.get("/api/v1/status")
async def get_system_status():
    return {
        "engine": "智能办公助手 Turbo",
        "version": "3.2.0",
        "cpu_load": "12.5%",
        "gpu_memory": "44.2GB / 80GB",
        "active_sessions": 14,
        "api_latency": "24ms",
        "timestamp": time.time()
    }

@app.get("/api/v1/models")
async def list_models():
    return db_models

@app.get("/api/v1/users")
async def list_users():
    return db_users

# --- 静态文件与路由 ---

current_dir = os.path.dirname(os.path.abspath(__file__))

# 优先处理组件静态资源
app.mount("/components", StaticFiles(directory=os.path.join(current_dir, "components")), name="components")

@app.get("/{full_path:path}")
async def serve_all(full_path: str):
    # 如果请求的是具体文件，则尝试返回
    file_path = os.path.join(current_dir, full_path)
    if os.path.isfile(file_path):
        return FileResponse(file_path)
    
    # 否则返回 index.html (支持 SPA 路由)
    return FileResponse(os.path.join(current_dir, "index.html"))

def print_banner(port):
    banner = f"""
    \033[94m
    ███████╗██╗  ██╗███████╗███╗   ██╗ ██████╗ ███████╗██╗  ██╗███████╗
    ╚══███╔╝██║  ██║██╔════╝████╗  ██║██╔════╝ ██╔════╝██║  ██║██╔════╝
      ███╔╝ ███████║█████╗  ██╔██╗ ██║╚█████╗  █████╗  ███████║█████╗  
     ███╔╝  ██╔══██║██╔══╝  ██║╚██╗██║ ╚═══██╗ ██╔══╝  ██╔══██║██╔══╝  
    ███████╗██║  ██║███████╗██║ ╚████║██████╔╝ ███████╗██║  ██║███████╗
    ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═════╝  ╚══════╝╚═╝  ╚═╝╚══════╝
    \033[0m
    \033[1m[智能办公助手 - 企业级数字化中枢]\033[0m
    -------------------------------------------------------
    [*] 服务地址: \033[4mhttp://0.0.0.0:{port}\033[0m
    [*] 状态监控: \033[32mRUNNING (Production Ready)\033[0m
    -------------------------------------------------------
    """
    print(banner)

if __name__ == "__main__":
    # 获取环境变量中的端口，默认为 8000 (Render/Railway 会自动注入 PORT)
    port = int(os.environ.get("PORT", 8000))
    print_banner(port)
    
    # 仅在本地开发环境且明确要求时打开浏览器
    if os.environ.get("AUTOBROWSER") == "1":
        webbrowser.open(f"http://127.0.0.1:{port}")
    
    uvicorn.run("server:app", host="0.0.0.0", port=port, log_level="info")
