import RippleGrid from '@/components/RippleGrid';
import SplitText from '@/components/SplitText';
import ServiceCard from '@/components/v2/ServiceCard';
import {
  Computer,
  Laptop,
  Monitor,
  Users
} from 'lucide-react';

export default function Services() {
  const services = [
    { title: "Computer Maintenance", description: "We provide computer maintenance services to our labs.", icon: Computer },
    { title: "Software Installation", description: "We provide software installation services to our labs, students, & lecturers.", icon: Laptop },
    { title: "Interns Mentoring", description: "We provide interns mentoring services to our intern employees.", icon: Monitor },
    { title: "Assistant Lab", description: "We provide assistant lab services to our labs when learn course in the lab.", icon: Users },
  ];

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center top-0">
        <RippleGrid
          enableRainbow={false}
          gridColor="#00FFFF"
          rippleIntensity={0.05}
          gridSize={10}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.8}
        />
      </div>

      <div className="relative z-50 flex flex-col gap-10 items-center w-full pb-16 mt-5 md:-mt-[150px]">
        <div className="flex justify-center items-center max-w-[800px]">
          <SplitText
            text="Our Services"
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

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 px-5 w-full max-w-7xl">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              description={s.description}
              icon={<s.icon size={32} />}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
