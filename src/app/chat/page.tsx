"use client";

/**
 * AI 聊天页面
 *
 * 使用 @ai-sdk/react 的 useChat Hook
 * 实现打字机效果的流式输出
 *
 * 特点：
 * 1. 自动处理消息状态
 * 2. 支持流式响应（打字机效果）
 * 3. 自动滚动到最新消息
 */

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useRef, useEffect, useState } from "react";

function textFromMessage(message: UIMessage) {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("");
}

export default function ChatPage() {
  // 滚动锚点引用
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">🤖 AI 对话助手</h1>

      {/* 说明 */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-700">
          使用智谱 GLM-4 模型，支持流式输出（打字机效果）
        </p>
      </div>

      {/* 聊天容器 */}
      <div className="border rounded-lg overflow-hidden bg-white">
        {/* 消息区域 */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-zinc-400 py-12">
              <p className="text-4xl mb-2">💬</p>
              <p>开始和 AI 对话吧！</p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-lg ${
                    message.role === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-zinc-100 text-zinc-800"
                  }`}
                >
                  {/* 消息角色标签 */}
                  <div className="text-xs opacity-60 mb-1">
                    {message.role === "user" ? "你" : "AI"}
                  </div>
                  {/* 消息内容 - 流式输出时逐字显示 */}
                  <div className="whitespace-pre-wrap">
                    {textFromMessage(message)}
                  </div>
                </div>
              </div>
            ))
          )}

          {/* 加载指示器 */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-100 px-4 py-2 rounded-lg">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"></span>
                  <span
                    className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></span>
                  <span
                    className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></span>
                </div>
              </div>
            </div>
          )}

          {/* 滚动锚点 */}
          <div ref={messagesEndRef} />
        </div>

        {/* 输入区域 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const text = input.trim();
            if (!text || isLoading) return;
            void sendMessage({ text });
            setInput("");
          }}
          className="border-t p-4 flex gap-2 bg-zinc-50"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="输入你的问题..."
            disabled={isLoading}
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading || !input?.trim()}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            发送
          </button>
        </form>
      </div>

      {/* 代码说明 */}
      <div className="mt-8 p-4 bg-zinc-50 rounded-lg">
        <h3 className="font-semibold mb-3">📖 代码说明</h3>
        <div className="text-sm text-zinc-600 space-y-2">
          <p>
            <code className="bg-zinc-200 px-1 rounded">useChat</code> - AI SDK
            提供的 Hook，自动管理消息状态
          </p>
          <p>
            <code className="bg-zinc-200 px-1 rounded">streamText</code> - 服务端流式输出
          </p>
        </div>
      </div>
    </div>
  );
}
