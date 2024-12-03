'use client'

import {motion, useScroll, useTransform} from 'framer-motion'
import Image from 'next/image'

export default function MorgueeTextRed() {


    const { scrollYProgress } = useScroll()
    const x = useTransform(scrollYProgress, [0, 1], [50, -1000])

    return (
        <div id="Onas" className='bg-gradient-to-b from-black to-red-500'>
            <div className='w-full overflow-x-hidden'>
                <div className='hidden lg:flex prologue pb-48 pt-0 flex-row overflow-hidden gap-32 justify-center'>
                    <motion.div style={{x}} className="min-w-[280px]">
                        <Image src='/assets/img/certificate/nask.png' alt='certificate' width={280} height={280}/>
                    </motion.div>
                    <motion.div style={{x}} className="min-w-[280px]">
                        <Image src='/assets/img/certificate/exatel.png' alt='certificate' width={280} height={280}/>
                    </motion.div>
                    <motion.div style={{x}} className="min-w-[280px]">
                        <Image src='/assets/img/certificate/hyper.png' alt='certificate' width={280} height={280}/>
                    </motion.div>
                    <motion.div style={{x}} className="min-w-[280px]">
                        <Image src='/assets/img/certificate/adva.png' alt='certificate' width={280} height={280}/>
                    </motion.div>
                </div>

                {/*MOBILE*/}

                <div className='lg:hidden  prologue pb-48 pt-0 flex flex-row gap-4 overflow-hidden justify-center'>
                    <motion.div style={{x}} className="min-w-[180px]">
                        <Image src='/assets/img/certificate/nask.png' alt='certificate' width={180} height={280}/>
                    </motion.div>
                    <motion.div style={{x}} className="min-w-[180px]">
                        <Image src='/assets/img/certificate/exatel.png' alt='certificate' width={180} height={280}/>
                    </motion.div>
                    <motion.div style={{x}} className="min-w-[180px]">
                        <Image src='/assets/img/certificate/hyper.png' alt='certificate' width={180} height={280}/>
                    </motion.div>
                    <motion.div style={{x}} className="min-w-[180px]">
                        <Image src='/assets/img/certificate/adva.png' alt='certificate' width={180} height={280}/>
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
