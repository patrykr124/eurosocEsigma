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

interface Props {
    url: string;
}

export default function ParcipleRed({url} : Props) {

    return (
        <div className="particle-container">
            <ParticleImage
                src={url}
                width={600}
                height={500}
                scale={0.4}
                entropy={10}
                maxParticles={6000}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor="#E3E3E3"
            />
        </div>
            );
            }
