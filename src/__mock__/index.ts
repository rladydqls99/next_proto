export const initMock = async () => {
  if (typeof window === "undefined") {
    const server = await import("./server").then(module => module.server);
    server.listen();
  } else {
    const worker = await import("./worker").then(module => module.worker);
    await worker.start();
  }
};
