import React from 'react';
import { skills } from '../utils/data';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-slate-800">
            My Skills
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Here are the technologies and tools I've mastered throughout my journey as a full stack developer.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-slate-800 mb-1">{skill.name}</h3>
              <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-slate-500 mt-2">{skill.level}%</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;