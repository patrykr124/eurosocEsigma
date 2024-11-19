'use client'

function Map() {



    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center w-full overflow-hidden ">
                <iframe id="cyberthreat-map" src="https://livethreatmap.radware.com/"
                        className="w-screen h-[90vh] pointer-events-none border-0 "></iframe>
            </div>
        </div>
    )
}

export default Map