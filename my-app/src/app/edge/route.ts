// import { geolocation } from "@vercel/functions";
import { type NextRequest, NextResponse } from "next/server";

// const { Buffer } = require("buffer");

export function GET(request: NextRequest): NextResponse {
  // const geoCountry = geolocation(request).country;
  return new NextResponse();
}

export const runtime = "edge";
