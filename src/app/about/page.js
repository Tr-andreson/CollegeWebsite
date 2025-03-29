"use client"
import React, { useEffect } from 'react'
import AboutCard from '@/components/About/AboutCard'
import { PresidentCaption } from "./presidentCaption"

// ==================== About Page ====================
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

      <div className="mx-auto max-w-4xl py-2 pt-8 lg:py-24">

        <div className="text-center">
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl">
            “Aspires to be a pre-eminent deemedd university of national standing in education and innovation”.
          </h1>
          <p className="mt-6 text-md sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
            All academic programmes are approved by AICTE, recognized by Department of Higher

            Education, Government of West Bengal and affiliated to Maulana Abul Kalam Azad University of Technology, West Bengal (formerly West Bengal University of Technology) .
          </p>
        </div>
      </div>
      <AboutCard />


      <div className="flex items-center justify-center ">
        <img src="/car1/1.JPG" className="max-w-lg" />
      </div>
      <div className="flex justify-center items-center  p-4">
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl">
          <h1 className="text-2xl font-bold text-center mb-4">President Photo Caption</h1>
          <p className="text-lg text-gray-800">
            A unique honour—a moment of pride. Our students had a unique honour to
            meet and receive blessings from the most respected President of India,
            <span className="font-semibold"> Smt. Droupadi Murmu Ji</span>, in Rashtrapati Bhawan.
            We have the distinction of empowering India's most primitive and vulnerable
            tribal students from <span className="font-semibold">Van Raji</span>, <span className="font-semibold">Buxa</span>,
            and other communities.
          </p>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
