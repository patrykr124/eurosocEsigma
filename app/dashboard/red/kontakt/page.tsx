import {MdEmail} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";
import {FaCity} from "react-icons/fa";
import {AlarmClock} from "lucide-react";
import Link from "next/link";

function Page() {
    return (
        <section className="">
            <div className="sectionPadding justify-center items-center flex" style={{
                backgroundImage: "url('/assets/img/services/emailred.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundAttachment: "fixed"
            }}>
                <h1 className="h1-bold text-gray-3 text-center">Kontakt</h1>
            </div>
            <div className="common-padding flex" style={{
                backgroundImage: "url('/assets/img/background.png')",
                backgroundPosition: "top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>
                <div className="sectionPadding flex lg:flex-row flex-col flex-wrap wrapper gap-16">
                    <div className="right flex flex-col flex-1 gap-4 items-center lg:items-start justify-center">
                        <div className="overflow-hidden rounded-xl shadow-xl w-full">
                            <div className="hidden lg:block ">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.2832805001403!2d18.529015277025668!3d54.52850038561913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda72011a3a47d%3A0x54d1139821f716df!2sPolska%2020%2C%2081-339%20Gdynia!5e0!3m2!1spl!2spl!4v1731420935926!5m2!1spl!2spl"
                                    height="500" style={{border: 0, width: '100%'}}  loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div className="block lg:hidden w-screen relative">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2315.2832805001403!2d18.529015277025668!3d54.52850038561913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda72011a3a47d%3A0x54d1139821f716df!2sPolska%2020%2C%2081-339%20Gdynia!5e0!3m2!1spl!2spl!4v1731420935926!5m2!1spl!2spl"
                                    height="500" style={{border: 0, width: '100%'}} loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="left flex flex-1 justify-center items-center">
                        <div className="w-full h-[500px] bg-black-1 rounded-xl p-10 gap-4 flex flex-col shadow-xl">
                            <h1 className="h3-bold text-white">Info</h1>
                            <div className="box flex flex-col justify-evenly h-full ">
                                <div className="flex gap-4">
                                <MdEmail color="white" size="30"/>
                                    <Link href="mailto:Info@eurosoc.pl"><p className="text-white">Info@eurosoc.pl</p>
                                    </Link>
                                </div>
                                <div className="flex gap-4">
                                    <AiFillPhone color="white" size="30"/>
                                    <Link href="tel:+48587746289"><p className="text-white">+48 58 774 62 89</p></Link>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <FaCity color="white" size="30"/>
                                    <p className="text-white">ul. Polska 20<br/> 81-339 Gdynia <br/>Polska</p>
                                </div>
                                <div className="flex gap-4  items-center">
                                    <AlarmClock color="white" size="30"/>
                                    <p className="text-white">pon-pt,<br></br>8:00 - 16:00</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Page;