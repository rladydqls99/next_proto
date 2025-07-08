"use client";

import { useEffect, useState } from "react";

const MswProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;

    const init = async () => {
      const initMsw = await import("../../__mock__/index").then(module => module.initMock);
      await initMsw();
      setIsReady(true);
    };

    if (!isReady) {
      init();
    }
  }, [isReady]);

  if (!isReady) {
    return <div>MSW Loading...</div>;
  }

  return children;
};

export default MswProvider;
