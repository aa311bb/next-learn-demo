/**
 * Dashboard 主页面 - children 内容
 *
 * 这是 dashboard/layout.tsx 中的 children 部分
 */

export default function DashboardPage() {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-3">仪表板概览</h2>
      <p className="text-zinc-600 text-sm">
        这是 dashboard 的主内容区域（children）。
        上面的团队和数据分析面板是通过平行路由独立渲染的。
      </p>

      <div className="mt-4 p-4 bg-zinc-50 rounded text-sm text-zinc-500">
        <p>📁 文件结构：</p>
        <pre className="mt-2 text-xs">
{`dashboard/
├── layout.tsx      ← 接收 team, analytics slots
├── page.tsx        ← children 内容（当前页面）
├── @team/
│   └── page.tsx    ← team slot 内容
└── @analytics/
    └── page.tsx    ← analytics slot 内容`}
        </pre>
      </div>
    </div>
  );
}
