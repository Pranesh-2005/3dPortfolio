"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";

const getRandomHeight = () => `${Math.random() * 100}vh`;

const NyanCat = () => {
  const [divs, setDivs] = useState<{ id: string }[]>([]);
  const bufferRef = useRef(""); // ✅ persistent buffer

  const spawnDiv = () => {
    setDivs(prev => [...prev, { id: Math.floor(Math.random() * 100000).toString() }]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ✅ Check if key exists and is a string
      if (!e.key || typeof e.key !== 'string') return;
      
      bufferRef.current += e.key.toLowerCase();

      if (bufferRef.current.endsWith("js")) {
        spawnDiv();
        bufferRef.current = ""; // ✅ reset after trigger
      }

      if (bufferRef.current.length > 5) {
        bufferRef.current = bufferRef.current.slice(-5);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-screen h-screen overflow-hidden z-[-1]">
      <AnimatePresence>
        {divs.length > 0 && (
          <div className="fixed w-screen flex left-0 top-16">{divs.length}</div>
        )}
      </AnimatePresence>

      {divs.map(div => (
        <AnimatedDiv
          key={div.id}
          id={div.id}
          onClick={() => console.log("clicked")}
          onCompleted={() =>
            setDivs(prev => prev.filter(d => d.id !== div.id))
          }
        />
      ))}
    </div>
  );
};

const AnimatedDiv = ({
  id,
  onCompleted,
  onClick
}: {
  id: string;
  onClick: () => void;
  onCompleted: () => void;
}) => {
  const randY = getRandomHeight();
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: "100vw",
      y: randY,
      transition: { duration: 5, ease: "linear" },
    });
  }, [controls, randY]);

  return (
    <motion.div
      initial={{ x: "-20vw", y: randY }}
      animate={controls}
      onAnimationComplete={onCompleted}
      onClick={onClick}
    >
      <img
        src="/assets/nyan-cat.gif"
        className={cn("fixed z-10 h-40 w-auto")}
        alt="Nyan Cat"
      />
    </motion.div>
  );
};

export default NyanCat;