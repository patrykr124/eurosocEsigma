"use client"
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {useRouter} from "next/navigation";


interface EncryptButtonProps {
    textData: string;
    icon?: React.ReactNode;
    className?: string;
    onClick: string;
}

const EncryptButtonRed = ({ textData, icon, className, onClick }: EncryptButtonProps) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const route = useRouter();
    const TARGET_TEXT = `${textData}`;
    const CYCLES_PER_LETTER = 2;
    const SHUFFLE_TIME = 50;

    const CHARS = "!@#$%^&*():{};|,.<>/?";

    const [text, setText] = useState(TARGET_TEXT);



    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = TARGET_TEXT.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);

        setText(TARGET_TEXT);
    };

    function handleClick() {
        if (onClick) {
            route.push(onClick);
        }
    }
    return (
        <motion.button
            whileHover={{
                scale: 1.025,
            }}
            whileTap={{
                scale: 0.975,
            }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            className={`group relative overflow-hidden rounded-lg tracking-wide px-4 h-fit py-2 font-medium uppercase text-white transition-colors duration-500 ${className}`}
            onClick={handleClick}
        >
            <div className="relative z-10 flex items-center gap-2">

                <span>{text}</span>
                {icon}
            </div>
            <motion.span
                initial={{
                    y: "100%",
                }}
                animate={{
                    y: "-100%",
                }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }}
                className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-white to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
        </motion.button >
    );
};

export default EncryptButtonRed;