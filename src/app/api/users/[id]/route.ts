/**
 * API 路由处理程序 - /api/users/[id]
 *
 * RESTful API 设计：
 * - GET /api/users/[id]    → 获取单个用户
 * - PUT /api/users/[id]    → 更新用户（完整更新）
 * - PATCH /api/users/[id]  → 部分更新用户
 * - DELETE /api/users/[id] → 删除用户
 *
 * 动态路由参数通过 params 获取
 */

import { NextResponse } from "next/server";

// 引用共享的用户数据（实际项目应该使用数据库）
// 这里为了简化，直接在同一个文件中定义
const getUsers = () => {
  // 从全局存储获取（模拟）
  return (globalThis as any).__users__ || [
    { id: 1, name: "张三", email: "zhangsan@example.com", age: 25 },
    { id: 2, name: "李四", email: "lisi@example.com", age: 30 },
    { id: 3, name: "王五", email: "wangwu@example.com", age: 28 },
  ];
};

const saveUsers = (users: any[]) => {
  (globalThis as any).__users__ = users;
};

// 初始化
if (!(globalThis as any).__users__) {
  (globalThis as any).__users__ = [
    { id: 1, name: "张三", email: "zhangsan@example.com", age: 25 },
    { id: 2, name: "李四", email: "lisi@example.com", age: 30 },
    { id: 3, name: "王五", email: "wangwu@example.com", age: 28 },
  ];
}

/**
 * GET /api/users/[id]
 * 获取单个用户详情
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const users = getUsers();
  const user = users.find((u: any) => u.id === parseInt(id));

  if (!user) {
    return NextResponse.json(
      { success: false, error: `用户 ID ${id} 不存在` },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: user,
  });
}

/**
 * PUT /api/users/[id]
 * 完整更新用户（需要提供所有字段）
 */
export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const users = getUsers();
  const userIndex = users.findIndex((u: any) => u.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json(
      { success: false, error: `用户 ID ${id} 不存在` },
      { status: 404 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, age } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "name 和 email 是必填字段" },
        { status: 400 }
      );
    }

    // 更新用户
    users[userIndex] = {
      id: parseInt(id),
      name,
      email,
      age: age || null,
    };

    saveUsers(users);

    return NextResponse.json({
      success: true,
      data: users[userIndex],
      message: "用户更新成功",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "无效的 JSON 格式" },
      { status: 400 }
    );
  }
}

/**
 * PATCH /api/users/[id]
 * 部分更新用户（只更新提供的字段）
 */
export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const users = getUsers();
  const userIndex = users.findIndex((u: any) => u.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json(
      { success: false, error: `用户 ID ${id} 不存在` },
      { status: 404 }
    );
  }

  try {
    const body = await request.json();

    // 只更新提供的字段
    users[userIndex] = {
      ...users[userIndex],
      ...body,
      id: parseInt(id), // 确保 ID 不被修改
    };

    saveUsers(users);

    return NextResponse.json({
      success: true,
      data: users[userIndex],
      message: "用户部分更新成功",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "无效的 JSON 格式" },
      { status: 400 }
    );
  }
}

/**
 * DELETE /api/users/[id]
 * 删除用户
 */
export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const users = getUsers();
  const userIndex = users.findIndex((u: any) => u.id === parseInt(id));

  if (userIndex === -1) {
    return NextResponse.json(
      { success: false, error: `用户 ID ${id} 不存在` },
      { status: 404 }
    );
  }

  // 删除用户
  const deletedUser = users.splice(userIndex, 1)[0];
  saveUsers(users);

  return NextResponse.json({
    success: true,
    data: deletedUser,
    message: "用户删除成功",
  });
}
