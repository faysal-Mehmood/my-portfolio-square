"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Calendar,
  ArrowRight,
  Zap,
  Clock,
  CheckCircle,
  Users,
  Phone,
  MapPin,
} from "lucide-react";

const ContactSection = () => {
  const [hoveredCircle, setHoveredCircle] = useState<number | null>(null);

  const stats = [
    {
      number: "< 24h",
      label: "Response Time",
      icon: Clock,
      color: "text-teal-400",
    },
    {
      number: "50+",
      label: "Projects Completed",
      icon: CheckCircle,
      color: "text-brand-purple",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: Users,
      color: "text-green-400",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      color: "text-teal-400",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Available Worldwide",
      color: "text-brand-purple",
    },
    {
      icon: Mail,
      label: "Email",
      value: "hello@yourname.com",
      color: "text-green-400",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-secondary/30" />

        {/* Multiple floating elements */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-teal-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
            x: [0, 80, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-brand-purple/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.8, 0.5],
            x: [0, -60, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-400/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 py-3 px-6 rounded-full bg-gradient-to-r from-teal-500/15 to-brand-purple/15 border border-teal-500/30 mb-8 backdrop-blur-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Zap className="w-5 h-5 text-teal-400" />
            <span className="text-sm font-semibold bg-gradient-to-r from-teal-400 to-brand-purple bg-clip-text text-transparent">
              Let's Start Something Great
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-brand-purple to-pink-400">
              Transform
            </span>
            <br />
            Your Ideas?
          </motion.h2>

          <motion.p
            className="max-w-4xl mx-auto text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I'm passionate about creating exceptional digital experiences that
            drive real results. Whether you're a startup with a bold vision or
            an established company looking to innovate, let's collaborate to
            bring your project to life.
          </motion.p>
        </motion.div>

        {/* Main Contact CTA with Circular Cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
          {/* Email Circle Card */}
          <motion.a
            href="mailto:hello@yourname.com"
            className="relative group flex flex-col items-center justify-center w-64 h-64 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredCircle(0)}
            onHoverEnd={() => setHoveredCircle(null)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(20, 184, 166, 0.4)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
              animate={{ opacity: hoveredCircle === 0 ? 0.15 : 0 }}
            />
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-50"
              animate={{
                scale: hoveredCircle === 0 ? [1, 1.2, 1] : 1,
                opacity: hoveredCircle === 0 ? [0.5, 0.8, 0.5] : 0,
              }}
              transition={{
                duration: 2,
                repeat: hoveredCircle === 0 ? Number.POSITIVE_INFINITY : 0,
              }}
            />
            <Mail className="w-16 h-16 text-teal-400 mb-4 relative z-10 group-hover:text-white transition-colors" />
            <h3 className="text-2xl font-bold mb-2 relative z-10 group-hover:text-white transition-colors">
              Email Me
            </h3>
            <p className="text-muted-foreground text-sm relative z-10 group-hover:text-white/80 transition-colors">
              hello@yourname.com
            </p>
            <ArrowRight className="w-6 h-6 text-teal-400 mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all relative z-10" />
          </motion.a>

          {/* Schedule Call Circle Card */}
          <motion.a
            href="https://calendly.com/yourname"
            className="relative group flex flex-col items-center justify-center w-64 h-64 rounded-full bg-gradient-to-br from-brand-purple/10 to-purple-500/10 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            onHoverStart={() => setHoveredCircle(1)}
            onHoverEnd={() => setHoveredCircle(null)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px -12px rgba(155, 135, 245, 0.4)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-brand-purple to-purple-500 opacity-0 group-hover:opacity-15 transition-opacity duration-300"
              animate={{ opacity: hoveredCircle === 1 ? 0.15 : 0 }}
            />
            <motion.div
              className="absolute -inset-4 bg-gradient-to-br from-brand-purple/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-50"
              animate={{
                scale: hoveredCircle === 1 ? [1, 1.2, 1] : 1,
                opacity: hoveredCircle === 1 ? [0.5, 0.8, 0.5] : 0,
              }}
              transition={{
                duration: 2,
                repeat: hoveredCircle === 1 ? Number.POSITIVE_INFINITY : 0,
              }}
            />
            <Calendar className="w-16 h-16 text-brand-purple mb-4 relative z-10 group-hover:text-white transition-colors" />
            <h3 className="text-2xl font-bold mb-2 relative z-10 group-hover:text-white transition-colors">
              Schedule Call
            </h3>
            <p className="text-muted-foreground text-sm relative z-10 group-hover:text-white/80 transition-colors">
              30-min free consultation
            </p>
            <ArrowRight className="w-6 h-6 text-brand-purple mt-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all relative z-10" />
          </motion.a>
        </div>

        {/* Enhanced Stats Section with Circular Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.08, y: -8 }}
              className="glass-panel p-8 rounded-2xl text-center group border border-white/10"
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-500/20 to-brand-purple/20 rounded-full mb-6 group-hover:from-teal-500/30 group-hover:to-brand-purple/30 transition-all duration-300"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <stat.icon
                  className={`w-8 h-8 ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                />
              </motion.div>

              <motion.div
                className={`text-4xl font-bold mb-2 ${stat.color}`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.8,
                }}
              >
                {stat.number}
              </motion.div>

              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Consolidated Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl font-bold mb-8">Find Me Here</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 glass-panel p-4 rounded-xl border border-white/5"
              >
                <motion.div
                  className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className={`w-5 h-5 ${info.color}`} />
                </motion.div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    {info.label}
                  </div>
                  <div className="font-semibold">{info.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
