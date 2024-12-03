'use client'
import {motion, useMotionTemplate} from "framer-motion";


export function BoxAnimationHover({mouseX, mouseY, randomString}: any) {


    let maskImage = useMotionTemplate`radial-gradient(100px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = {maskImage, WebkitMaskImage: maskImage};
    return (
        <div className="pointer-events-none ">

            <motion.div
                className="absolute inset-0 rounded-2xl bg-grey-400 opacity-0  group-hover/box:opacity-100 backdrop-blur-xl transition duration-500"
                style={style}
            />
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/box:opacity-100"
                style={style}
            >
                <p className="absolute inset-0 text-sm h-full w-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
                    {randomString}
                </p>
            </motion.div>
        </div>
    )
}


