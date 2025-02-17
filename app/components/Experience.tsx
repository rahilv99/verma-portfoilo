"use client"

import { Briefcase, Calendar } from "lucide-react"
import { motion } from "framer-motion"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

export default function Experience() {
  const experiences = [
    {
      company: "Auxiom AI",
      period: "Nov 2024 - Present",
      role: "Founder",
      link: "https://auxiomai.com",
      responsibilities: [
        "Your personal AI journalist, curating news in a weekly original podcast",
        "Tech stack: Python, AWS, React Native, PostgreSQL, Docker, GitHub",
        "End-to-end AWS orchestration (SQS, S3, Lambda, RDS, CloudWatch, Amplify)",
        "100+ users in first month of beta launch",
        "Over 10 hours of podcasts produced"
      ],
    },
    {
      company: "Functional Neurosurgery Lab, National Institutes of Health",
      period: "May 2024 - Present",
      role: "Data Engineer",
      link: "https://www.linkedin.com/posts/rahilverma_have-you-ever-had-a-hard-time-paying-attention-activity-7224814651425890307-2QLb?utm_source=share&utm_medium=member_desktop",
      responsibilities: [
        "Developed a neural data pipeline integrated with Biowulf (HPC cluster at NIH)",
        "Processed over 100 TB of raw iEEG data to extract features of cortical traveling waves",
        "Built a suite of tools to visualize statistically significant features in the data"
      ],
    },
    {
      company: "Duke Applied Machine Learning Group",
      period: "May 2024 - Present",
      role: "Co-head of Data Science",
      link: "https://duke.campusgroups.com/damlg/home/",
      responsibilities: [
        "Built semantic search for the Duke course finder using RAG and sentiment analysis",
        "Developed MLOps cloud computing course for member training program, delivered to 50+ students",
        "Created modular pipelines for model serving on AWS",
        "Attracted collaborations with 10+ YC-backed early-stage startups"
      ],
    },
    {
      company: "Duke University Department of Computer Science",
      period: "Aug 2023 - May 2024",
      role: "Teaching Assistant",
      responsibilities: [
        "Led weekly office hours for 200+ students in data structures and algorithms",
        "Led a discussion section and weekly office hours on fundamental Object-Oriented principles"
      ],
    },
    {
      company: "National Institute of Standards and Technology (NIST)",
      period: "May 2023 - Aug 2023",
      role: "Research Fellow",
      responsibilities: [
        "Optimized the shelf life of pharmaceutical drugs",
        "Created a random forest machine learning model with active learning to predict the stability of solutions",
        "Model reduced 100s of hours of manual testing by achieving 97% accuracy"
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Professional Experience" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 underline dark:text-white flex items-center">
                  <a href={exp.link} aria-label={exp.company} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}

