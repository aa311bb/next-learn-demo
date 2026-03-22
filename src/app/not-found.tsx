import Link from "next/link";

/**
 * NotFound - 404 页面组件
 *
 * 特点：
 * 1. 当访问不存在的路由时显示
 * 2. 也可以通过 notFound() 函数主动触发
 * 3. 可以在根目录定义（全局 404），也可以在特定路由段定义
 *
 * 使用场景：
 * - 用户输入错误的 URL
 * - 动态路由中找不到对应数据时，调用 notFound()
 */

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <div className="text-8xl mb-4">🔍</div>
      <h2 className="text-3xl font-bold text-zinc-800 mb-2">
        页面未找到
      </h2>
      <p className="text-zinc-500 mb-6 text-center">
        抱歉，您访问的页面不存在或已被移除
      </p>

      {/* 返回首页链接 */}
      <Link
        href="/"
        className="px-6 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
      >
        返回首页
      </Link>
    </div>
  );
}
