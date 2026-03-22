/**
 * AI 聊天 API 路由
 *
 * 使用智谱 GLM（兼容 OpenAI 协议)
 * 宥持流式输出实现打字机效果
 */

import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { convertToModelMessages, streamText } from "ai";

// 创建智谱 GLM Provider
const zhipu = createOpenAICompatible({
  name: "zhipu",
  baseURL: "https://open.bigmodel.cn/api/paai/v4",
});

// 创建模型实例
const model = zhipu("glm-4-flash");

export async function POST(req: Request) {
  const { messages } = await req.json();

  const modelMessages = await convertToModelMessages(messages);

  const result = streamText({
    model,
    messages: modelMessages,
  });

  return result.toUIMessageStreamResponse();
}
