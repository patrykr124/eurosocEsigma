import Image from "next/image";
import React from "react";

interface  data {
    id: number;
    image: string;
    title: string;
    desc: string;
}
interface Props{
    doZapamietaniaBottom: data[] | undefined;
    doZapamietaniaTop: data[] | undefined;
}

function DozapamietaniaContent({doZapamietaniaBottom, doZapamietaniaTop}: Props) {
    return (
        <div className="icon gap-10 flex flex-col">
            <div className="top grid grid-cols-2 gap-8">
                {doZapamietaniaTop?.map((item) => (
                    <div className="box flex gap-4">
                        <div className="image min-h-[60px] min-w-[60px] relative">
                            <Image width="60" height="60" className="object-contain" src={item.image} alt={item.image}/>
                        </div>
                        <div className="text -mt-2  ">
                            <h4 className="p-semibold-20">{item.title}</h4>
                            <p className="text-sm ">{item.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
            <div className="bottom grid grid-cols-2  gap-8">
                {doZapamietaniaBottom?.map((item) => (
                    <div className="box flex gap-4">
                        <div className="image min-h-[60px] min-w-[60px] relative">
                            <Image width="60" height="60" className="object-contain" src={item.image} alt={item.image}/>
                        </div>
                        <div className="text -mt-2  ">
                            <h4 className="p-semibold-20">{item.title}</h4>
                            <p className="text-sm ">{item.desc}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default DozapamietaniaContent;