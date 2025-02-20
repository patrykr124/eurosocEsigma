'use client'
import {motion} from "framer-motion";
function Map() {



    return (
        <motion.div initial={{opacity: 0, y: 100}} whileInView={{opacity: 1, y: 0}}
        viewport={{amount: 0.2,once:true}} transition={{duration: 0.4, ease: "easeOut"}} className=''>
            <div className="flex flex-col justify-center items-center w-full overflow-hidden ">
                <iframe id="cyberthreat-map" src="https://threatmap.checkpoint.com/"
                        className="w-screen -mt-4 h-dvh pointer-events-none border-0 "></iframe>
            </div>
        </motion.div>
    )
}

export default Map