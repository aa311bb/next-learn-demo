/**
 * 联系页面 - 路由组 (marketing)
 *
 * URL: /contact
 * 属于 (marketing) 路由组，共享 marketing 布局
 */

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">联系我们</h1>

      <div className="bg-white border border-zinc-200 rounded-lg p-6">
        <p className="text-zinc-600 mb-4">
          这是联系页面，同样属于 <code className="bg-zinc-100 px-1 rounded">(marketing)</code> 路由组。
        </p>

        <div className="space-y-2 text-sm">
          <p>📧 邮箱: contact@example.com</p>
          <p>📞 电话: 123-456-7890</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-zinc-50 rounded text-sm">
        <p className="font-mono text-zinc-500">文件路径: app/(marketing)/contact/page.tsx</p>
        <p className="font-mono text-zinc-500">URL 路径: /contact</p>
      </div>
    </div>
  );
}
