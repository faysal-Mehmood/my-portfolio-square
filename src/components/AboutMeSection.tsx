"use client";

import { motion } from "framer-motion";
import {
  User,
  Heart,
  Lightbulb,
  Target,
  BookOpen,
  Music,
  Camera,
  Code2,
  Brain,
  Rocket,
  Code2Icon,
  Map,
} from "lucide-react";

const AboutMeSection = () => {
  const personalValues = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Always exploring new technologies and creative solutions to complex problems.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Attention to detail and commitment to delivering high-quality, efficient code.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Genuine love for coding and building applications that make a difference.",
    },
  ];

  const interests = [
    { icon: Code2Icon, label: "Programming", color: "text-amber-400" },
    { icon: BookOpen, label: "Tech Blogs", color: "text-blue-400" },
    { icon: Music, label: "Music", color: "text-green-400" },
    { icon: Camera, label: "Photography", color: "text-pink-400" },
    { icon: Map, label: "Traveling", color: "text-purple-400" },
  ];

  const journey = [
    {
      year: "2018",
      title: "Started Coding Journey",
      description:
        "Began learning programming fundamentals and fell in love with problem-solving.",
      icon: Code2,
    },
    {
      year: "2019",
      title: "Web Development Focus",
      description: "Specialized in React.js and modern web technologies.",
      icon: Brain,
    },
    {
      year: "2022",
      title: "Full-Stack Developer",
      description: "Now building end-to-end solutions with modern tech stacks.",
      icon: Target,
    },
    {
      year: "2025",
      title: "AI & ML Exploration",
      description:
        "Expanded into artificial intelligence and machine learning projects.",
      icon: Rocket,
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-brand-purple/10 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-brand-purple/10 text-brand-purple mb-4">
            About Me
          </span>
          <h2 className="text-4xl font-bold mb-6">
            Hi, I'm a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-brand-purple">
              Creative Developer
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
            I’m a Full Stack Developer with 5+ years of experience building
            high-performance web and eCommerce solutions using JavaScript,
            React, Next.js, Node.js, PostgreSQL, Shopify, CMS integration, AI
            automation, and WordPress.
          </p>
        </motion.div>

        {/* Personal Introduction Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-2xl mb-16 max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-brand-purple rounded-full flex items-center justify-center">
                <User className="w-16 h-16 text-white" />
              </div>
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-teal-400/20 to-brand-purple/20 rounded-full blur-lg"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Turning Complex Problems into Simple Solutions
              </h3>
              <p className="text-muted-foreground mb-4">
                I solve complex problems with clean, efficient code. Outside of
                coding, I explore AI trends, contribute to open-source projects,
                and experiment with new frameworks always learning to stay ahead
                of the tech curve and deliver future-ready solutions.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="flex items-center gap-2 px-3 py-1 bg-secondary/50 rounded-full text-sm"
                  >
                    <interest.icon className={`w-4 h-4 ${interest.color}`} />
                    <span>{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            What Drives Me
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px -10px rgba(155, 135, 245, 0.15)",
                }}
                className="glass-panel p-6 rounded-xl text-center group"
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500/20 to-brand-purple/20 rounded-full mb-4 mx-auto group-hover:from-teal-500/30 group-hover:to-brand-purple/30 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-teal-400 group-hover:text-brand-purple transition-colors duration-300" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">My Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-400 to-brand-purple opacity-30" />

            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className={`glass-panel p-6 rounded-xl ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="text-teal-400 font-bold text-sm mb-1">
                        {item.year}
                      </div>
                      <h4 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-teal-400 to-brand-purple rounded-full"
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            className="glass-panel p-8 rounded-2xl max-w-2xl mx-auto"
            whileHover={{
              boxShadow: "0 25px 50px -10px rgba(155, 135, 245, 0.2)",
              y: -5,
            }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="text-4xl mb-4"
            >
              💡
            </motion.div>
            <h4 className="text-xl font-semibold mb-3">Fun Fact</h4>
            <p className="text-muted-foreground">
              I've written over{" "}
              <span className="text-teal-400 font-semibold">50,000 lines</span>{" "}
              of code and consumed approximately{" "}
              <span className="text-brand-purple font-semibold">
                1,000 cups
              </span>{" "}
              of coffee in the process. Each cup fueled another breakthrough! ☕
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeSection;
