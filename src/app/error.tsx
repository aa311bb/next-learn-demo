"use client"; // 错误组件必须是客户端组件

import { useEffect } from "react";

/**
 * Error - 错误边界组件
 *
 * 特点：
 * 1. 用于捕获子组件的 JavaScript 错误
 * 2. 必须是客户端组件（使用 "use client"）
 * 3. 接收两个 props：
 *    - error: 错误对象
 *    - reset: 重置函数，点击后重新渲染
 * 4. 在开发环境下会显示更详细的错误信息
 */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }; // digest 是 Next.js 生成的错误唯一标识
  reset: () => void; // 重置错误边界的函数
}) {
  // 可以在这里记录错误到错误监控服务
  useEffect(() => {
    console.error("捕获到错误:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4">
      <div className="text-6xl mb-4">😱</div>
      <h2 className="text-2xl font-bold text-red-600 mb-2">出错了！</h2>
      <p className="text-zinc-600 mb-4">
        {error.message || "发生了未知错误"}
      </p>

      {/* 重试按钮 */}
      <button
        onClick={reset}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        重试
      </button>
    </div>
  );
}
