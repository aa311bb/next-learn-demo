import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 配置 Google 字体
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 页面元数据 - 用于 SEO 和浏览器标签页标题
export const metadata: Metadata = {
  title: "Next.js 学习项目",
  description: "学习 Next.js App Router 的各种约定文件",
};

/**
 * RootLayout - 根布局组件
 *
 * 特点：
 * 1. 是所有页面的最外层包装器
 * 2. 会在页面切换时保持不变（不会重新渲染）
 * 3. 必须包含 html 和 body 标签
 * 4. children 会被替换为当前路由的内容
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* 导航栏 - 在所有页面都会显示 */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-zinc-200 z-50">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
            <h1 className="font-bold text-lg">🚀 Next.js 学习</h1>
            <div className="flex gap-4 text-sm">
              <a href="/" className="hover:text-blue-600 transition-colors">首页</a>
              <a href="/docs/1" className="hover:text-blue-600 transition-colors">动态路由</a>
              <a href="/dashboard" className="hover:text-blue-600 transition-colors">平行路由</a>
              <a href="/api-test" className="hover:text-blue-600 transition-colors">API测试</a>
              <a href="/chat" className="hover:text-blue-600 transition-colors">AI聊天</a>
              <a href="/about" className="hover:text-blue-600 transition-colors">路由组</a>
            </div>
          </div>
        </nav>

        {/* 页面内容区域 */}
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* 页脚 - 在所有页面都会显示 */}
        <footer className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
          © 2024 Next.js 学习项目
        </footer>
      </body>
    </html>
  );
}
