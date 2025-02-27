import React from 'react'
import Sidebar from './Sidebar'
import Image from 'next/image'

function IntroDescription() {
  return (
    <div className="flex mt-6">
      <div className="flex flex-col w-3/5 pr-4">
        <p className="text-[34px]">Hello, I am Arpit</p>
        <p className='mt-4'>I’m Arpit Agutale, a passionate Full-Stack and Mobile Engineer from Nagpur, India, with a BTech in Computer Science and Engineering (AIML) from Shri Ramdeobaba College of Engineering and Management.</p>
        <p className='mt-4'>
          I specialize in building scalable and efficient web and mobile applications, focusing on performance, backend architecture. My expertise spans C++, JavaScript, Dart, Python, Next.js, React, Flutter, PostgreSQL, and AWS. Beyond development, I have a keen interest in research, particularly in predictive modeling, blockchain security, and AI-driven solutions.</p>
        <p className='mt-4'>
          With a problem-solving mindset and 350+ LeetCode problems solved, I continuously refine my skills to build innovative and efficient solutions.</p>
        <div className="flex mt-6">
          <a href='https://www.linkedin.com/in/arpit-agutale' className="border-2 border-black rounded-lg border-dashed mr-8">
            <div className='flex p-2'>
              <Image
                src="/linkedin.svg"
                width={40}
                height={40}
                alt="Linkedin"
              />
              <div className='p-1 text-2xl'>LinkedIn</div>
            </div>
          </a>
          <a href='https://github.com/Agutale-Arpit' className="border-2 border-black rounded-lg border-dashed mr-8">
            <div className='flex p-2 ps-3'>
              <Image
                className='p-1 ps-0'
                src="/github.svg"
                width={30}
                height={30}
                alt="Github" />
              <div className='p-1 text-2xl'>Github</div>
            </div>
          </a>
          <a href='https://x.com/Mount_Zzzzk' className="border-2 border-black rounded-lg border-dashed mr-8">
            <div className='flex p-2'>
              <Image
                src="/twitter.svg"
                width={32}
                height={32}
                alt="Twitter"
              />
              <div className='p-1 text-2xl'>Twitter</div>
            </div>
          </a>
        </div>
      </div>
      <div className="m-12 mt-4">
        <Image
          src="/dummyProfilePic.png"
          alt="Dummy Profile Picture"
          width={350}
          height={350}
          className='object-cover rounded-lg'
          unoptimized
        />
      </div>
    </div>

  )
}

export default IntroDescription
