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
    <section id="experience"  className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
    <SectionTitle>My experience</SectionTitle>
 
     <Timeline position="alternate">
     {experiencesData.map((exp,index)=>(
        
                <TimelineItem key={index} className='animate-fade-in delay-1000'>
            <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
          className='dark:text-white'
        >
          {exp.date}
        </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineConnector />
          
            <p className=' rounded-full border border-coral-red bg-gray-200 text-2xl h-10 w-10 flex justify-center items-center dark:text-black '>{exp.icon}</p>
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent className='rounded-xl bg-slate-200 shadow-lg dark:bg-slate-300 dark:border dark:border-coral-red dark:shadow-lg '>
           <h1 className='text-3xl font-montserrat capitalize font-semibold py-2 dark:text-black'>
             {exp.title}
           </h1>
            <p className='!m-0 dark:text-gray-700'>{exp.location}</p> 
           {/* <p className='py-2'>{exp.description}</p> */}
         </TimelineContent>
       </TimelineItem>
    
     
     ))}
     
      {/* <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem> */}
      
     
    </Timeline>
  </section>
  );
};

export default Experience;
