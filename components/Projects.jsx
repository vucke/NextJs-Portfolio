import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import badinImg from '../public/assets/projects/badin.png';
import novasImg from '../public/assets/projects/novas.png'
import n1Img from '../public/assets/projects/n1.png'
import sportklubImg from '../public/assets/projects/sportklub.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>Projects I worked on</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Badin Soft Website'
            backgroundImg={badinImg}
            projectUrl='/badin'
            tech='Wordpress'
          />
          <ProjectItem
            title='Nova S Website'
            backgroundImg={novasImg}
            projectUrl='/novas'
            tech='Wordpress'

          />
          <ProjectItem
            title='N1 Website'
            backgroundImg={n1Img}
            projectUrl='/n1'
            tech='Wordpress'

          />
          <ProjectItem
            title='Sport Klub Website'
            backgroundImg={sportklubImg}
            projectUrl='/sportklub'
            tech='Wordpress'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
