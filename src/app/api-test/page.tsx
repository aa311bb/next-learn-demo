"use client";

/**
 * API 测试页面
 *
 * 在浏览器中测试 RESTful API
 * 演示：GET, POST, PUT, PATCH, DELETE 请求
 */

import { useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  age: number | null;
}

export default function ApiTestPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });
  const [searchId, setSearchId] = useState("1");

  // GET - 获取用户列表
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data.data);
      setResult(data);
    } catch (error) {
      setResult({ error: "请求失败" });
    }
    setLoading(false);
  };

  // GET - 获取单个用户
  const fetchUserById = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${searchId}`);
      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ error: "请求失败" });
    }
    setLoading(false);
  };

  // POST - 创建用户
  const createUser = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age ? parseInt(formData.age) : null,
        }),
      });
      const data = await res.json();
      setResult(data);
      if (data.success) {
        fetchUsers();
      }
    } catch (error) {
      setResult({ error: "请求失败" });
    }
    setLoading(false);
  };

  // PUT - 完整更新
  const updateUser = async (method: "PUT" | "PATCH") => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${searchId}`, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: formData.age ? parseInt(formData.age) : null,
        }),
      });
      const data = await res.json();
      setResult(data);
      if (data.success) {
        fetchUsers();
      }
    } catch (error) {
      setResult({ error: "请求失败" });
    }
    setLoading(false);
  };

  // DELETE - 删除用户
  const deleteUser = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${searchId}`, {
        method: "DELETE",
      });
      const data = await res.json();
      setResult(data);
      if (data.success) {
        fetchUsers();
      }
    } catch (error) {
      setResult({ error: "请求失败" });
    }
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">🧪 API 测试工具</h1>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          测试 RESTful API：GET、POST、PUT、PATCH、DELETE
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左侧：操作面板 */}
        <div className="space-y-4">
          {/* 用户 ID */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">用户 ID</h3>
            <input
              type="number"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="输入用户 ID"
            />
          </div>

          {/* 表单数据 */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">用户数据（POST/PUT/PATCH）</h3>
            <div className="space-y-2">
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="姓名"
              />
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="邮箱"
              />
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                className="w-full border rounded px-3 py-2"
                placeholder="年龄"
              />
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">HTTP 方法</h3>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={fetchUsers}
                disabled={loading}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                GET /api/users
              </button>
              <button
                onClick={fetchUserById}
                disabled={loading}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:opacity-50"
              >
                GET /api/users/:id
              </button>
              <button
                onClick={createUser}
                disabled={loading}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                POST /api/users
              </button>
              <button
                onClick={() => updateUser("PUT")}
                disabled={loading}
                className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 disabled:opacity-50"
              >
                PUT /api/users/:id
              </button>
              <button
                onClick={() => updateUser("PATCH")}
                disabled={loading}
                className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 disabled:opacity-50"
              >
                PATCH /api/users/:id
              </button>
              <button
                onClick={deleteUser}
                disabled={loading}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:opacity-50"
              >
                DELETE /api/users/:id
              </button>
            </div>
          </div>
        </div>

        {/* 右侧：结果显示 */}
        <div className="space-y-4">
          {/* 响应结果 */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">响应结果</h3>
            <pre className="bg-zinc-900 text-green-400 p-4 rounded text-sm overflow-auto max-h-64">
              {loading ? "加载中..." : JSON.stringify(result, null, 2)}
            </pre>
          </div>

          {/* 用户列表 */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">用户列表</h3>
              <button
                onClick={fetchUsers}
                className="text-sm text-blue-500 hover:underline"
              >
                刷新
              </button>
            </div>
            {users.length === 0 ? (
              <p className="text-zinc-500 text-sm">点击"GET /api/users"加载数据</p>
            ) : (
              <div className="space-y-2">
                {users.map((user) => (
                  <div
                    key={user.id}
                    className="flex justify-between items-center p-2 bg-zinc-50 rounded text-sm"
                  >
                    <span className="font-mono text-zinc-500">#{user.id}</span>
                    <span>{user.name}</span>
                    <span className="text-zinc-500">{user.email}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* API 说明 */}
      <div className="mt-8 p-4 bg-zinc-50 rounded-lg">
        <h3 className="font-semibold mb-3">📖 API 端点说明</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <code className="text-green-600">GET /api/users</code>
            <p className="text-zinc-500 mt-1">获取用户列表</p>
          </div>
          <div>
            <code className="text-green-600">GET /api/users/:id</code>
            <p className="text-zinc-500 mt-1">获取单个用户</p>
          </div>
          <div>
            <code className="text-blue-600">POST /api/users</code>
            <p className="text-zinc-500 mt-1">创建新用户</p>
          </div>
          <div>
            <code className="text-yellow-600">PUT /api/users/:id</code>
            <p className="text-zinc-500 mt-1">完整更新用户</p>
          </div>
          <div>
            <code className="text-orange-600">PATCH /api/users/:id</code>
            <p className="text-zinc-500 mt-1">部分更新用户</p>
          </div>
          <div>
            <code className="text-red-600">DELETE /api/users/:id</code>
            <p className="text-zinc-500 mt-1">删除用户</p>
          </div>
        </div>
      </div>
    </div>
  );
}
