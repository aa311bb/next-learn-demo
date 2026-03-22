/**
 * Template - 模板组件
 *
 * 特点：
 * 1. 与 layout 类似，也是包装子组件
 * 2. 区别：每次路由切换时会重新创建（重新挂载）
 * 3. 适合用于：
 *    - 进入/离开动画
 *    - 页面切换时的重置效果
 *    - 需要每次都重新执行的逻辑
 *
 * 执行顺序：Layout -> Template -> Page
 */

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in">
      {/* 模板标识 - 帮助理解 template 的作用 */}
      <div className="fixed bottom-4 right-4 bg-blue-500 text-white text-xs px-2 py-1 rounded opacity-50">
        Template 组件
      </div>

      {children}
    </div>
  );
}
