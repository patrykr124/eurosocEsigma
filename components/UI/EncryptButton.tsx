"use client"
import {useRef, useState} from "react";
import {motion} from "framer-motion";
import {useRouter} from "next/navigation";
import {Link} from "@/navigation";



interface EncryptButtonProps {
    textData: string;
    icon?: React.ReactNode;
    className?: string;
    onClick?: string;
}

const EncryptButton = ({textData, icon, className, onClick}: EncryptButtonProps) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
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
            className={`group relative flex justify-center items-center flex-col overflow-hidden w-[230px] rounded-lg tracking-wide px-4 h-fit py-2 font-medium uppercase text-gray-3 transition-colors duration-500 ${className}`}
           
        >
            <Link href={`${onClick}`} >
                <div className="relative z-10 flex items-center gap-2">

                    <span>{text}</span>
                    {icon}

                </div>
            </Link>
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
                className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
        </motion.button>

    );
};

export default EncryptButton;