'use client';

import {motion} from 'framer-motion';

const blackBox = {
    initial: {
        height: "100vh",
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 0.8,
            ease: [0.87, 0, 0.13, 1],
        },
    },
    exit: {height: 0, transition: {duration: 1, ease: [0.87, 0, 0.13, 1]}},
};

const PageTransition = () => {
    return (

        <motion.div
            className="fixed top-0 left-0 h-screen w-full bg-black z-[9999] pointer-events-none"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={blackBox}
        />

    );
};

export default PageTransition;
