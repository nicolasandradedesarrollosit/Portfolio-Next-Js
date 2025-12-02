'use client';

import type { TimelineCard } from '@/types';

export default function TimelineCard({ title, period, description }: TimelineCard) {
    return (
        <div className="relative flex gap-3 md:gap-8 items-center group">
            <div className="flex-shrink-0 relative z-10">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-international-klein-blue-500 border-[3px] md:border-4 border-neutral-950 shadow-lg shadow-international-klein-blue-500/50 transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl group-hover:shadow-international-klein-blue-500/70"></div>
            </div>

            <div className="flex-1 bg-gradient-to-br from-white to-gray-50 rounded-lg md:rounded-xl p-4 md:p-6 shadow-md md:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:hover:shadow-2xl hover:shadow-international-klein-blue-500/10 border border-gray-200 md:border-gray-100">
                <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1.5 md:mb-2">{title}</h3>
                <p className="text-xs md:text-base text-international-klein-blue-600 font-medium mb-1.5 md:mb-2">{period}</p>
                <p className="text-xs md:text-base text-gray-600 leading-relaxed">{description}</p>
            </div>
        </div>
    );
}
