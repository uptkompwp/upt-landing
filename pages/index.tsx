import Orb from '@/components/Orb';
import SplitText from '@/components/SplitText';
import TextType from '@/components/TextType';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

export default function Home() {
    const router = useRouter();
    const toContact = () => {
        router.push("/contact");
    }
    return (
        <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 flex items-center justify-center mb-[100px]">
                <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px]">
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                </div>
            </div>

            <div className="relative z-50 -mt-[200px] flex flex-col gap-8">
                <div className='flex justify-center items-center'>
                    <SplitText
                        text="WELCOME TO UPT KOMP"
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
                <div className='flex justify-center items-center'>
                    <TextType
                        className='text-lg md:text-4xl font-bold text-center text-white drop-shadow-xl'
                        text={["Learn organization experience in UPTKOMP and become expert"]}
                        typingSpeed={75}
                        pauseDuration={1500}
                        showCursor={true}
                        cursorCharacter="|"
                    />
                </div>
                <div className='flex justify-center items-center'>
                    <Button onClick={toContact} className="bg-white rounded-full px-10 py-6 font-thin">
                        Join Now
                    </Button>
                </div>
            </div>
        </div>
    );
}
