# Next.js App Router 学习项目

这是一个用于学习 Next.js App Router 的示例项目。

## 功能演示

- 📚 **基础约定文件** - layout、template、loading、error、not-found
- 🔢 **动态路由** - 使用 `[id]` 语法
- 📊 **平行路由** - 使用 `@slot` 语法同时渲染多个区域
- 📁 **路由组** - 使用 `(group)` 语法组织路由
- 🔌 **RESTful API** - 使用 route.ts 创建 API
- 🤖 **AI 聊天** - 智谱 GLM 流式输出（打字机效果）

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 项目结构

```
src/app/
├── layout.tsx          # 根布局
├── template.tsx        # 模板
├── page.tsx            # 首页
├── loading.tsx         # 加载状态
├── error.tsx           # 错误处理
├── not-found.tsx       # 404 页面
├── docs/[id]/          # 动态路由
├── dashboard/          # 平行路由
│   ├── @team/
│   └── @analytics/
├── (marketing)/        # 路由组
├── (admin)/            # 路由组
├── api/                # API 路由
└── chat/               # AI 聊天页面
```

## 技术栈

- [Next.js 16](https://nextjs.org/)
- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [AI SDK](https://sdk.vercel.ai/)
- [智谱 GLM](https://bigmodel.cn/)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
