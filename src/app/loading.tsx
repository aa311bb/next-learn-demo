/**
 * Loading - 加载状态组件
 *
 * 特点：
 * 1. 在页面内容加载时显示（基于 React Suspense）
 * 2. 会自动替换正在加载的页面内容
 * 3. 适用于：
 *    - 数据获取时的等待状态
 *    - 页面切换时的过渡效果
 * 4. 配合 page.tsx 中的异步操作使用
 *
 * 工作原理：
 * - Next.js 会自动将 loading.tsx 包裹在 Suspense 边界中
 * - 当 page.tsx 中的异步操作进行时，显示此组件
 */

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      {/* 加载动画 */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
      </div>

      <p className="mt-4 text-zinc-500">加载中...</p>
    </div>
  );
}
