import React from 'react'

import ProjectCard from './ProjectCard';


const works = [
    
    {
      imgSrc: '/images/project-3.png',
      title: 'AI ChatBot',
      tags: ['Development', 'API'],
      projectLink: 'https://github.com/kamalesh083/ai-chat-bot'
    },    
    {
      imgSrc: '/images/project-5.png',
      title: 'eCommerce Extension',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/capGoblin/eco-shopping-assistant'
    },
    {
      imgSrc: '/images/project-6.png',
      title: 'Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/kamalesh083/Portfolio'
    },
  ];

const Work = () => {
  return (
    <section
    id = "work"
    className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
            My portfolio highlights
        </h2>

        <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({imgSrc,title,tags,projectLink},key) => (
            <ProjectCard 
            key={key}
            imgSrc={imgSrc}
            title={title}
            tags={tags}
            projectLinks={projectLink}
            classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work