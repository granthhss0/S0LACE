import { cpSync, mkdirSync } from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const resolve = (pkg) => require.resolve(pkg).replace(/\/[^\/]+$/, "");

mkdirSync("public/scram", { recursive: true });
mkdirSync("public/baremux", { recursive: true });
mkdirSync("public/epoxy", { recursive: true });

cpSync(resolve("@mercuryworkshop/scramjet/dist"), "public/scram", { recursive: true });
cpSync(resolve("@mercuryworkshop/bare-mux/dist"), "public/baremux", { recursive: true });
cpSync(resolve("@mercuryworkshop/epoxy-transport/dist"), "public/epoxy", { recursive: true });

console.log("Done — transport files copied to public/");