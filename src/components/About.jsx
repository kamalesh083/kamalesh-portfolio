import React from 'react'

const aboutItems = [
    {
      label: 'Project done',
      number: 3
    },
    {
      label: 'Years of experience',
      number: 0.5
    }
  ];

const About = () => {
  return (
   <section
    id = "about"
    className='section'
   >
    <div className="container">
         <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
            <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m A G Kamalesh, passionate about problem-solving and experienced in Java and web development. I enjoy tackling challenges with a mix of creativity and technical knowledge, striving to create efficient solutions and build functional, visually appealing websites. My goal is to deliver meaningful digital experiences that balance performance and design.
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-7 ">
                {
                aboutItems.map(({label,number},key) => (
                    <div key={key}>
                        <div className="flex items-center md:mb-2">
                            <span className="text-2xl font-bold md:text-4xl">{number}</span>
                            <span className="text-orange-300 font-semibold md:text-3xl">+</span>
                        </div>
                        <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                ))
                }

                <img 
                src="/images/logo.png" 
                alt="Logo" 
                width={50}
                height={50}
                className="ml-auto md:w-[75px] md:h-[75px]" />
            </div>
         </div>
    </div>
   </section>
  )
}

export default About