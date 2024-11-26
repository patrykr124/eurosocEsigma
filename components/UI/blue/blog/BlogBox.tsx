import Image from "next/image";
import EncryptButton from "@/components/UI/EncryptButton";
import Avatar from "@/components/UI/blue/blog/theme/Avatar";
import {BlogPost} from "@/type/type";


interface BlogBoxProps {
    BlogDataItemLast: BlogPost;
    params?: string;
}

function BlogBox({BlogDataItemLast,params} : BlogBoxProps) {
    const id = params;

    function truncateText(text: string, wordLimit: number) {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "..."
        }
        return text;
    }


    const desc = BlogDataItemLast?.desc;
    const truncateTextData = truncateText(desc, 30);

    return (
        <div className="rounded-xl shadow-xl overflow-hidden">
            <div className="flex">
                <div className="left w-3/4 gap-4 flex flex-col bg-gray-3 text-black p-8  ">
                    <h1 className="h4-medium" style={{whiteSpace: 'pre-wrap'}}>{BlogDataItemLast?.title}</h1>
                    <hr/>
                    <Avatar/>
                    <div className="desc">
                        <p>{truncateTextData}
                        </p>
                    </div>

                    <div className="mt-6">
                        <EncryptButton onClick={`/dashboard/blue/blog/${id}`} className="bg-blue-1 hover:bg-blue-1-hover"
                                       textData="Czytaj więcej"/>
                    </div>
                </div>
                <div className="right w-full flex h-auto relative">
                    <Image layout="fill" objectFit="cover" src={BlogDataItemLast.imgHeader} alt="blog"/>
                </div>
            </div>
        </div>
    );
}

export default BlogBox;