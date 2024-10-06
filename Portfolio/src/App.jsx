import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Cursor from "./Components/Cursor";
import CursorContextProvider from "./context/CursorContext";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

function App() {
  const location = useLocation();

  return (
    <>
      <CursorContextProvider>
        <Cursor />

        <AnimatePresence initial={true}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </CursorContextProvider>
    </>
  );
}

export default App;
