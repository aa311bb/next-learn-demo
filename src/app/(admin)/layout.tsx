/**
 * 路由组 - (admin) 的 Layout
 *
 * 这是管理后台路由组的专用布局
 * 与 (marketing) 组有不同的样式
 */

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-4 border-purple-500 pl-4 bg-purple-50/30 -mx-4 px-4 py-2 rounded">
      {/* 管理后台专用标记 */}
      <div className="mb-4 text-xs text-purple-600 bg-purple-100 inline-block px-2 py-1 rounded">
        🔒 路由组: (admin) - 管理布局
      </div>
      {children}
    </div>
  );
}
