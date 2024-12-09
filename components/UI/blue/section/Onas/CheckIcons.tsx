
import {motion} from "framer-motion";
import {CheckCheckIcon} from "lucide-react";
import React from "react";
import {useTranslations} from "use-intl";

function CheckIcons() {
    const t = useTranslations("dlaczego");
    return (
        <>
            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                        viewport={{amount: 1, once: true}} transition={{duration: 0.7, ease: "easeOut"}}
                        className="flex gap-2 ">
                <CheckCheckIcon size={28} color='blue'/>
                <p className='font-bold'>{t("checkIcon1")}
                </p>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                        viewport={{amount: 1, once: true}} transition={{duration: 0.8, ease: "easeOut"}}
                        className="flex gap-2 ">
                <CheckCheckIcon size={28} color='blue'/>
                <p className='font-bold'>{t("checkIcon2")}
                </p>
            </motion.div>
            <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
                        viewport={{amount: 1, once: true}} transition={{duration: 0.85, ease: "easeOut"}}
                        className="flex gap-2 ">
                <CheckCheckIcon size={28} color='blue'/>
                <p className='font-bold'>{t("checkIcon3")}
                </p>
            </motion.div>
        </>
    )
        ;
}

export default CheckIcons;