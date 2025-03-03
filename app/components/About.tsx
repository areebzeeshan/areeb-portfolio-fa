"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"
import Image from "next/image"

export default function About() {
  const skills = [
    { 
      icon: <Code className="w-8 h-8 text-blue-500" />, 
      title: "Frontend", 
      description: "React, Next.js, Redux",
      proficiency: 90,
      color: "blue"
    },
    { 
      icon: <Server className="w-8 h-8 text-green-500" />, 
      title: "Backend", 
      description: "Node.js, Express",
      proficiency: 85,
      color: "green"
    },
    { 
      icon: <Database className="w-8 h-8 text-purple-500" />, 
      title: "Database", 
      description: "MongoDB, Mongoose, Firebase",
      proficiency: 88,
      color: "purple"
    },
    { 
      icon: <Zap className="w-8 h-8 text-yellow-500" />, 
      title: "Performance", 
      description: "Optimization, Caching",
      proficiency: 82,
      color: "yellow"
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const getSkillBarColor = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500'
      case 'green':
        return 'bg-green-500'
      case 'purple':
        return 'bg-purple-500'
      case 'yellow':
        return 'bg-yellow-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-20"></div>
              <div className="relative bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  As a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">MERN Stack Developer</span>, 
                  I specialize in building robust and scalable web applications. With a strong foundation in MongoDB, 
                  Express.js, React, and Node.js, I create seamless full-stack solutions that deliver exceptional user experiences.
                </p>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  My expertise extends to modern frameworks like <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span> and 
                  state management tools like Redux. I'm committed to writing clean, efficient code and staying up-to-date 
                  with the latest industry trends to deliver cutting-edge solutions for my clients.
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-semibold dark:text-white">{skill.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{skill.description}</p>
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute h-full ${getSkillBarColor(skill.color)}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
                <div className="mt-2 text-sm text-right text-gray-600 dark:text-gray-400">
                  {skill.proficiency}%
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 -mt-24 -mr-24">
        <Image
          src="/placeholder.svg?height=384&width=384"
          alt="Decorative background"
          width={384}
          height={384}
          className="opacity-10 dark:opacity-5"
        />
      </div>
      <div className="absolute bottom-0 left-0 w-96 h-96 -mb-24 -ml-24">
        <Image
          src="/placeholder.svg?height=384&width=384"
          alt="Decorative background"
          width={384}
          height={384}
          className="opacity-10 dark:opacity-5"
        />
      </div>
    </section>
  )
}
