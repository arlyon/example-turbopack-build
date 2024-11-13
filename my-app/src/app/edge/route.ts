import { geolocation } from "@vercel/functions";
import { type NextRequest, NextResponse } from "next/server";

const { Buffer } = require("buffer");

export function GET(request: NextRequest): NextResponse {
  const geoCountry = geolocation(request).country;
  return NextResponse.json({
    geoCountry,
    acceptLanguage: request.headers.get("accept-language"),
    buffer: Buffer.from([1, 2]).toString("hex"),
  });
}

export const runtime = "edge";
