"use client"
import EventCardSection from '@/components/EventCard/EventCardSection'
import React, { useEffect } from 'react'

const events = [
  {
    title: 'Sahodaya School Comlex, Pachhawadoon, Vikasnagar',
    date: 'August 10, 2024',
    description: 'Honble Members, Sahodaya School Comlex, Pachhawadoon, Vikasnagar.You are  kindly reminded that on 10 Aug. 2024 there is a Sahodaya Monthly Meeting at JNV ,Shankarpur, Sahaspur at 2:30 p.m. sharp . The Host has willingly invited the Honble Members for  lunch  at 1:30 p.m. at the venue. Please confirm for lunch on my personal window  so that the needful may be done.'
,
    imageUrl: './slider/news1.jpg', // Replace with actual image URL
  },
  {
    title: 'International Yoga Day',
    date: 'September 10, 2024',
    description: 'International Yoga Day 2023 was celebrated at UCOST – Uttarakhand State Council for Science and Technology, Vigyan Dham Jahjra, Dehradun on 21st June. Dr Anil Thapliyal, SGRR University, Dehradun performed deterrent ashan to the staff of UCOST, RSC, IRB II and ITITI, Dehradun on this occasion.',
    imageUrl: './slider/news4.jpg', // Replace with actual image URL
  },
  {
    title: 'Jagriti Welfare',
    date: 'July 21, 2024',
    description: 'Jagriti welfare society Harela Tree plantation ITITI Doon Sanskriti school Date :21-07-2024.Harela is a Hindu festival celebrated in the Indian state of Uttarakhand and in some regions of Himachal Pradesh. This festival is very popular in the Kumaun region of Uttarakhand, and is celebrated by the name Harela.',
    imageUrl: './slider/new3.jpg', // Replace with actual image URL
  },

  // {
  //   title: 'Cybersecurity Summit',
  //   date: 'October 5, 2024',
  //   description: 'Explore the latest trends in cybersecurity and how to protect your organization.',
  //   imageUrl: './slider/new4.jpg', // Replace with actual image URL
  // },

  // {
  //   title: 'Cybersecurity Summit',
  //   date: 'October 5, 2024',
  //   description: 'Explore the latest trends in cybersecurity and how to protect your organization.',
  //   imageUrl: './slider/new5.jpg', // Replace with actual image URL
  // },
];

export const EventsPage2 = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105"
          >
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.date}</p>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ==================== Events Page ====================
export default function Page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  // ==================== Return ====================
  return (
    <div className="relative isolate px-2 min-h-screen">

      {/* <div className="mx-auto max-w-2xl py-2 pt-16 sm:pt-10 lg:py-24">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div> */}
      <EventCardSection HorizontalScroll={false} />
      <EventsPage2 />
    </div>
  )
}

// ============================================================================
