import Hyperspeed from '@/components/Hyperspeed';
import SplitText from '@/components/SplitText';

import FormJoin from '@/components/v2/FormJoin';
import Sosmed from '@/components/v2/Sosmed';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
export default function Contact() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <NextSeo title='Contact' />
      <div className="absolute inset-0 z-0 flex items-center justify-center md:-top-[500px]">
        <Hyperspeed
          effectOptions={{
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 5,
            islandWidth: 1,
            lanesPerRoad: 1,
            fov: 90,
            fovSpeedUp: 100,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>
      <div className="relative z-50 flex flex-col gap-10 items-center w-full pb-16 mt-5 md:mt-[50px]">
        <div className="flex justify-center items-center max-w-[800px]">
          <SplitText
            text="Contact"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 md:p-4 w-full -mt-[20px]">
          <div>
            <Sosmed />
          </div>
          <div>
            <FormJoin />
          </div>
        </div>
      </div>
    </div>
  )
}
