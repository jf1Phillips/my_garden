"use client";

import { useState } from "react";

export default function Home() {
  const [mousePos, setMousePos] = useState<[number, number]>([0, 0]);

  const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const bounds = e.currentTarget.getBoundingClientRect();
    setMousePos([e.clientX - bounds.left, e.clientY - bounds.top]);
  }

  return (<>
    <div>
      <div className="w-full bg-black flex justify-center">
        <div onMouseMove={mouseMove} className="relative w-[90%] overflow-hidden">
          <p className="absolute bg-blue-200 z-10 duration-100 h-[20px] whitespace-nowrap"
            style={{
              left: mousePos[0] + 15,
              top: mousePos[1] - 20,
            }}
            >{mousePos[0].toFixed(0)} {mousePos[1].toFixed(0)}</p>
          <img className="w-full" src="/garden.png"/>
        </div>
      </div>
    </div>
    </>);
}
