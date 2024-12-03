'use client'
import Link from "next/link";
import Image from "next/image";
import {motion} from 'framer-motion'
import {useState} from "react";
import SvgLine from "@/constants/SvgLine";

export default function Home() {
    const [hover, setHover] = useState(false);
    const [hover2, setHover2] = useState(false);

    const vsgVariants = {
        hidden: {
            strokeDasharray: 2500, strokeDashoffset: 0, opacity: 0,
        },
        visible: {

            strokeDasharray: 0,
            opacity: 1
        }
    }


    return (
        <main className=" h-dvh overflow-hidden">
            <div className="w-full h-full relative flex" style={{
                backgroundImage: "url('/assets/img/hand.png') ",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
                <Link onMouseMove={() => setHover2(true)} onMouseLeave={() => setHover2(false)} href="/dashboard/blue"
                      className="w-1/2 h-full  relative RightLinkHand overflow-hidden transition-all duration-300 z-50">
                    <div className="text translate-x-[11%] -translate-y-[3%] flex flex-col items-start h-dvh gap-10 py-20">
                        <motion.p variants={vsgVariants} initial="hidden" animate={hover2 ? 'visible' : 'hidden'}
                                  transition={{
                                      duration: 0.5, ease: "easeInOut", delay: 0.12
                                  }} className="text-gray-3 max-w-lg">Strona BLUE TEAM oferuje szeroki zakres usług z
                            zakresu ochrony i utrzymania bezpieczeństwa IT. Specjalizujemy się w wdrażaniu nowoczesnych
                            rozwiązań, takich jak segmentacja sieci, mechanizmy silnego uwierzytelniania czy ochrona
                            przed wyciekami danych.<br/><br/> Świadczymy również audyty zgodności z normami, opracowanie
                            dokumentacji SZBI oraz szkolenia z cyberbezpieczeństwa dla różnych grup
                            kadry.<br/><br/> Ponadto
                            zapewniamy wsparcie techniczne, monitoring infrastruktury i odzyskiwanie kopii
                            zapasowych,<br/> by Twoja organizacja działała bezpiecznie i niezawodnie.
                        </motion.p>
                        <motion.svg className="rotate-[250deg] absolute w-full flex -translate-x-[4%] translate-y-[350%]" width="900" height="70"
                                    viewBox="0 0 2537 1369" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" initial="hidden"
                                    animate={hover2 ? 'visible' : 'hidden'}
                                    variants={vsgVariants} transition={{
                            duration: 0.5, ease: "easeInOut"
                        }}>
                            <SvgLine/>
                        </motion.svg>

                    </div>
                </Link>
                <Link onMouseMove={() => setHover(true)} onMouseLeave={() => setHover(false)} href="/dashboard/red"
                      className="w-1/2 h-full relative leftLinkHand  overflow-hidden  transition-all duration-300 z-50">
                    <div className="text flex flex-col items-end h-dvh gap-10 py-20 ">
                        <motion.p variants={vsgVariants} initial="hidden" animate={hover ? 'visible' : 'hidden'}
                                  transition={{
                                      duration: 0.5, ease: "easeInOut", delay: 0.12
                                  }} className="text-gray-3 max-w-lg">Strona RED TEAM oferuje usługi z zakresu
                            bezpieczeństwa IT,<br/> w tym audyty, takie jak testy penetracyjne, socjotechniczne<br/> i
                            skany podatności, które pomagają wykrywać zagrożenia.<br/><br/> Organizujemy szkolenia z
                            cyberbezpieczeństwa oraz wspieramy<br/> w obsłudze incydentów, zapewniając szybkie
                            reagowanie<br/> na zagrożenia.<br/><br/> Oferujemy także cykliczne testy i trzecią linię
                            wsparcia
                            technicznego, dbając o
                            bezpieczeństwo organizacji.
                        </motion.p>
                        <motion.svg className="rotate-[105deg] absolute w-full flex -translate-x-[10%] translate-y-[300%]   scale-x-[-1]" width="900" height="70"
                                    viewBox="0 0 2537 1369" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" initial="hidden"
                                    animate={hover ? 'visible' : 'hidden'}
                                    variants={vsgVariants} transition={{
                            duration: 0.5, ease: "easeInOut"
                        }}>
                            <SvgLine/>
                        </motion.svg>

                    </div>

                </Link>

                {/*/image/*/}

                <div className="rightFire size-[160%] -translate-x-[28%] -translate-y-[12%] absolute  ">
                    <Image className=" object-contain" fill src="/assets/img/bluefire.png" alt="bluefire"/>


                </div>
                <div className="leftFire size-[160%] absolute -translate-x-[10%] -translate-y-[14%]  overflow-hidden">
                    <Image className=" object-contain" fill src="/assets/img/redfire1.png" alt="redfire"/>

                </div>
            </div>
        </main>
    );
}
