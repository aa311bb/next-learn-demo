import Link from "next/link";

/**
 * Page - 首页组件
 *
 * 特点：
 * 1. page.tsx 是路由的 UI 组件
 * 2. 每个路由段都可以有自己的 page.tsx
 * 3. 可以是服务端组件（默认）或客户端组件
 */

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* 欢迎区域 */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          欢迎学习 Next.js App Router 👋
        </h1>
        <p className="text-zinc-600 text-lg">
          这个项目演示了 Next.js 的各种路由功能
        </p>
      </section>

      {/* 约定文件说明 */}
      <section className="space-y-4 mb-12">
        <h2 className="text-xl font-semibold mb-4">📚 基础约定文件</h2>

        <div className="grid gap-3">
          <FileCard
            name="layout.tsx"
            description="根布局 - 所有页面的外层包装，导航切换时保持不变"
            color="bg-green-50 border-green-200"
          />
          <FileCard
            name="template.tsx"
            description="模板 - 每次路由切换都会重新挂载，适合动画效果"
            color="bg-blue-50 border-blue-200"
          />
          <FileCard
            name="loading.tsx"
            description="加载状态 - 页面异步加载时显示的加载动画"
            color="bg-yellow-50 border-yellow-200"
          />
          <FileCard
            name="error.tsx"
            description="错误处理 - 捕获子组件错误并显示友好的错误页面"
            color="bg-red-50 border-red-200"
          />
          <FileCard
            name="not-found.tsx"
            description="404 页面 - 访问不存在的路由时显示"
            color="bg-gray-50 border-gray-200"
          />
        </div>
      </section>

      {/* 动态路由 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">🔢 动态路由</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-blue-700">
            使用 <code className="bg-blue-100 px-1 rounded">[参数名]</code> 语法创建动态路由段
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/docs/1" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            /docs/1
          </Link>
          <Link href="/docs/2" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            /docs/2
          </Link>
          <Link href="/docs/intro" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            /docs/intro
          </Link>
        </div>
      </section>

      {/* 平行路由 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">📊 平行路由</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-purple-700">
            使用 <code className="bg-purple-100 px-1 rounded">@slot</code> 语法同时渲染多个独立区域
          </p>
        </div>
        <Link href="/dashboard" className="inline-block px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
          查看仪表板
        </Link>
      </section>

      {/* API 路由 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">🔌 API 路由处理程序</h2>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-emerald-700">
            使用 <code className="bg-emerald-100 px-1 rounded">route.ts</code> 创建 RESTful API
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/api-test" className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors">
            API 测试工具
          </Link>
          <Link href="/chat" className="px-4 py-2 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition-colors">
            🤖 AI 聊天
          </Link>
        </div>
      </section>

      {/* 路由组 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">📁 路由组</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <p className="text-sm text-orange-700">
            使用 <code className="bg-orange-100 px-1 rounded">(group)</code> 语法组织路由，不影响 URL
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-orange-600 mb-2">(marketing) 组</p>
            <div className="flex flex-col gap-2">
              <Link href="/about" className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors text-center">
                /about
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition-colors text-center">
                /contact
              </Link>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-purple-600 mb-2">(admin) 组</p>
            <div className="flex flex-col gap-2">
              <Link href="/settings" className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-center">
                /settings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 文件结构 */}
      <section className="p-6 bg-zinc-100 rounded-xl">
        <h2 className="text-lg font-semibold mb-4">📂 项目文件结构</h2>
        <pre className="text-xs text-zinc-600 overflow-x-auto">
{`src/app/
├── layout.tsx          # 根布局
├── template.tsx        # 模板
├── page.tsx            # 首页 (/)
├── loading.tsx         # 加载状态
├── error.tsx           # 错误处理
├── not-found.tsx       # 404 页面
│
├── docs/
│   └── [id]/
│       └── page.tsx    # 动态路由 (/docs/1, /docs/2...)
│
├── dashboard/
│   ├── layout.tsx      # 平行路由布局
│   ├── page.tsx        # 主内容
│   ├── @team/          # @team slot
│   │   └── page.tsx
│   └── @analytics/     # @analytics slot
│       └── page.tsx
│
├── (marketing)/        # 路由组 - 不影响 URL
│   ├── layout.tsx      # marketing 共享布局
│   ├── about/
│   │   └── page.tsx    # /about
│   └── contact/
│       └── page.tsx    # /contact
│
└── (admin)/            # 路由组 - 不影响 URL
    ├── layout.tsx      # admin 共享布局
    └── settings/
        └── page.tsx    # /settings`}
        </pre>
      </section>
    </div>
  );
}

// 文件说明卡片组件
function FileCard({
  name,
  description,
  color,
}: {
  name: string;
  description: string;
  color: string;
}) {
  return (
    <div className={`p-4 rounded-lg border ${color}`}>
      <code className="font-mono font-semibold text-sm">{name}</code>
      <p className="text-zinc-600 text-sm mt-1">{description}</p>
    </div>
  );
}
