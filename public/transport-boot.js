// public/transport-boot.js
"use strict";

(async () => {
  try {
    // This comes from baremux/index.js
    const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

  if ((await connection.getTransport()) !== "/epoxy/index.mjs") {
  await connection.setTransport("/epoxy/index.mjs", [{ wisp: "wss://bare-server.fly.dev/wisp/" }]);
}

    console.log("BareMux transport ready in this tab");
  } catch (err) {
    console.error("Failed to init BareMux transport", err);
  }
})();
