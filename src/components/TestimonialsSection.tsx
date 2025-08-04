"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Play,
  Pause,
} from "lucide-react";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsPerView, setCardsPerView] = useState(3);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Solutions",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with this developer was an absolute game-changer for our project. The attention to detail and innovative solutions exceeded all our expectations.",
      rating: 5,
      project: "E-commerce Platform",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupHub Inc",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Exceptional technical skills combined with great communication. The machine learning models delivered were accurate and well-documented.",
      rating: 5,
      project: "ML Analytics Dashboard",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder",
      company: "HealthTech Innovations",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The fraud detection system developed for us has saved our company thousands of dollars. Impressive expertise in AI and security details.",
      rating: 5,
      project: "Fraud Detection System",
    },
    {
      id: 4,
      name: "David Park",
      role: "Lead Developer",
      company: "Digital Agency Pro",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Clean, efficient code and modern development practices. The React applications built were performant and scalable with great collaboration.",
      rating: 5,
      project: "Web Application Suite",
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Marketing Director",
      company: "Growth Dynamics",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Outstanding web development work. Beautiful, responsive designs that converted visitors into customers. Understood our business needs perfectly.",
      rating: 5,
      project: "Marketing Website",
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Startup Founder",
      company: "InnovateNow",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The AI integration was seamless and powerful. Delivered a solution that not only met but exceeded our technical requirements and business goals.",
      rating: 5,
      project: "AI-Powered Platform",
    },
  ];

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - cardsPerView;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, cardsPerView]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - cardsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - cardsPerView;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const goToSlide = (index: number) => {
    const maxIndex = testimonials.length - cardsPerView;
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const maxIndex = testimonials.length - cardsPerView;
  const translateX = -(currentIndex * (100 / cardsPerView));

  return (
    <section className="py-24 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-purple/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
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
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-teal-400 mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mb-6">
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-brand-purple">
              Clients Say
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Don't just take my word for it. Here's what clients and
            collaborators have to say about working with me.
          </p>
        </motion.div>

        {/* Main Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Floating Quote Marks */}
          <motion.div
            className="absolute -top-8 -left-8 text-teal-400/20 z-0"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          >
            <Quote className="w-24 h-24" />
          </motion.div>
          <motion.div
            className="absolute -bottom-8 -right-8 text-brand-purple/20 z-0 rotate-180"
            animate={{ rotate: [180, 185, 175, 180] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: 2,
            }}
          >
            <Quote className="w-24 h-24" />
          </motion.div>

          {/* Testimonials Slider */}
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex"
              animate={{
                x: `${translateX}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`flex-shrink-0 px-3 ${
                    cardsPerView === 1
                      ? "w-full"
                      : cardsPerView === 2
                      ? "w-1/2"
                      : "w-1/3"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="glass-panel p-6 md:p-8 rounded-2xl h-full relative overflow-hidden"
                    whileHover={{
                      boxShadow: "0 25px 50px -10px rgba(155, 135, 245, 0.2)",
                      y: -8,
                      scale: 1.02,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-brand-purple/5 rounded-2xl" />

                    <div className="relative z-10 h-full flex flex-col min-h-[400px]">
                      {/* Rating Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, rotate: -180 }}
                            animate={{ opacity: 1, rotate: 0 }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                          >
                            <Star className="w-5 h-5 text-yellow-400 fill-current mx-0.5" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Testimonial Content */}
                      <div className="flex-1 flex flex-col justify-between text-center">
                        <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground mb-6 italic flex-1">
                          "{testimonial.content}"
                        </blockquote>

                        <div className="flex flex-col items-center gap-4">
                          {/* Client Image */}
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-gradient-to-r from-teal-400 to-brand-purple p-1">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-full h-full rounded-full object-cover"
                              />
                            </div>
                            <motion.div
                              className="absolute -inset-1 bg-gradient-to-r from-teal-400/20 to-brand-purple/20 rounded-full blur-md"
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 20,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: "linear",
                              }}
                            />
                          </motion.div>

                          {/* Client Info */}
                          <div className="text-center">
                            <h4 className="text-lg font-bold mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-teal-400 font-medium text-sm mb-1">
                              {testimonial.role}
                            </p>
                            <p className="text-xs text-muted-foreground mb-2">
                              {testimonial.company}
                            </p>
                            <span className="inline-block px-2 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-full">
                              {testimonial.project}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Previous Button */}
            <motion.button
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="flex items-center justify-center w-12 h-12 glass-panel rounded-full text-muted-foreground hover:text-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{
                scale: currentIndex === 0 ? 1 : 1.1,
                boxShadow:
                  currentIndex === 0
                    ? "none"
                    : "0 10px 25px -5px rgba(20, 184, 166, 0.2)",
              }}
              whileTap={{ scale: currentIndex === 0 ? 1 : 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Progress Indicators */}
            <div className="flex items-center gap-4">
              {/* Dot Indicators */}
              <div className="flex gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-teal-400 scale-125"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <motion.button
                onClick={toggleAutoPlay}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                  isAutoPlaying
                    ? "bg-teal-500/20 text-teal-400"
                    : "bg-muted-foreground/20 text-muted-foreground"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAutoPlaying ? (
                  <Pause className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4" />
                )}
              </motion.button>

              {/* Progress Bar */}
              <div className="w-32 h-1 bg-muted-foreground/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-400 to-brand-purple rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: isAutoPlaying ? "100%" : "0%" }}
                  transition={{
                    duration: 4,
                    ease: "linear",
                    repeat: isAutoPlaying ? Number.POSITIVE_INFINITY : 0,
                  }}
                />
              </div>
            </div>

            {/* Next Button */}
            <motion.button
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="flex items-center justify-center w-12 h-12 glass-panel rounded-full text-muted-foreground hover:text-teal-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{
                scale: currentIndex >= maxIndex ? 1 : 1.1,
                boxShadow:
                  currentIndex >= maxIndex
                    ? "none"
                    : "0 10px 25px -5px rgba(20, 184, 166, 0.2)",
              }}
              whileTap={{ scale: currentIndex >= maxIndex ? 1 : 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "50+", label: "Happy Clients", color: "text-teal-400" },
            {
              number: "100%",
              label: "Success Rate",
              color: "text-brand-purple",
            },
            { number: "24/7", label: "Support", color: "text-green-400" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-panel p-6 rounded-xl text-center"
            >
              <motion.div
                className={`text-3xl font-bold mb-2 ${stat.color}`}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.5,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
