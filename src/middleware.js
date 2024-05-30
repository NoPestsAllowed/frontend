import { NextResponse, NextRequest } from "next/server";
// const { createHash } = require("crypto");
// const cryptoObj = window.crypto || window.msCrypto;

export function middleware(request) {
    // console.log(
    //     "HERE",
    //     request.nextUrl,
    //     "kbkbkbkb",
    //     request.nextUrl.search.split("?")[1],
    //     request.nextUrl.searchParams
    // );
    // const currentUrl = request.nextUrl.origin + request.nextUrl.pathname;
    // // const params = new URLSearchParams(request.nextUrl.search);
    // // console.log("HERE HERE", params);
    // const originalSearch = request.nextUrl.search;
    // const signature = originalSearch.substr(originalSearch.lastIndexOf("signature") + 10);
    // if (signature === -1) {
    //     throw new Error("No signature provided");
    // }
    // console.log(signature, originalSearch);
    // let ttlEnd;
    // const ttlStr = originalSearch.substr(originalSearch.lastIndexOf("expire") + 7);
    // if (ttlStr === -1) {
    //     ttlEnd = Infinity;
    // }
    // ttlEnd = ttlStr;
    // console.log(signature, ttlEnd, ttlEnd < Date.now(), ttlStr);
    // if (ttlEnd < Date.now()) {
    //     console.log("EXPIRED");
    // }
    // if (
    //     signature ===
    //     cryptoObj.createHash("sha256").update(currentUrl).update(process.env.ACCESS_TOKEN_SECRET).digest("hex")
    // ) {
    // }
}

export const config = {
    matcher: "/resolution/:resolution*",
};
