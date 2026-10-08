import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const Cube = ({ className = "" }) => {
    const cubeRef = useRef(null);

    useEffect(() => {
        const cube = cubeRef.current;

        if (!cube) return;

        const draggable = Draggable.create(cube, {
            type: "x,y",
            edgeResistance: 0.65,
        });

        return () => {
            draggable[0].kill();
        };
    }, []);

    return (
        <div
            ref={cubeRef}
            className={`absolute cursor-grab active:cursor-grabbing ${className}`}
        />
    );
};

export default Cube;