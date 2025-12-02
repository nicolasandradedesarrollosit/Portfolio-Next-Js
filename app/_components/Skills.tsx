import {
    Card,
    CardFooter    
} from '@heroui/card';

import { Image } from '@heroui/image';

const skills = [
    {
        name: 'TypeScript',
        image: 'typescript.png'
    },
    {
        name: 'React',
        image: 'react.jpg'
    },
    {
        name: 'Tailwind CSS',
        image: 'tailwind.jpg'
    },
    {
        name: 'Node.js',
        image: 'nodejs.png'
    },
    {
        name: 'Express.js',
        image: 'express.png'
    },
    {
        name: 'Hero UI',
        image: 'hero-ui.jpg'
    },
    {
        name: 'Next.js',
        image: 'nextjs.jpeg'
    }
] 

export default function Skills() {
    return (
        <section className="min-h-[50vh] w-full bg-neutral-950 flex flex-col justify-center items-center gap-16 py-20 selection:bg-international-klein-blue-500/30 relative overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-lg tracking-tight z-10">Habilidades</h1>
            <div className="flex flex-row flex-wrap gap-4 md:gap-8 justify-center items-center w-[95%] md:w-[70%] h-auto bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_40px_-10px_rgba(87,111,253,0.1)] hover:shadow-[0_0_60px_-10px_rgba(87,111,253,0.2)] transition-all duration-500">
                {skills.map((item, index) => (
                    <Card key={`${item.name}-${index}`} isFooterBlurred className='border-none bg-black/40 hover:scale-110 transition-transform duration-300' radius='lg'>
                        <Image
                            alt={item.name}
                            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300 w-[140px] h-[140px] md:w-[200px] md:h-[200px]"
                            src={item.image}
                        />
                        <CardFooter className="justify-center before:bg-black/50 border-white/10 border-1 overflow-hidden py-1 md:py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className={`text-xs md:text-sm font-semibold ${index>4 ? 'text-white/90' : 'text-black/90'} tracking-wide`}>{item.name}</p>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}