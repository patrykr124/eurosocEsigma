"use client"
import dynamic from "next/dynamic";
import {forces, ParticleForce, ParticleOptions, Vector,} from "react-particle-image";
import {useEffect, useState} from "react";

// Dynamiczny import komponentu ParticleImage z wyłączonym SSR
const ParticleImage = dynamic(() => import("react-particle-image"), {
    ssr: false,
});



const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
        const pixel = image.get(x, y);
        return pixel.a > 0;
    },
    color: ({ x, y, image }) => {
        const pixel = image.get(x, y);
        return `rgba(${pixel.r}, ${pixel.g}, ${pixel.b}, ${pixel.a / 255})`;
    },
    radius: () => Math.random() * 1.5 + 1.5,
    mass: () => 100,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) => {
        return new Vector(
            canvasDimensions.width / 2,
            canvasDimensions.height / 2
        );
    },
};

const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 20);
};

interface Props {
    url: string | any;
    size: number ;
}

export default function ParcipleService({url, size} : Props) {
    const [windowSize, setWindowSize] = useState<number>(size)

    useEffect(() => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setWindowSize(0.15)
        } else {
            setWindowSize(size)
        }
    }, []);

    return (
        <ParticleImage
            src={url}
            width={600}
            height={600}
            scale={windowSize}
            entropy={20}
            maxParticles={8500}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor="#ffffff"
        />
    );
}
