"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode | any;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
        // target: ref
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0
        );
        setActiveCard(closestBreakpointIndex);
    });

    const linearGradients = [
        "linear-gradient(to bottom right, var(--blue-500), var(--black))",
        "linear-gradient(to bottom right, var(--black), var(--stone-800))",
        "linear-gradient(to top left, var(--blue-500), var(--black))",
    ];

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0]
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard]);

    return (
        <motion.div style={{ background: backgroundGradient }}
            className="flex justify-center relative space-x-10 py-10"

        >
            <div className="stickycart gap-12 wrapper  flex overflow-y-auto  h-[35rem]" ref={ref}>
                <div className="div flex-1 relative flex items-start ">

                    <div >
                        {content.map((item, index) => (
                            <div key={item.title + index} className="my-36 pb-10 flex flex-col gap-2">
                                <motion.h2
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.1,
                                    }}
                                    className="h4-medium text-slate-100"
                                >
                                    {item.title}
                                </motion.h2>
                                <motion.p
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0.1,
                                    }}
                                    className="text-kg text-slate-300 "
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                        ))}
                        <div className="h-40" />
                    </div>
                </div>
                <div

                    className={cn(
                        "hidden flex-1 lg:flex sticky top-0 overflow-hidden ",
                        contentClassName
                    )}
                >
                    {content[activeCard].content ?? null}
                </div>
            </div>
        </motion.div>
    );
};
