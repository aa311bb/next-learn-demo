/**
 * 平行路由 - @analytics 槽位
 *
 * 这是 dashboard 页面的 @analytics 槽位内容
 * 演示数据分析面板
 */

const stats = [
  { label: "访问量", value: "12,345", change: "+12%" },
  { label: "用户数", value: "1,234", change: "+5%" },
  { label: "转化率", value: "3.2%", change: "-2%" },
];

export default function AnalyticsSlot() {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-3">数据分析</h2>
      <div className="space-y-2">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex justify-between items-center p-2 bg-green-50 rounded"
          >
            <span className="text-sm text-zinc-600">{stat.label}</span>
            <div className="text-right">
              <span className="font-semibold">{stat.value}</span>
              <span
                className={`text-xs ml-2 ${
                  stat.change.startsWith("+")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
