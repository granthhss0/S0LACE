import { cpSync, mkdirSync } from "fs";

mkdirSync("public/scram", { recursive: true });
mkdirSync("public/baremux", { recursive: true });
mkdirSync("public/epoxy", { recursive: true });

cpSync("node_modules/@mercuryworkshop/scramjet/dist", "public/scram", { recursive: true });
cpSync("node_modules/@mercuryworkshop/bare-mux/dist", "public/baremux", { recursive: true });
cpSync("node_modules/@mercuryworkshop/epoxy-transport/dist", "public/epoxy", { recursive: true });

console.log("Done — transport files copied to public/");