import React from "react";
import EncryptButton from "@/components/UI/EncryptButton";

interface Props{
    classH2?:string;
    BUTTON: React.ReactNode;
}
function ParallaxInfo({classH2, BUTTON}: Props) {
    return (
        <div className="bg-black-1 common-padding">
            <div className="wrapper flex md:flex-row flex-col justify-center items-center gap-10 md:gap-0">
                <div className="left flex-1 text-white text-center md:text-start ">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className={classH2}>O USŁUDZE</h2>
                        <h2 className="h2-medium-42">Czy to coś dla Ciebie?</h2>
                        <p>Skontaktuj się z nami, by porozmawiać o korzyściach przeprowadzenia wybranego testu
                            penetracyjnego w Twojej organizacji.
                        </p>
                    </div>
                </div>
                <span className="md:flex hidden w-[1px] h-40 bg-white/20 mx-10"/>
                <div className="right flex-1 flex justify-center items-center">
                    {BUTTON}
                </div>
            </div>
        </div>
    );
}

export default ParallaxInfo;