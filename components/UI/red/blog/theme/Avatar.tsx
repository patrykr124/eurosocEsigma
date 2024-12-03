import Image from "next/image";
import {BlogPost} from "@/type/type";
interface Props {
    data: BlogPost;
}
function Avatar({data} : Props) {
    return (
        <div className="avatar flex justify-start items-center gap-4">
            <div className=" w-10 h-10 relative">
                <Image layout="fill"  className="rounded-full object-cover"
                       src="/assets/img/logo.jpeg" alt="avatar"/>
            </div>
            <div className="border-r-2 border-gray-1 pr-4">
                <p>Patryk Różycki</p>
            </div>
            <div className="">
                <p>{data.data}</p>
            </div>
        </div>
    );
}

export default Avatar;