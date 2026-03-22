/**
 * API 路由处理程序 - /api/users
 *
 * RESTful API 设计：
 * - GET /api/users     → 获取用户列表
 * - POST /api/users    → 创建新用户
 *
 * 特点：
 * 1. 使用 route.ts 文件定义路由处理程序
 * 2. 导出名为 HTTP 方法名的函数 (GET, POST, PUT, DELETE 等)
 * 3. 返回 NextResponse 对象
 */

import { log } from 'console'
import { NextResponse } from 'next/server'

// 初始化全局存储（模拟数据库）
if (!(globalThis as any).__users__) {
  ;(globalThis as any).__users__ = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', age: 25 },
    { id: 2, name: '李四', email: 'lisi@example.com', age: 30 },
    { id: 3, name: '王五', email: 'wangwu@example.com', age: 28 },
  ]
}

// 获取和设置用户数据的辅助函数
const getUsers = () => (globalThis as any).__users__
const saveUsers = (users: any[]) => {
  ;(globalThis as any).__users__ = users
}

/**
 * GET /api/users
 * 获取用户列表
 *
 * 支持查询参数：
 * - ?search=xxx  按名称搜索
 * - ?limit=10    限制返回数量
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const search = searchParams.get('search')
  const limit = searchParams.get('limit')

  const users = getUsers()
  // 过滤数据
  let result = users
  if (search) {
    result = users.filter((u: any) =>
      u.name.toLowerCase().includes(search.toLowerCase()),
    )
  }

  // 限制数量
  if (limit) {
    result = result.slice(0, parseInt(limit))
  }

  return NextResponse.json({
    success: true,
    data: result,
    total: result.length,
    timestamp: new Date().toISOString(),
  })
}

/**
 * POST /api/users
 * 创建新用户
 *
 * 请求体示例：
 * { "name": "新用户", "email": "new@example.com", "age": 20 }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, age } = body
    const users = getUsers()

    // 简单验证
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'name 和 email 是必填字段' },
        { status: 400 },
      )
    }

    // 检查邮箱是否已存在
    if (users.some((u: any) => u.email === email)) {
      return NextResponse.json(
        { success: false, error: '该邮箱已被使用' },
        { status: 409 },
      )
    }

    // 创建新用户
    const newUser = {
      id: Math.max(...users.map((u: any) => u.id)) + 1,
      name,
      email,
      age: age || null,
    }

    users.push(newUser)
    saveUsers(users)

    return NextResponse.json(
      { success: true, data: newUser, message: '用户创建成功' },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: '无效的 JSON 格式' },
      { status: 400 },
    )
  }
}
