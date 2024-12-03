import React from "react";
import {BlogPost} from "@/types/type";

interface Propos {
    headerImg: string;
    position: string;
    content: BlogPost | undefined;

}

function HeaderBlog({position,content} : Propos) {
    return (
        <header style={{
            backgroundImage: `url('${content?.imgHeader}')`,
            backgroundPosition: `${position}`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
        }} className="sectionPadding flex flex-col justify-center items-center">
            <div className="wrapper">
                <h1 className='h1-bold text-gray-3 text-center'>{content?.title}</h1>
            </div>
        </header>
    );
}

export default HeaderBlog;