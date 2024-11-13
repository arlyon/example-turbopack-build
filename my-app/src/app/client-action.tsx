"use server";

import * as Keyv from "keyv";

const keyv = new Keyv.default(process.env.KV_URL);

export async function action() {
  let calls = await keyv.get("calls");

  calls = calls + 1;
  await keyv.set("calls", calls);

  return calls;
}
