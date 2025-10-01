import LightRays from '@/components/LightRays'
import SplitText from '@/components/SplitText'
import { NextSeo } from 'next-seo'

export default function NotFound() {
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <NextSeo title='404' />
            <div className="absolute inset-0 z-0 flex items-center justify-center">
                <div className="w-full h-screen">
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#FFFFFF"
                        raysSpeed={0}
                        lightSpread={1}
                        rayLength={2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                    />
                </div>
            </div>

            <div className="relative z-50 flex flex-col w-full items-center">
                <div className='-mt-[300px] flex gap-5 flex-col items-center'>
                    <div className="flex justify-center items-center">
                        <SplitText
                            text="404"
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
                </div>
            </div>
        </div>
    )
}
