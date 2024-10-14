import FormKontakt from "@/components/UI/kontakt/FormKontakt";
import {MdEmail} from "react-icons/md";
import {AiFillPhone} from "react-icons/ai";
import {FaCity} from "react-icons/fa";
import {AlarmClock} from "lucide-react";

function Page() {
    return (
        <section className="" style={{
            backgroundImage: "url('/assets/img/bg-blue.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}>
            <div className="common-padding-huge flex">
                <div className="sectionPadding flex wrapper gap-32">
                    <div className="right flex flex-col flex-1 gap-4 justify-center">
                        <h1 className="h1-bold text-black">Kontakt</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, libero vitae iaculis
                            posuere, tellus purus hendrerit sapien, in sagittis nibh ante non turpis.</p>
                        <FormKontakt/>
                    </div>
                    <div className="left flex flex-1 justify-center items-center">
                        <div className="w-full h-[500px] bg-black rounded-xl p-10 gap-4 flex flex-col shadow-xl">
                            <h1 className="h3-bold text-white">Info</h1>
                            <div className="box flex flex-col justify-evenly h-full ">
                                <div className="flex gap-4">
                                    <MdEmail color="white" size="30"/>
                                    <p className="text-white">Info@eurosoc.pl</p>
                                </div>
                                <div className="flex gap-4">
                                    <AiFillPhone color="white" size="30"/>
                                    <p className="text-white">Info@eurosoc.pl</p>
                                </div>
                                <div className="flex gap-4">
                                    <FaCity color="white" size="30"/>
                                    <p className="text-white">Info@eurosoc.pl</p>
                                </div>
                                <div className="flex gap-4">
                                    <AlarmClock color="white" size="30"/>
                                    <p className="text-white">Info@eurosoc.pl</p>
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