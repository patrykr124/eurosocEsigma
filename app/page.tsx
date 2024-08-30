import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen">
      <div className="video flex">
        <Link
          href="/dashboard/blue"
          className="left group cursor-pointer grayscale hover:grayscale-0 flex w-[100vw] hover:w-[300vw] transition-all duration-500 ease-in-out"
        >
          <video
            src={"/assets/video/eurosoc.video.blue.mp4"}
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover"
          ></video>
        </Link>
        <Link
          href="/dashboard/red"
          className="right group flex w-[100vw] grayscale hover:grayscale-0 hover:w-[300vw] transition-all duration-500 ease-in-out cursor-pointer"
        >
          <video
            src={"/assets/video/eurosoc.video.red.mp4"}
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover"
          ></video>
        </Link>
      </div>
      <div className="absolute h1-bold text-white inset-0 flex items-center justify-center pointer-events-none">
        Choose your color
      </div>
    </main>
  );
}
