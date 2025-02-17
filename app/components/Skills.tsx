"use client"

import { motion } from "framer-motion"
import { Code, Database, Layout, GitBranch, Terminal, Layers, Cpu, Workflow } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { Progress } from "@/components/ui/progress"

const SkillIcon = ({ icon: Icon, color }: { icon: React.ElementType; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)

interface Skill {
  icon: React.ElementType
  name: string
  expertise: number
  color: string
}

const skills: Skill[] = [
  {
    icon: Code,
    name: "Python",
    expertise: 90,
    color: "text-green-500",
  },
  {
    icon: Code,
    name: "Java",
    expertise: 70,
    color: "text-green-500",
  },
  {
    icon: Code,
    name: "TypeScript",
    expertise: 45,
    color: "text-green-500",
  },
  {
    icon: Code,
    name: "Swift",
    expertise: 30,
    color: "text-green-500",
  },
  {
    icon: Code,
    name: "MATLAB",
    expertise: 80,
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "PostgreSQL",
    expertise: 75,
    color: "text-purple-500",
  },
  {
    icon: Layout,
    name: "React (Next.js)",
    expertise: 85,
    color: "text-pink-500",
  },
  {
    icon: Layout,
    name: "React Native",
    expertise: 55,
    color: "text-pink-500",
  },
  {
    icon: GitBranch,
    name: "GitHub",
    expertise: 90,
    color: "text-orange-500",
  },
  {
    icon: Terminal,
    name: "Linux",
    expertise: 75,
    color: "text-yellow-500",
  },
  {
    icon: Layers,
    name: "AWS/GCP",
    expertise: 80,
    color: "text-indigo-500",
  },
  {
    icon: Cpu,
    name: "Docker",
    expertise: 50,
    color: "text-red-500",
  },
  {
    icon: Workflow,
    name: "MLOps",
    expertise: 80,
    color: "text-cyan-500",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full sm:w-[300px]"
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group h-full">
                <div className="flex items-center space-x-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <div className="mt-2">
                      <Progress 
                        value={skill.expertise} 
                      />
                    </div>
                    <div className="mt-1 text-sm text-right text-gray-600 dark:text-gray-400">
                      {skill.expertise}%
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

