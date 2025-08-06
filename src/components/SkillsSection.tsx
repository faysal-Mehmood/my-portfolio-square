import { useState } from "react";
import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { resumeSkills } from "@/schema";

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Frontend",
    "AI/ML",
    "Backend",
    "Databases",
    "Tools",
  ];

  const filteredSkills =
    activeFilter === "All"
      ? resumeSkills
      : resumeSkills.filter((skill) => {
          if (activeFilter === "Frontend")
            return (
              skill.category === "Frontend" || skill.category === "Language"
            );
          if (activeFilter === "AI/ML") return skill.category === "AI/ML";
          if (activeFilter === "Backend") return skill.category === "Backend";
          if (activeFilter === "Databases")
            return skill.category === "Database";
          if (activeFilter === "Tools")
            return skill.category === "Tool" || skill.category === "Framework";
          return skill.category === activeFilter;
        });

  const getSkillIcon = (name: string) => {
    const iconMap: { [key: string]: string } = {
      JavaScript: "devicon-javascript-plain",
      Python: "devicon-python-plain",
      "R-Programming": "devicon-r-original",
      NextJS: "devicon-nextjs-original",
      ReactJs: "devicon-react-original",
      HTML: "devicon-html5-plain",
      CSS: "devicon-css3-plain",
      BootStrap: "devicon-bootstrap-plain",
      Tailwind: "devicon-tailwindcss-plain",
      "Node.JS": "devicon-nodejs-plain",
      "Express.JS": "devicon-express-original",
      Firebase: "devicon-firebase-plain",
      MongoDB: "devicon-mongodb-plain",
      MySQL: "devicon-mysql-plain",
      GitHub: "devicon-github-original",
      VSCode: "devicon-vscode-plain",
      Git: "devicon-git-plain",
      Pandas: "devicon-pandas-original",
      Numpy: "devicon-numpy-original",
      Matplotlib: "devicon-matplotlib-plain",
      OpenCV: "devicon-opencv-plain",
      Mediapipe: "devicon-python-plain",
      Tensorflow: "devicon-tensorflow-original",
      "Vue.JS": "devicon-vuejs-plain",
      "Nest.js": "devicon-nestjs-plain",
      Shopify: "devicon-opencv-plain",
      Wordpress: "devicon-wordpress-plain-wordmark",
    };

    return iconMap[name] || "devicon-code-plain";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="glass-panel p-8 rounded-xl backdrop-blur-md border border-white/10"
    >
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-semibold flex items-center text-white">
          <Code className="w-6 h-6 mr-3 text-brand-purple" />
          Technical Skills
        </h3>
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3 mb-8 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveFilter(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 backdrop-blur-sm border ${
              activeFilter === category
                ? "bg-brand-purple text-white border-brand-purple/50"
                : "bg-gray-800/30 text-gray-300 border-white/10 hover:bg-gray-800/50 hover:border-brand-purple/30"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6"
      >
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            whileHover={{
              scale: 1.1,
              y: -5,
              transition: { duration: 0.2 },
            }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <motion.div
              className={`relative w-16 h-16 ${skill.bgColor} rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:border-brand-purple/50 transition-all duration-300`}
              whileHover={{
                boxShadow: "0 10px 30px -5px rgba(155, 135, 245, 0.4)",
              }}
            >
              <i
                className={`${getSkillIcon(skill.name)} text-3xl`}
                style={{ color: skill.color }}
              ></i>

              {/* Shine effect on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.span
              className="text-xs font-medium mt-3 text-center text-gray-300 group-hover:text-white transition-colors max-w-20"
              whileHover={{ scale: 1.05 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {filteredSkills.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No skills found in this category.</p>
        </div>
      )}
    </motion.div>
  );
};

export default SkillsSection;
