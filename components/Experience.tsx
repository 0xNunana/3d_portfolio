'use client'
import React from 'react';
import SectionTitle from './SectionTitle';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
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
    {/* <VerticalTimeline lineColor="">
      {experiencesData.map((item, index) => (
        <React.Fragment key={index}>
          <VerticalTimelineElement
            // contentStyle={{
            //   background:
            //     // theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)"
            //     ,
            //   boxShadow: "none",
            //   border: "1px solid rgba(0, 0, 0, 0.05)",
            //   textAlign: "left",
            //   padding: "1.3rem 2rem",
            // }}
            // contentArrowStyle={{
            //   borderRight:
            //     theme === "light"
            //       ? "0.4rem solid #9ca3af"
            //       : "0.4rem solid rgba(255, 255, 255, 0.5)",
            // }}
            date={item.date}
            icon={item.icon}
            // iconStyle={{
            //   background:
            //     theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
            //   fontSize: "1.5rem",
            // }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        </React.Fragment>
      ))}
    </VerticalTimeline> */}
     <Timeline position="alternate">
     {experiencesData.map((exp,index)=>(
        
                <TimelineItem  className='animate-fade-in delay-1000'>
            <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          {exp.date}
        </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineConnector />
          
            <p className=' rounded-full border border-coral-red bg-gray-200 text-2xl h-10 w-10 flex justify-center items-center'>{exp.icon}</p>
         
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent className='rounded-xl bg-slate-200 shadow-lg'>
           <h1 className='text-3xl font-montserrat capitalize font-semibold py-2'>
             {exp.title}
           </h1>
            <p className='!m-0'>{exp.location}</p> 
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
