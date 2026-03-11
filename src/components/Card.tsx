import Image from "next/image";
import InteractiveCard from "./InteractiveCard";

export default function Card({ venueName, imgSrc }: { venueName: string, imgSrc: string }) {
    return (
        <InteractiveCard>
            <div style={{marginTop: '24px'}} className="w-[90%] h-[60%] relative overflow-hidden rounded-t-lg">
                <Image 
                    src={imgSrc}
                    alt="party-place"
                    fill={true}
                    className="object-cover"
                />
            </div>
            <div style={{marginTop: '24px'}} className="w-full h-[40%] flex items-center justify-center px-3
                font-mono bg-gradient-to-b 
                from-[#F8E28F] via-[#C5A021] to-[#8A6628] 
                bg-clip-text text-transparent 
                text-[2em] font-bold text-center leading-tight">
                {venueName}
            </div>
        </InteractiveCard>
    );
}