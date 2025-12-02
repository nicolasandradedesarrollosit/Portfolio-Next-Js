import { TimelineCard as EducationType } from '@/types';
import TimelineCard from './TimelineCard';

export default function Education() {
    const experiences: EducationType[] = [
        {
            title: 'EESOPI 3105 Santa Teresita',
            period: 'Marzo 2017 - Diciembre 2021',
            description: 'Bachillerato en Ciencias Económicas'
        },
        {
            title: 'Instituto Belgrano',
            period: 'Marzo 2022 - Diciembre 2024',
            description: 'Tecnicatura Superior en Desarrollo de Software'
        },
        {
            title: 'Universidad Abierta Interamericana (UAI)',
            period: 'Marzo 2025 - Diciembre 2027 (Estimada)',
            description: 'Ingeniería en Sistemas de Información'
        }
    ];

    return (
        <section className="min-h-[60vh] h-auto p-16 w-full flex flex-col justify-center items-center gap-8 md:gap-12 px-4 bg-gradient-to-br from-international-klein-blue-950 via-international-klein-blue-900 to-black selection:bg-international-klein-blue-500/30">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-lg tracking-tight z-10">Educación</h1>
            
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