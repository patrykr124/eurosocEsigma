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
                <motion.div style={{ x }} className="min-w-[280px] h-[100px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/nask.png' alt='certificate' fill className='object-contain' />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[280px] h-[100px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/exatel.png' alt='certificate' fill className='object-contain' />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[280px] h-[100px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/hyper.png' alt='certificate' fill className='object-contain' />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[280px] h-[100px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/adva.png' alt='certificate' fill className='object-contain' />
                    </motion.div>
                </div>

                {/*MOBILE*/}

                <div className='lg:hidden  prologue pb-48 pt-0 flex flex-row gap-4 overflow-hidden justify-center'>
                <motion.div style={{ x }} className="min-w-[180px] h-[50px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/nask.png' alt='certificate' fill className='object-contain' />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[180px] h-[50px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/exatel.png' alt='certificate' fill className='object-contain' />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[180px] h-[50px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/hyper.png' alt='certificate' fill className='object-contain' />
                    </motion.div>
                    <motion.div style={{ x }} className="min-w-[180px] h-[50px] relative">
                        <Image  sizes="(max-width: 768px) 180px, (max-width: 1200px) 280px, 100vw" src='/assets/img/certificate/adva.png' alt='certificate' fill className='object-contain' />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}
