'use client'
import EncryptButton from "@/components/UI/EncryptButton";
import LeafletMap from "@/components/UI/LeafletMap";
import dynamic from 'next/dynamic';

function Map() {




    const MapLealfet = dynamic(() => import('../../../LeafletMap'), {
        ssr: false,
    });


    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center w-full overflow-hidden ">
                <iframe id="cyberthreat-map" src="https://livethreatmap.radware.com/" className="w-screen h-[90vh] pointer-events-none border-0 "></iframe>
            </div>
        </div >
    )
}

export default Map