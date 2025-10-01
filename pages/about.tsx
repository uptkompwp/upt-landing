import CircularGallery from '@/components/CircularGallery';
import LightRays from '@/components/LightRays';
import SplitText from '@/components/SplitText';
import AboutImg1 from "../public/upt.jpg";
import AboutImg2 from "../public/upt2.jpg";
import AboutImg3 from "../public/upt3.jpg";
import AboutImg4 from "../public/upt4.jpg";
export default function About() {
  const images = [AboutImg1, AboutImg2, AboutImg3, AboutImg4];

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-full h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#00FFFF"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
          />
        </div>
      </div>

      <div className="relative z-50 flex flex-col w-full items-center">
        <div className='mt-[200px] sm:mt-[00px] md:mt-[300px] flex gap-5 flex-col items-center'>
          <div className="flex justify-center items-center">
            <SplitText
              text="About UPT Komp"
              className="text-2xl md:text-8xl font-bold text-center text-white drop-shadow-xl"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
          <div className='flex justify-center items-center max-w-3xl px-3'>
            <SplitText
              text={"UPTKOMP adalah singkatan dari Unit Pelaksana Teknis Komputer. UPT Komputer merupakan salah satu unit kerja di Institut Widya Pratama Pekalongan. Unit ini bertanggung jawab menyediakan infrastruktur teknologi informasi, baik hardware dan software, serta ketersediaan internet. Unit ini merupakan support system bagi seluruh jurusan/fakultas di universitas."}
              className="text-center text-white drop-shadow-xl md:text-xl"
              delay={0}
              duration={0.5}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </div>
        </div>
        <div className='w-full h-screen -mt-[90px]'>
          <CircularGallery items={images.map((image) => ({ image: image.src, text: `` }))} bend={4} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
        </div>
      </div>
    </div>
  )
}
