/**
 * 设置页面 - 路由组 (admin)
 *
 * URL: /settings
 * 属于 (admin) 路由组，有独立的管理布局
 */

export default function SettingsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">系统设置</h1>

      <div className="bg-white border border-zinc-200 rounded-lg p-6">
        <p className="text-zinc-600 mb-4">
          这是设置页面，属于 <code className="bg-zinc-100 px-1 rounded">(admin)</code> 路由组。
        </p>
        <p className="text-zinc-600">
          注意左侧的紫色边框，这是 admin 路由组的共享布局样式。
        </p>

        <div className="mt-4 space-y-3">
          <div className="flex justify-between items-center p-3 bg-zinc-50 rounded">
            <span className="text-sm">深色模式</span>
            <span className="text-xs text-zinc-400">开关</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-zinc-50 rounded">
            <span className="text-sm">通知设置</span>
            <span className="text-xs text-zinc-400">开关</span>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded text-sm">
        <p className="font-mono text-zinc-500">文件路径: app/(admin)/settings/page.tsx</p>
        <p className="font-mono text-zinc-500">URL 路径: /settings</p>
      </div>
    </div>
  );
}
