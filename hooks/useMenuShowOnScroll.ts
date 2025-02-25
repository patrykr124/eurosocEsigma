'use client'
import {useMotionValueEvent, useScroll} from "framer-motion";
import React from "react";


const UseMenuShowOnScroll = (setHiddenMenu: React.Dispatch<React.SetStateAction<boolean>>) => {
    const {scrollY} = useScroll();
    useMotionValueEvent(scrollY, 'change', (value) => {
        const prev = scrollY.getPrevious()
        if (prev && value < prev) {
            setHiddenMenu(false)
        } else {
            setHiddenMenu(true);
        }
    });
}

export default UseMenuShowOnScroll;