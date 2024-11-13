import path from "path";
import fs from "fs";

import * as Keyv from "keyv";
import Image from "next/image";
import { Suspense } from "react";
import { hashSync } from "@node-rs/bcrypt";
import { Client } from "./client";

export const dynamic = "force-dynamic";

export async function GetVisitorCount() {
  const keyv = new Keyv.default(process.env.KV_URL);
  const visits = await keyv.get("visits");

  if (visits) {
    await keyv.set("visits", visits + 1);
  } else {
    await keyv.set("visits", 1);
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return <span>{visits}</span>;
}

export default async function Home() {
  const data = (
    await fs.promises.readFile(path.join(process.cwd(), "data.txt"), "utf8")
  ).trim();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
        <div>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="mt-1 font-bold tracking-widest text-blue-500">
            TURBOPACK-TRACE
          </h1>
        </div>
        <div className="flex items-center w-full font-mono text-sm text-center">
          <span>You are visitor #</span>
          <Suspense fallback={<span className="blur-sm">12</span>}>
            <GetVisitorCount />
          </Suspense>
        </div>
        <div className="flex items-center w-full font-mono text-sm text-center">
          Hash of "abc": {hashSync("abc")}
        </div>
        <div className="flex items-center w-full font-mono text-sm text-center">
          Reading the file `path.join(process.cwd(),"data.txt")`: {data}
        </div>
        <Client />
        <div className="flex items-center w-full font-mono text-sm text-center">
          <a href="/pages">Go to Pages subsection</a>
        </div>
        <div className="flex items-center w-full font-mono text-sm text-center">
          <a href="/otel">Go to OTEL test</a>
        </div>
        <div className="flex items-center w-full font-mono text-sm text-center">
          <a href="/edge">Go to Edge API test</a>
        </div>
      </main>
    </div>
  );
}
