import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Vuk | Resume</title>
        <meta
          name='description'
          content='Junior backend developer with a passion for learning new programming languages and developing innovative
          applications. Mostly focused on back end devoplement in PHP language and also with good knowledge in
          NodeJs and JavaScript development'
        />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Vuk Vučić</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/vuk-vucic/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/vucke'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Front End <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Back End
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Front End</p>
            <p className='py-2'>Web Development</p>
            <p>Back End</p>
          </div>
        </div>
        <p>
          I am Analytical, innovative, and motivated web development professional
          with experience in full stack web development, and
          organizational effectiveness in fast-paced and challenging
          environments.Diverse analytical skills, team collaboration, and
          relationship building.
        </p>
        <br />
        <p>
          I studied at the Faculty of Electrical Engineering at the University of Maribor, program Media Communications
          with a focus on visual communications. At the faculty, I gained skills in web development,
          3D modeling, animation, communication in media, photography, and graphic design.
        </p>
        <br />
        <p>
          In web development, I have experience in javascript, React and php
          development and my other skills that I have been working with databases ,
          WordPress development,Jenkins, Docker, and unit testing,
        </p>
        <br />
        <p>
          Also, I have a strong fundamental knowledge of CS concepts like Object Oriented Programming,
          MVC, Rest and Unit Testing, and Test Driven Development.,
        </p>
        <br />
        <p>
          As a team member, I have experience working in an agile environment and using agile methodologies
          for building software in a collaborative environment and experience in git workflowIn web development,
        </p>


        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>Php
            <span className='px-2'>|</span>Wordpress
            <span className='px-2'>|</span>Typescript
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Sql
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span> Unit Testing
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Badin Soft
            </span>
            <span className='px-2'>|</span>Niš, Serbia
          </p>
          <p className='py-1 italic'>Full Stack Developer (1.7.2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Creating custom wordpress themes and plugins using Php
            </li>
            <li>
              Working with clients to gather requirements and
              create mockups for new features and pages
            </li>
            <li>
              Working with other develoeprs on creating custom API's
              and other backend solutions
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              LunaLabs and Sleek Design
            </span>
            <span className='px-2'>|</span>Maribor, Slovenia
          </p>
          <p className='py-1 italic'>Full Stack Developer (1.12.2021 - 1.7.2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developing server-side applications using Php
            </li>
            <li>
              Using MySQL and NoSQL database on the back end
            </li>
            <li>
              Front end development experience using ReactJS
            </li>
            <li>
              Developing custom solutions for wordpress websites
            </li>
          </ul>
        </div>
        <br />

      </div>
    </>
  );
};

export default resume;
