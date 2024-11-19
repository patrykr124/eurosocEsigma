import Image from "next/image";
import EncryptButton from "@/components/UI/EncryptButton";
import EncryptButtonRed from "@/components/UI/EncryptButtonRed";

function BlogOtherSmallBox() {
    function truncateText(text: string, wordLimit: number) {
        const words = text.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "..."
        }
        return text;
    }

    const desc = "truncateText(Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias atque consequuntur deserunt distinctio ducimus est eum id impedit iusto laudantium, natus neque nulla odit optio quibusdam quos sed soluta voluptates!"
    const truncateTextData = truncateText(desc, 10);


    return (
        <div className="flex flex-col relative rounded-xl overflow-hidden shadow-xl">
            <div className="right flex flex-1 relative min-w-[200px] min-h-[150px] ">
                <Image layout="fill" objectFit="cover" src="/assets/img/blog1.jpg" alt="blog"/>
            </div>
            <div className="left flex-1 gap-2 flex flex-col bg-gray-3 text-black p-8 ">
                <h1 className="p-medium-28">Atak hackerski a odpowiedzialność firmy</h1>
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
                        <p>15.10.2024</p>
                    </div>
                </div>
                <div className="desc">
                    <p>{truncateTextData}
                    </p>
                </div>

                <div className="mt-6">
                    <EncryptButtonRed onClick={'/dashboard/red/blog/1'} className="bg-red-1 hover:bg-red-1-hover" textData="Czytaj więcej"/>
                </div>
            </div>

        </div>
    );
}

export default BlogOtherSmallBox;