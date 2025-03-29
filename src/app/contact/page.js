"use client"
import React, { useEffect } from 'react'

export default function page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  return (

    <div className='p-2 pb-20 bg-white'>
      <h1 className="m-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| CONTACT</span> :</h1>

      {/* <div className='m-2 w-full'> */}
      {/*   <HTMLRender FilePath={"/RichText/ContactPage.html"} /> */}
      {/* </div> */}

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Admission Office</h3>
              <p>Tel.: 01352976248</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Director/ Principal Office</h3>
              <p>Tel.: 8865906711 / 9316771219</p>
              <p>Email: <a href="mailto:principalititi@gmail.com" className="text-blue-600">principalititi@gmail.com</a></p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Account Section</h3>
              <p>Tel.: 9729849947</p>
              <p>Email: <a href="mailto:principalititi@gail.com" className="text-blue-600">principalititi@gail.com</a></p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Tribal Education</h2>
          <p>
            ITITI aims to provide quality education in the field of information technology to the tribes of India. By combining traditional educational practices with modern technology, ITITI equips its students with the skills necessary to excel in the digital age. To provide professional services to the government and other agencies in the field of education, in general, and school education, in particular, for the development and growth of distance and open school system and develop appropriate curriculum for vocational and continuing education to prepare student population for the world of work.
          </p>
          <p className="mt-4">
            The institute follows the CBSE curriculum, ensuring that students receive a well-rounded education that meets national standards. CBSE is known for its rigorous academic syllabus and comprehensive assessment system. As a co-educational school, ITITI promotes gender equality and encourages students of all genders to learn and grow together. This inclusive environment fosters collaboration and understanding among students, preparing them for the diverse world they will enter after their schooling.
          </p>
          <p className="mt-4">
            ITITI is committed to providing a conducive learning environment for its students. With well-equipped classrooms, state-of-the-art computer labs, and a dedicated faculty, the institute strives to create an atmosphere that nurtures both academic and personal growth.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Principal's Message</h2>
          <p>
            I hope this message finds you in good health and high spirits as we embark on a new chapter in our journey together. It is with great pleasure and heartfelt enthusiasm that I write to you today, as your principal, to share a message of inspiration, warmth, inclusivity, and power.
          </p>
          <p className="mt-4">
            In our hands, we hold the key to an extraordinary future. Our school community is a tapestry woven from diverse backgrounds, unique talents, and boundless potential. Each one of us plays an invaluable role in shaping the vibrant mosaic that defines who we are and what we can achieve.
          </p>
          <p className="mt-4">
            I encourage all students to dare to dream big, for your potential knows no bounds. Set your goals high and work diligently to achieve them, knowing that your dedication and hard work will pave the way for a bright and successful future.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            Address: Vidya Mata Rajrani Marg, Jhajhra, Vigyan Dham, Dehradun, Uttarakhand-248007
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">New Admission</h2>
          <p>
            Admission is open to children of all communities depending on the number of seats available in the class. The Principal reserves the right to admit the child into the class deemed suitable for him/her.
          </p>
          <p className="mt-4">
            Admission is on the basis of an assessment and interaction with the child. Submission of registration form with a passport size photograph of the student is the first step of admission.
          </p>
          <p className="mt-4">
            Parents are required to carry these documents for admission: Birth certificate
          </p>
        </section>
      </div>
    </div>
  )
}
