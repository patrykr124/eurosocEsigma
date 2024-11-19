"use client"
import dynamic from "next/dynamic";
import {forces, ParticleForce, ParticleOptions, Vector,} from "react-particle-image";

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
    size: number | undefined;
}

export default function ParcipleService({url, size} : Props) {

    return (
        <ParticleImage
            src={url}
            width={600}
            height={600}
            scale={size}
            entropy={20}
            maxParticles={8500}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor="#ffffff"
        />
    );
}
