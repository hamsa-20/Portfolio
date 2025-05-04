import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full h-[400px] bg-slate-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hamsa Dixit" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-lg"
                animate={{
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.div 
                className="absolute -top-6 -left-6 w-24 h-24 border-4 border-blue-400 rounded-lg"
                animate={{
                  rotate: [0, -90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-3 text-slate-800 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <motion.div 
              className="w-20 h-1.5 bg-blue-600 mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />
            
            <motion.p 
              className="text-slate-600 dark:text-slate-300 text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello! I'm Hamsa Dixit, a passionate full stack developer with a keen eye for creating elegant solutions to complex problems. My journey in development has equipped me with a diverse skill set and a deep understanding of both front-end and back-end technologies.
            </motion.p>
            
            <motion.p 
              className="text-slate-600 dark:text-slate-300 text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I enjoy building applications that are not only functional but also intuitive and responsive. My approach combines technical expertise with creative problem-solving to deliver high-quality digital experiences that meet user needs and business goals.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {[
                'Innovative Solutions',
                'Clean Code',
                'User-Centric Design',
                'Continuous Learning'
              ].map((item, index) => (
                <motion.div 
                  key={item}
                  className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-blue-600" />
                  <p className="font-medium text-slate-700 dark:text-slate-200">{item}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;