
# 智能办公平台 - 极速部署版

这是一个高端、AI 驱动的办公平台演示 Demo，已针对 **GitHub Pages** 进行了纯静态优化，无需 Python 或任何后端服务器。

## 🚀 极速上线流程 (GitHub)

1. **新建仓库**：在 GitHub 上创建一个名为 `office-ai` 的公开仓库。
2. **推送代码**：
   ```bash
   git init
   git add .
   git commit -m "🚀 部署纯静态演示版"
   git branch -M main
   git remote add origin https://github.com/你的用户名/office-ai.git
   git push -u origin main
   ```
3. **开启部署**：
   - 进入仓库的 **Settings** -> **Pages**。
   - 在 **Build and deployment** 下，将 **Source** 设为 `GitHub Actions`。
   - 系统会自动触发 `.github/workflows/deploy.yml` 脚本。
4. **访问链接**：大约 1 分钟后，你就能在 `https://你的用户名.github.io/office-ai/` 访问到完美的演示页面。

## 🛠 技术特点
- **无感加载**：使用 `esm.sh/run` 运行时编译，无需 `npm install`。
- **离线 API**：所有后端逻辑已集成至前端 `mockApi.ts`，支持离线或弱网演示。
- **极致视觉**：内置高频系统脉冲动画，全方位震撼甲方。
