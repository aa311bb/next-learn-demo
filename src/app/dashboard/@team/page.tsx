/**
 * 平行路由 - @team 槽位
 *
 * 这是 dashboard 页面的 @team 槽位内容
 * 可以独立加载、有独立的 loading/error 状态
 */

const members = [
  { name: "张三", role: "前端开发", avatar: "👨‍💻" },
  { name: "李四", role: "后端开发", avatar: "👩‍💻" },
  { name: "王五", role: "设计师", avatar: "🎨" },
];

export default function TeamSlot() {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-3">团队成员</h2>
      <div className="space-y-2">
        {members.map((member) => (
          <div
            key={member.name}
            className="flex items-center gap-3 p-2 bg-blue-50 rounded"
          >
            <span className="text-2xl">{member.avatar}</span>
            <div>
              <p className="font-medium text-sm">{member.name}</p>
              <p className="text-xs text-zinc-500">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
