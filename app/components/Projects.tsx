"use client"
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "POS Maxon Enterprise",
    description: "A full-stack POS solution with Next.js, that includes inventory management, customer management, and Invoice generation.",
    image: "/pos-maxon.png",
    link: "https://pos-maxon.vercel.app/"
  },
  {
    id: 2,
    title: "Wakeel-AI",
    description: "Real-time chat application powered by Wakeel AI (assistant) and natural language processing capabilities.",
    image: "/wakeel-ai.jpg",
    link: "https://www.wakeel.ai/"
  },
  {
    id: 3,
    title: "Expense Tracker",
    description: "A simple expense tracker application built with Next.js, Tailwind CSS and shadcn/ui with database postgreSQL.",
    image: "/expense-tracker.jpg",
    link: "https://expense-tracker-lake-theta.vercel.app/"
  },
  {
    id: 4,
    title: "Task Marketplace",
    description: "Collaborative task management platform with real-time updates and team collaboration features.",
    image: "/task-marketplace.jpg",
    link: "https://github.com/yourusername/task-manager"
  },
  {
    id: 5,
    title: "Elite Bond 2.0",
    description: "A private member club of people who support each other in different areas of life to achieve greater success",
    image: "/elite-bond.jpg",
    link: "https://elite2-0.vercel.app/"
  }
]

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <section id="projects" className="py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Projects</h2>
        <p className="text-gray-600 dark:text-gray-400">Showcasing my latest work and personal projects</p>
      </div>
      
      {/* Container with fade effect */}
      <div className="relative max-w-7xl mx-auto">
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />
        
        {/* Scrolling container */}
        <div 
          ref={containerRef}
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            msOverflowStyle: 'none',
            scrollbarWidth: 'none'
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-[200px] sm:min-w-[300px] bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden flex-shrink-0 snap-center transform transition-transform duration-300 hover:scale-105"
            >
              <Link href={project.link} target="_blank" className="block">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">
                    {project.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />
      </div>
    </section>
  )
}

export default Projects
