export const initMock = async () => {
  if (typeof window === "undefined") {
    const server = await import("./server").then(module => module.server);
    server.listen({
      onUnhandledRequest: "bypass", // 핸들러에 없는 요청은 실제 네트워크로 우회
    });
  } else {
    const worker = await import("./worker").then(module => module.worker);
    await worker.start({
      onUnhandledRequest: "bypass", // 핸들러에 없는 요청은 실제 네트워크로 우회
    });
  }
};
