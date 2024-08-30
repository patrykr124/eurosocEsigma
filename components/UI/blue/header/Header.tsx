import Link from "next/link"
import { FlipWords } from "../../flip-words";
import Example from "../../EncryptButton";
import EncryptButton from "../../EncryptButton";

function Header() {

    const words = ["Wdrożeniach", "Szkoleniach", "Monitoringu", "Wsparciu"];

    // style={{ background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(255,255,0,0) 40%)' }}
    return (
        <div className="w-full h-screen overflow-hidden" >
            <div className="relative h-full w-full flex flex-col  justify-center items-center">
                <video className="absolute inset-0 -z-10 h-full w-full object-cover" autoPlay loop muted playsInline preload="none">
                    <source src='/assets/video/eurosoc.video.blue.mp4' type="video/mp4" />
                </video>

                <div className="wrapper flex justify-start">
                    <div className="title max-w-4xl gap-6 flex flex-col items-start">
                        <div className="top"> <p className="p-semibold-20 text-white">WE CREAT DIGITAL  PRODUCT</p>
                            <h1 className="h1-bold text-white">Twoje Cyberbezpieczeństwo oparte na <FlipWords words={words} /></h1></div>
                        <div className="bottom"> <p className="p-regular-18 text-white">IT producers worldwide face similar challenges around animal welfare, farm profitability, product and work efficiency.</p></div>

                        <div className="space-x-5 text-end">
                            <EncryptButton textData="Zapisz się" />
                            <Link className="button-white" href="#">Więcej</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header