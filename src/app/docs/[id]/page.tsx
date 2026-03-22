/**
 * 动态路由 - [id]
 *
 * 特点：
 * 1. 使用 [参数名] 语法创建动态路由段
 * 2. params 会作为 props 传入组件
 * 3. 可以匹配 /docs/1、/docs/abc、/docs/任何值
 *
 * 示例：
 * - /docs/1 → params.id = "1"
 * - /docs/intro → params.id = "intro"
 */

// 模拟文档数据
const docs: Record<string, { title: string; content: string }> = {
  "1": {
    title: "入门指南",
    content: "这是 Next.js 的入门教程，帮助你快速上手。",
  },
  "2": {
    title: "路由基础",
    content: "学习 Next.js 的文件系统路由是如何工作的。",
  },
  "3": {
    title: "数据获取",
    content: "了解如何在服务端组件中获取数据。",
  },
};

export default function DocPage({
  params,
}: {
  params: Promise<{ id: string }>; // Next.js 15+ params 是异步的
}) {
  // 在实际应用中，这里会是异步获取数据
  // const { id } = await params;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">📖 文档详情（动态路由）</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          💡 当前访问路径: <code className="bg-blue-100 px-2 py-0.5 rounded">/docs/[id]</code>
        </p>
        <p className="text-sm text-blue-700 mt-1">
          参数值会在下方显示（需要 async/await 获取）
        </p>
      </div>

      <DocContent params={params} />

      <div className="mt-8 flex gap-4">
        <a href="/docs/1" className="px-3 py-1 bg-zinc-100 rounded hover:bg-zinc-200">文档 1</a>
        <a href="/docs/2" className="px-3 py-1 bg-zinc-100 rounded hover:bg-zinc-200">文档 2</a>
        <a href="/docs/3" className="px-3 py-1 bg-zinc-100 rounded hover:bg-zinc-200">文档 3</a>
      </div>
    </div>
  );
}

// 分离出异步组件来展示 params
async function DocContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const doc = docs[id];

  if (!doc) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-600">❌ 找不到 ID 为 "{id}" 的文档</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-zinc-200 rounded-lg p-6">
      <p className="text-sm text-zinc-500 mb-2">文档 ID: <code className="bg-zinc-100 px-2 py-0.5 rounded">{id}</code></p>
      <h2 className="text-xl font-semibold mb-2">{doc.title}</h2>
      <p className="text-zinc-600">{doc.content}</p>
    </div>
  );
}
