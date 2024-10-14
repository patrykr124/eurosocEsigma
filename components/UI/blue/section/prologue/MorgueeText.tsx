'use client'

import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import Image from 'next/image'
export default function MorgueeText() {


    const { scrollYProgress } = useScroll()
    const x = useTransform(scrollYProgress, [0, 1], [50, -1000])

    return (
        <div className=' ' style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,1) 19%, rgba(0,35,235,1) 100%)" }}>
            <div className='w-full overflow-x-hidden'>
                <div className='prologue pb-48 pt-0 flex flex-row overflow-hidden gap-56 justify-center'>
                    <motion.div style={{ x }} className="min-w-[280px]">
                        <Image className='flex' src='/assets/img/certificate/sigma.png' alt='certificate' width={280} height={280} />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[280px]">
                        <Image src='/assets/img/certificate/nask.png' alt='certificate' width={280} height={280} />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[280px]">
                        <Image src='/assets/img/certificate/exatel.png' alt='certificate' width={280} height={280} />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[280px]">
                        <Image src='/assets/img/certificate/3s.png' alt='certificate' width={280} height={280} />
                    </motion.div>


                </div>
            </div>
        </div>
    )
}
