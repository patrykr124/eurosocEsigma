import EncryptButton from "@/components/UI/EncryptButton";
import Avatar from "@/components/UI/blue/blog/theme/Avatar";
import { BlogPost } from "@/types/type";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";


interface BlogBoxProps {
    BlogDataItemLast: BlogPost;
    params?: string;
}

function BlogBox({ BlogDataItemLast }: BlogBoxProps) {
    const locale = useLocale();
    let url;
    let urlLink;
    if (locale === "pl") {
        url = `/dashboard/blue/blog/${BlogDataItemLast.id}`
        urlLink = `blog/${BlogDataItemLast.id}`
    } else {
        url = `/dashboard/blue/blog/${BlogDataItemLast.id}`
        urlLink = `blog/${BlogDataItemLast.id}`
    }
   

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
        <Link href={`${urlLink}`}>
            <div className="rounded-xl shadow-xl overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="left order-2 md:order-1 gap-4 flex flex-col bg-gray-3 text-black p-8  ">
                        <h1 className="h4-medium" style={{ whiteSpace: 'pre-wrap' }}>{BlogDataItemLast?.title}</h1>
                        <hr />
                        <Avatar data={BlogDataItemLast} />
                        <div className="desc">
                            <p>{truncateTextData}
                            </p>
                        </div>

                        <div className="mt-6">
                            <EncryptButton onClick={url} className="bg-blue-1 hover:bg-blue-1-hover"
                                textData="Czytaj więcej" />
                        </div>
                    </div>
                    <div className="right md:w-2/3 w-full order-1 md:order-2   flex h-40 md:h-auto relative">
                        <Image layout="fill" objectFit="cover" src={BlogDataItemLast.imgHeader} alt="blog" />
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BlogBox;