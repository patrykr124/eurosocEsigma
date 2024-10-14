"use client";
import dynamic from "next/dynamic";
import {
    forces,
    ParticleForce,
    ParticleOptions,
    Vector,
} from "react-particle-image";

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
    mass: () => 80,
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

export default function Parciple() {

    return (
        <ParticleImage
            src={"/assets/img/logoIcon.png"}
            width={600}
            height={500}
            scale={0.4}
            entropy={10}
            maxParticles={6000}
            particleOptions={particleOptions}
            mouseMoveForce={motionForce}
            touchMoveForce={motionForce}
            backgroundColor="#f2f2f2"
        />
    );
}
