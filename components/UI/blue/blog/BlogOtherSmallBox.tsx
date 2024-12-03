import Image from "next/image";
import EncryptButton from "@/components/UI/EncryptButton";
import {BlogPost} from "@/types/type";

interface BlogPostProps {
    item: BlogPost;
}

function BlogOtherSmallBox({item} : BlogPostProps) {


    function truncateText(text: string, wordLimit: number) {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "..."
        }
        return text;
    }

    const desc = item.desc;
    const truncateTextData = truncateText(desc, 30);


    return (
        <div className="flex flex-col relative rounded-xl overflow-hidden shadow-xl">
            <div className="right flex flex-1 relative min-w-[200px] min-h-[150px] ">
                <Image layout="fill" objectFit="cover" src={item.imgHeader} alt="blog"/>
            </div>
            <div className="left flex-1 gap-2 flex flex-col bg-gray-3 text-black p-8 ">
                <h1 className="p-medium-28">{item.title}</h1>
                <hr/>
                <div className="avatar flex justify-start items-center gap-4">
                    <div className=" w-10 h-10 relative">
                        <Image layout="fill" objectFit="cover" className="rounded-full"
                               src="/assets/img/logo.jpeg" alt="avatar"/>
                    </div>
                    <div className="">
                        <p>Patryk Różycki</p>
                    </div>
                    <div className="">
                        <p>{item.data}</p>
                    </div>
                </div>
                <div className="desc">
                    <p>{truncateTextData}
                    </p>
                </div>

                <div className="mt-6">
                    <EncryptButton onClick={`/dashboard/blue/blog/${item.id}`} className="bg-blue-1 hover:bg-blue-1-hover" textData="Czytaj więcej"/>
                </div>
            </div>

        </div>
    );
}

export default BlogOtherSmallBox;