/**
 * 关于页面 - 路由组 (marketing)
 *
 * URL: /about
 * 属于 (marketing) 路由组，共享 marketing 布局
 */

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">关于我们</h1>

      <div className="bg-white border border-zinc-200 rounded-lg p-6">
        <p className="text-zinc-600 mb-4">
          这是关于页面，属于 <code className="bg-zinc-100 px-1 rounded">(marketing)</code> 路由组。
        </p>
        <p className="text-zinc-600">
          注意左侧的橙色边框，这是 marketing 路由组的共享布局样式。
        </p>
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded text-sm">
        <p className="font-mono text-zinc-500">文件路径: app/(marketing)/about/page.tsx</p>
        <p className="font-mono text-zinc-500">URL 路径: /about</p>
      </div>
    </div>
  );
}
