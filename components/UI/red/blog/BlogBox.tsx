import Image from "next/image";
import EncryptButton from "@/components/UI/EncryptButton";
import Avatar from "@/components/UI/red/blog/theme/Avatar";
import EncryptButtonRed from "@/components/UI/EncryptButtonRed";


function BlogBox() {

    function truncateText(text: string, wordLimit: number) {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "..."
        }
        return text;
    }

    const desc = "truncateText(Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequuntur deserunt distinctio ducimus est eum id impedit iusto laudantium, natus neque nulla odit optio quibusdam quos sed soluta voluptates!"
    const truncateTextData = truncateText(desc, 30);

    return (
        <div className="rounded-xl shadow-xl overflow-hidden">
            <div className="flex">
                <div className="left w-3/4 gap-4 flex flex-col bg-gray-3 text-black p-8  ">
                    <h1 className="h4-medium">Atak hackerski a odpowiedzialność firmy</h1>
                    <hr/>
                    <Avatar/>
                    <div className="desc">
                        <p>{truncateTextData}
                        </p>
                    </div>

                    <div className="mt-6">
                        <EncryptButtonRed onClick={'/dashboard/red/blog/1'} className="bg-red-1 hover:bg-red-1-hover" textData="Czytaj więcej"/>
                    </div>
                </div>
                <div className="right w-full flex h-auto relative">
                    <Image layout="fill" objectFit="cover" src="/assets/img/blog1.jpg" alt="blog"/>
                </div>
            </div>
        </div>
    );
}

export default BlogBox;