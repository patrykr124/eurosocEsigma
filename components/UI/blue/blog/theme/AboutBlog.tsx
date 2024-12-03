import Avatar from "@/components/UI/blue/blog/theme/Avatar";
import {BlogPost} from "@/types/type";
import RecentPost from "@/components/UI/blue/blog/theme/RecentPost";

interface Props {
    content: BlogPost;
}

function AboutBlog({content}: Props) {
    return (
        <div className="common-padding bg-gray-3">
            <div className="wrapper ">
                <div className=" flex flex-row gap-16 ">
                    <div className="left flex flex-[3] flex-col gap-12">
                        <div className="flex-col flex gap-4">
                            <h1 className="h3-bold ">{content.h1}</h1>
                            <p className="text-justify" style={{whiteSpace: 'pre-wrap'}}
                               dangerouslySetInnerHTML={{__html: content.desc}}></p>
                            <p className="text-justify" style={{whiteSpace: 'pre-wrap'}}
                               dangerouslySetInnerHTML={{__html: content.p1}}></p>
                        </div>
                        <div className="flex-col flex gap-4">
                            <h1 className="h3-bold" dangerouslySetInnerHTML={{__html: content.h2}}></h1>
                            <p className="text-justify" style={{whiteSpace: 'pre-wrap'}}
                               dangerouslySetInnerHTML={{__html: content.p2}}></p>
                        </div>
                        <hr className="w-full border-gray-2"/>
                        <Avatar data={content}/>
                    </div>

                    <RecentPost contentId={content}/>
                </div>
            </div>

        </div>
    );
}

export default AboutBlog;