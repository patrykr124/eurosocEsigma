'use client'
import Image from "next/image";
import {BlogData} from "@/components/UI/blue/blog/BlogData";
import Link from "next/link";
import {BlogPost} from "@/types/type";
import {usePathname} from "next/navigation";
import {BlogDataRed} from "@/components/UI/red/blog/BlogDataRed";

interface Props {
    contentId: BlogPost;
}

function RecentPost({contentId}: Props) {
    const route = usePathname()
    console.log(route);

    let recentBlog: BlogPost[] = [];
    let hrefLink = "";

    if (route && route.startsWith("/dashboard/blue/blog")) {
        recentBlog = BlogData.filter((item) => item.id !== contentId.id).slice(0, 3);
        hrefLink = 'blue'
    } else if (route && route.startsWith("/dashboard/red/blog")) {
        recentBlog = BlogDataRed.filter((item) => item.id !== contentId.id).slice(0, 3);
        hrefLink = 'red'
    }




    function truncateText(text: string, maxWorld: number) {
        if (text && text.length > maxWorld) {
            return text.slice(0, maxWorld) + "..."
        }
    }

    return (
        <div className="right flex-1 gap-12 flex flex-col">
            {recentBlog.map((item) => (
                <Link key={item.id} href={`/dashboard/${hrefLink}/blog/${item.id}`}>
                    <div className="gap-12 flex flex-col">
                        <div className="box bg-gray-2 rounded-xl overflow-hidden">
                            <div className="w-full h-[180px] relative">
                                <Image fill src={item.imgHeader} alt="recentBlog"/>
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                <h4 className="p-semibold-20 ">{item.title}</h4>
                                <p>{truncateText(item.desc, 150)}</p>
                            </div>
                        </div>

                    </div>
                </Link>
            ))}
        </div>
    );
}

export default RecentPost;