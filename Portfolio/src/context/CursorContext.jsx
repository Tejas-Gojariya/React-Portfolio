import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export const CursorContext = createContext(undefined);

const CursorContextProvider = (props) => {
  const [cursor, setCursor] = useState("default");

  const delay = 7;

  const dot = useRef(null);

  const cursorVisible = useRef(true);
  const cursorChoice = useRef(false);

  const endX = useRef(window.innerWidth / 2);
  const endY = useRef(window.innerHeight / 2);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mousemove", mouseMoveEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);

    animateDotOutline();

    return () => {
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);

      if (requestRef.current !== null) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const toggleCursorVisibility = () => {
    if (cursorVisible.current && dot.current) {
      dot.current.style.display = "block";
      dot.current.style.opacity = "1";
    } else if (dot.current) {
      dot.current.style.display = "none";
    }
  };

  const toggleCursors = () => {
    if (cursorChoice.current && dot.current) {
      setCursor("pointer");
      dot.current.style.opacity = "1";
      dot.current.style.transform = "translate(-50%,-50%) scale(1.25)";
    } else if (dot.current) {
      setCursor("default");
      dot.current.style.opacity = "1";
      dot.current.style.transform = "translate(-50%,-50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorChoice.current = true;
    toggleCursors();
  };

  const mouseOutEvent = () => {
    cursorChoice.current = false;
    toggleCursors();
  };

  const mouseEnterEvent = () => {
    cursorChoice.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorChoice.current = false;
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    if (dot.current) {
      dot.current.style.top = `${endY.current}px`;
      dot.current.style.left = `${endX.current}px`;
    }
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };

  return (
    <CursorContext.Provider
      value={{
        dot,
        cursor,
        mouseOverEvent,
        mouseOutEvent,
      }}
    >
      {props.children}
    </CursorContext.Provider>
  );
};

export const useCursorContext = () => {
  const context = useContext(CursorContext);
  if (!context) {
    throw new Error(
      "useCursorContext must be used within a CursorContextProvider"
    );
  }
  return context;
};

export default CursorContextProvider;
