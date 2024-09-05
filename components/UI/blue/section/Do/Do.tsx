'use client'
import EncryptButton from "@/components/UI/EncryptButton";


function Do() {


    return (
        <div className='common-padding-huge '>
            <div className="wrapper ">
                <div className="grid grid-cols-2 gap-10 ">
                    <div className="flex flex-col gap-4 ">
                        <h3 className="h2-normal ">Ataki w Czasie Rzeczywistym.</h3>
                        <p className="p-medium-28">Szybka Reakcja, Maksymalna Ochrona</p>
                        <p className="p-regular-16 text-justify">W świecie cyberbezpieczeństwa każda sekunda ma znaczenie. Nasze zaawansowane systemy monitorowania w czasie rzeczywistym pozwalają na wykrywanie i neutralizowanie zagrożeń, zanim zdążą one wyrządzić szkody. Dzięki naszej technologii i wiedzy, Twoja firma jest zawsze o krok przed cyberatakami, zapewniając maksymalną ochronę w najbardziej krytycznych momentach.</p>
                        <EncryptButton textData="Zabezpiecz się" className="w-fit" />
                    </div>
                    <div className="flex w-full h-full ">

                        <div className="mx-auto w-full overflow-hidden rounded-xl ">
                            <div className="flex justify-center items-center ">
                                <iframe id="cyberthreat-map" src="https://livethreatmap.radware.com/" className="w-[700px] border-0 h-[600px] "></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Do