import { link } from "fs";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    const projects = [
        {
            name: 'Resilio Life',
            description: 'Sistema de gestion de beneficios para socios e influencers',
            image: 'project1.png',
            link: 'https://resilio-frontend.onrender.com/'
        },
        {
            name: 'Andart',
            description: 'Landing page para proyectos de freelancing de diseño y desarrollo web',
            image: 'project2.png',
            link: 'https://andart-coral.vercel.app/'
        }

    ]

    return (
        <section className="w-full min-h-[60vh] bg-white flex flex-col justify-center items-center gap-8 py-12 md:py-20 px-4 selection:bg-international-klein-blue-500/30 relative overflow-hidden">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-black/60 drop-shadow-lg tracking-tight z-10">Proyectos</h1>
            <div className="w-full md:w-[80%] lg:w-[60%] h-[450px] md:h-[600px] flex flex-row gap-8 overflow-x-auto overflow-y-hidden px-4 pb-4 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:mx-4 [&::-webkit-scrollbar-thumb]:bg-international-klein-blue-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-international-klein-blue-600">
                {projects.map((item, index) => (
                    <ProjectCard key={`${item.name}-${index}`} name={item.name} description={item.description} image={item.image} link={item.link} />
                ))}
            </div>
        </section>
    )
}