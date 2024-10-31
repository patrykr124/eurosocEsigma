import Link from "next/link"
import {FlipWords} from "../../flip-words";
import EncryptButton from "../../EncryptButton";

function Header() {

    const words = ["wdrożeniach", "szkoleniach", "audytach", "bezpieczeństwie"];

    return (
        <div className="w-full h-[85vh] overflow-hidden" style={{
            backgroundImage: "linear-gradient(180deg, rgba(255,255,255,0.1) 50%, rgba(0,0,0,1) 100%)",
        }}>
            < div className="relative h-full w-full flex flex-col  justify-center items-center">
                <video className="absolute inset-0 -z-10 h-full w-full object-cover" autoPlay loop muted playsInline
                       preload="none">
                    <source src='/assets/video/eurosoc.video.blue1.mp4' type="video/mp4"/>
                </video>

                <div className="wrapper flex justify-start">
                    <div className="title max-w-4xl gap-8 flex flex-col items-start">
                        <div className="top">
                            <p className="p-semibold-20 text-white">Tworzymy Bezpieczne Cyfrowe Rozwiązania</p>
                            <h1 className="h1-bold text-white">Twoje cyberbezpieczeństwo oparte na <FlipWords
                                words={words}/></h1></div>


                        <div className="space-x-5 text-end">
                            <EncryptButton textData="Zapisz się" className="bg-blue-1 hover:bg-blue-1-hover"/>
                            <Link className="button-white" href="#">Więcej</Link>
                        </div>
                    </div>
                </div>
            </div>

        </ div>
    )
}

export default Header