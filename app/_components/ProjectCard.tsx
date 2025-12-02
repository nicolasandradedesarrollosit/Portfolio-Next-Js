'use client';

import {useState} from 'react';

import {
    Card, 
    CardBody, 
    CardHeader, 
    CardFooter
} from '@heroui/card';

import {Button} from '@heroui/button';

import { Project } from '@/types';

export default function ProjectCard({ name, description, image, link}: Project) {

    const [cardHovered, setCardHovered] = useState(false);

    return (
        <Card
            onMouseEnter={() => {setCardHovered(true)}} 
            onMouseLeave={() => {setCardHovered(false)}} 
            className="border-none shadow-none bg-transparent min-w-[320px] w-[320px] md:min-w-[400px] md:w-[400px] h-full relative overflow-hidden rounded-2xl md:rounded-3xl flex-shrink-0"
        >
            <CardHeader className={`flex flex-col gap-1.5 md:gap-2 absolute top-0 left-0 w-full p-4 md:p-6 transition-opacity duration-300 z-20 ${cardHovered ? 'opacity-100' : 'opacity-0'}`}>
                <h2 className="text-lg md:text-xl lg:text-2xl font-bold indent-[10px] w-full bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] tracking-tight">{name}</h2>
                <span className='text-sm md:text-base indent-[10px] w-full text-white/70 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] tracking-tight leading-relaxed'>{description}</span>
            </CardHeader>
            <CardBody className="p-0 relative h-full w-full">
                <img src={image} alt={name} className='h-full w-full object-cover rounded-2xl'></img>
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 rounded-2xl ${cardHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            </CardBody>
            <CardFooter className={`absolute bottom-0 left-0 w-full p-4 md:p-6 transition-opacity duration-300 z-20 flex justify-center ${cardHovered ? 'opacity-100' : 'opacity-0'}`}>
                <Button color='default' variant='flat' onPress={() => {window.location.href = link}}>Ver más</Button>
            </CardFooter>
        </Card>
    )
}