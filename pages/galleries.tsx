import DomeGallery from '@/components/DomeGallery';
import Particles from '@/components/Particles';
import SplitText from '@/components/SplitText';
import { useEffect, useState } from 'react';

export default function Galleries() {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("/api/photos");
      const data = await res.json();
      setPhotos(data.map((file: string) => `/images/${file}`));
    };

    fetchPhotos();
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-y-auto">
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-50 flex flex-col gap-8 w-full pt-10 md:pt-20">
        <div className="flex justify-center items-center">
          <SplitText
            text="Galleries"
            className="text-4xl md:text-8xl font-bold text-center text-white drop-shadow-xl"
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

        <div className="w-full h-[100vh] absolute inset-0 top-5 md:top-[250px]">
          {/* <Masonry
            items={photos.map((photo, index) => ({
              img: photo,
              url: '',
              id: photo,
              height: 500,
            }))}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          /> */}
          <DomeGallery
            images={photos}
            overlayBlurColor="transparent"
            grayscale={false}
            fit={0.8}
          />
        </div>
      </div>
    </div>
  )
}
