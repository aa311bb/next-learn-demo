/**
 * 平行路由 Layout
 *
 * 特点：
 * 1. 使用 @folder 语法定义"槽位"(slots)
 * 2. slots 作为 props 传入 layout 组件
 * 3. 可以同时渲染多个独立的页面内容
 * 4. 每个 slot 可以有独立的 loading、error 状态
 *
 * 用途：
 * - 仪表板多个面板
 * - 复杂布局的独立区域
 */

export default function DashboardLayout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  team: React.ReactNode;    // 来自 @team 文件夹
  analytics: React.ReactNode; // 来自 @analytics 文件夹
}) {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">📊 仪表板（平行路由示例）</h1>

      {/* 提示信息 */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-purple-700">
          💡 平行路由允许同时渲染多个页面区域。
          下面的 <code className="bg-purple-100 px-1 rounded">@team</code> 和 <code className="bg-purple-100 px-1 rounded">@analytics</code> 是两个独立的平行路由。
        </p>
      </div>

      {/* 平行路由区域 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* @team slot */}
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-4">
          <div className="text-xs text-blue-500 mb-2 font-mono">@team slot</div>
          {team}
        </div>

        {/* @analytics slot */}
        <div className="border-2 border-dashed border-green-300 rounded-lg p-4">
          <div className="text-xs text-green-500 mb-2 font-mono">@analytics slot</div>
          {analytics}
        </div>
      </div>

      {/* children - 默认内容 */}
      <div className="border-2 border-dashed border-zinc-300 rounded-lg p-4">
        <div className="text-xs text-zinc-500 mb-2 font-mono">children (page.tsx)</div>
        {children}
      </div>
    </div>
  );
}
