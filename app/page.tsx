import Link from "next/link";


export default function Home() {



  return (
    <main className="relative h-screen">
      <div className="video flex">
        <Link
          href="/dashboard/blue"
          className="left group relative cursor-pointer flex w-[100vw] hover:w-[300vw] transition-all duration-500 ease-in-out"
        >
          <video
            src={"/assets/video/eurosoc.video.blue.mp4"}
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover hover:grayscale-0 group-hover:grayscale-0 grayscale  transition-all duration-500 ease-in-out z-20"
          ></video>
          <div className="text">
            <div className="absolute inset-0 flex justify-center items-center p-20">
              <p className=" group text-secondary-blue min-w-[800px] max-w-[800px] text-6xl font-bold flex justify-center items-center group-hover:opacity-0 transition-all duration-300 z-20">BLUE TEAM</p>
            </div>
            <div className="absolute inset-0 flex justify-center items-center p-20">
              <p className="text-white group-hover:opacity-100 min-w-[800px] max-w-[800px] opacity-0 transition-all duration-700 text-xl z-20">
                Blue Team oferuje profesjonalne wdrożenia zarówno komercyjnych, jak i Open Source rozwiązań, zapewniając kompleksową obsługę technologiczną dla firm.<br /><br /> Specjalizujemy się w szkoleniach z zakresu cyberbezpieczeństwa, ciągłym monitorowaniu infrastruktury IT (SOC), oraz II linii wsparcia technicznego.<br /><br /> Dodatkowo, oferujemy usługi odmiejscowienia kopii zapasowych, gwarantując bezpieczeństwo danych w każdej sytuacji.</p>
            </div>
          </div>
        </Link>
        <Link
          href="/dashboard/red"
          className="right group relative flex w-[100vw] hover:w-[300vw] transition-all duration-500 ease-in-out cursor-pointer z-20"
        >
          <video
            src={"/assets/video/eurosoc.video.red.mp4"}
            autoPlay
            loop
            muted
            className="w-full h-screen object-cover hover:grayscale-0 group-hover:grayscale-0 grayscale transition-all duration-500 ease-in-out z-20"
          ></video>
          <div className="text">
            <div className="absolute group inset-0 flex justify-center items-center p-20">
              <p className="text-red-700 min-w-[800px] max-w-[800px] text-6xl font-bold flex justify-center items-center group-hover:opacity-0 transition-all duration-300 z-20">RED TEAM</p>
            </div>
            <div className="absolute inset-0 flex justify-center items-center p-20">
              <p className="text-white group-hover:opacity-100 min-w-[800px] max-w-[800px] opacity-0 transition-all duration-700 text-xl z-20">
                Blue Team oferuje profesjonalne wdrożenia zarówno komercyjnych, jak i Open Source rozwiązań, zapewniając kompleksową obsługę technologiczną dla firm.<br /><br /> Specjalizujemy się w szkoleniach z zakresu cyberbezpieczeństwa, ciągłym monitorowaniu infrastruktury IT (SOC), oraz II linii wsparcia technicznego.<br /><br /> Dodatkowo, oferujemy usługi odmiejscowienia kopii zapasowych, gwarantując bezpieczeństwo danych w każdej sytuacji.</p>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="absolute h1-bold text-white inset-0 flex items-center justify-center pointer-events-none">
        Choose your color
      </div> */}
    </main>
  );
}
