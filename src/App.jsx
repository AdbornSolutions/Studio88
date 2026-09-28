import { useEffect, useState } from "react";
import { MotionProvider } from "./contexts/MotionContext";
import { Home } from "./pages/Home";
function App({ showPreloader = true, smoothScroll = true }) {
  const [phase, setPhase] = useState(showPreloader ? "loading" : "done");
  useEffect(() => {
    setPhase(showPreloader ? "loading" : "done");
  }, [showPreloader]);
  return <MotionProvider ready={phase !== "loading"}><Home
    phase={phase}
    onReveal={() => setPhase("revealing")}
    onDone={() => setPhase("done")}
    smoothScroll={smoothScroll}
  /></MotionProvider>;
}
export {
  App
};
