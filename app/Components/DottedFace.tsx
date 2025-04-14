import Image from 'next/image';
import dottedface from '@/media/dottedface.gif';

export default function DottedFace(props: any) {
    return (
        <div className="flex justify-center items-center animate-float">
           <div className="relative">
             {/* Outer glow effect */}
             <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl animate-pulse-glow"></div>
             
             {/* Inner glow effect */}
             <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-xl"></div>
             
             {/* Image with shadow */}
             <div className="relative z-10 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
               <Image 
                  src={dottedface} 
                  alt="AI Avatar" 
                  width={350}
                  height={350}
                  className="rounded-full"
                  priority
               />
             </div>
           </div>
        </div>
    );
}