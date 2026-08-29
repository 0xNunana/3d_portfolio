'use client'
import React from 'react';
import SectionTitle from './SectionTitle';
import { experiencesData } from '@/lib/data';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { NavViewer } from '@/lib/navView';


const Experience = () => {
    const {ref}=NavViewer('Experience',0.75)
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40 max-w-[53rem] w-full" ref={ref}>
      <SectionTitle>Experience</SectionTitle>
      <p className="text-center text-gray-500 mb-10">Six-plus years of building software products, platforms and technical systems.</p>
 
      <Timeline position="alternate">
        {experiencesData.map((exp,index)=>(
          <TimelineItem key={index} className='animate-fade-in delay-1000'>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
              className='dark:text-white/70 font-medium'
            >
              {exp.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector className="bg-gray-200 dark:bg-gray-700" />
              <div className='rounded-full border-2 border-coral-red bg-white text-coral-red text-xl h-10 w-10 flex justify-center items-center dark:bg-gray-900 z-10'>
                {exp.icon}
              </div>
              <TimelineConnector className="bg-gray-200 dark:bg-gray-700" />
            </TimelineSeparator>
            <TimelineContent className='py-6'>
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl text-left shadow-sm dark:bg-gray-800/50 dark:border-gray-700">
                <h3 className='text-xl font-montserrat capitalize font-bold dark:text-white'>
                  {exp.title}
                </h3>
                <h4 className='font-semibold text-coral-red mb-3'>{exp.location}</h4> 
                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed'>
                  {exp.description}
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </section>
  );
};

export default Experience;
