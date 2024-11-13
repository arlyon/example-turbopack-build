import { generateText } from "ai";
import { MockLanguageModelV1 } from "ai/test";

export default async function Home() {
  const { text } = await generateText({
    model: new MockLanguageModelV1({
      doGenerate: async () => ({
        rawCall: { rawPrompt: null, rawSettings: {} },
        finishReason: "stop",
        usage: { promptTokens: 10, completionTokens: 20 },
        text: `Hello, world!`,
      }),
    }),
    prompt: "Hello, test!",
    experimental_telemetry: { isEnabled: true },
  });

  return <span>{text}</span>;
}

export const dynamic = "force-dynamic";
