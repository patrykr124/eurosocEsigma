import Image from "next/image";
import Avatar from "@/components/UI/red/blog/theme/Avatar";
import {BlogPost} from "@/type/type";

interface Props {
    content: BlogPost;
}

function AboutBlog({content} : Props) {
    return (
        <div className="common-padding bg-gray-3">
            <div className="wrapper ">
                <div className=" flex flex-row gap-10 ">
                    <div className="left flex flex-[3] flex-col gap-12">
                        <div className="flex-col flex gap-4">
                            <h1 className="p-medium-28-semibold ">{content.h1}</h1>
                            <p className="text-justify" style={{whiteSpace: 'pre-wrap'}}>{content.p1}</p>
                        </div>
                        <div className="relative w-full h-[450px] overflow-hidden rounded-xl">
                            <Image fill className="object-cover" src="/assets/img/concept.jpg" alt="blog"/>
                        </div>
                        <div className="flex-col flex gap-4">
                            <h1 className="p-medium-28-semibold">{content.h2}</h1>
                            <p className="text-justify" style={{whiteSpace: 'pre-wrap'}}>{content.p2}</p>
                        </div>
                        <hr className="w-full border-gray-2"/>
                        <Avatar/>
                    </div>

                    <div className="right flex-1 flex flex-col gap-12">
                        <div className="box bg-gray-2 rounded-xl overflow-hidden">
                            <div className="w-full h-[180px] relative">
                                <Image fill src="/assets/img/hacker.jpg" alt="recentBlog"/>
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <h4 className="p-semibold-18 ">Ochrona a kary finansowe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, omnis?</p>
                            </div>
                        </div>
                        <div className="box bg-gray-2 rounded-xl overflow-hidden">
                            <div className="w-full h-[180px] relative ">
                                <Image fill src="/assets/img/hacker.jpg" alt="recentBlog"/>
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <h4 className="p-semibold-18 ">Ochrona a kary finansowe</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, omnis?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AboutBlog;