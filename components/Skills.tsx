import React, { useState, useEffect } from 'react';
import { Skill } from '../types';
import { getSkillIcon } from './icons/SkillIcons';
import { fetchSkills } from '../services/apiService';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="flex items-center space-x-4 transition-transform duration-300 transform hover:-translate-y-1 text-shadow-dark">
    <div className="text-sky-500">{getSkillIcon(skill.icon)}</div>
    <span className="text-lg font-bold text-gray-200">{skill.name}</span>
  </div>
);

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSkills();
        setSkills(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch skills.');
      } finally {
        setLoading(false);
      }
    };
    loadSkills();
  }, []);

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4 text-shadow-dark">Technical Skills</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded"></div>
      </div>
      {loading && <p className="text-center text-white">Loading skills...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Skills;