"use client"

import { motion } from "framer-motion"
import { Code, Layers, Server, Zap, ChartColumnIcon, RefreshCcw } from "lucide-react"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "React, Next.js, React Native" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Backend", description: "Python, JavaScript, Django" },
    { icon: <Zap className="w-8 h-8 text-purple-500" />, title: "Machine Learning", description: "MLOps, Agentic Frameworks, TensorFlow" },
    { icon: <Layers className="w-8 h-8 text-yellow-500" />, title: "Orchestration", description: "AWS, GCP" },
    { icon: <RefreshCcw className="w-8 h-8 text-orange-500" />, title: "Development Lifecycle", description: "Docker, GitHub Actions, CI/CD" },
    { icon: <ChartColumnIcon className="w-8 h-8 text-red-500" />, title: "Data Science", description: "Pandas, NumPy, Scikit-learn" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-center">
          <motion.div
            className="md:w-1/2 grid md:grid-cols-3 gap-6 sm:grid-cols-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

