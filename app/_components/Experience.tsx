import { TimelineCard as ExperienceType } from '@/types';
import TimelineCard from './TimelineCard';

export default function Experience() {
    const experiences: ExperienceType[] = [
        {
            title: 'Freelancing (Node - React/Next)',
            period: 'Enero 2025 - Presente',
            description: 'Desarrollo de aplicaciones web full-stack'
        }
    ];

    return (
        <section className="min-h-[50vh] w-full bg-neutral-950 flex flex-col justify-center items-center gap-16 py-20 px-4 selection:bg-international-klein-blue-500/30 relative overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-lg tracking-tight z-10">Experiencia</h1>
            
            <div className="relative w-full max-w-3xl mx-auto">
                <div className="absolute left-5 md:left-9 top-0 bottom-0 w-[2px] bg-gradient-to-b from-international-klein-blue-500/20 via-international-klein-blue-500/50 to-international-klein-blue-500/20"></div>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <TimelineCard key={index} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    )
}