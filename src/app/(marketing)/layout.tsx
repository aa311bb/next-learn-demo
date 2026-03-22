/**
 * 路由组 - (marketing) 的 Layout
 *
 * 特点：
 * 1. 使用 (文件夹名) 语法，括号内的名称不会出现在 URL 中
 * 2. 可以对一组路由应用共同的布局
 * 3. 不会影响 URL 结构
 *
 * 示例：
 * - (marketing)/about → URL: /about
 * - (marketing)/contact → URL: /contact
 */

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-l-4 border-orange-400 pl-4">
      {/* 营销页面专用标记 */}
      <div className="mb-4 text-xs text-orange-600 bg-orange-50 inline-block px-2 py-1 rounded">
        🎯 路由组: (marketing) - 共享布局
      </div>
      {children}
    </div>
  );
}
