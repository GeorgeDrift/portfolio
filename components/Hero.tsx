import React, { useState, useEffect } from 'react';

const ROLES = ["Certified Computer Engineer", "Web Developer", "Data Scientist", "Mobile Developer", "Full Stack Developer", "Back End Developer", "UI/UX Developer", "Database Administrator", "IT Consultant", "DevOps Engineer", "Cloud Solutions Architect"];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY_AFTER_TYPING = 1500;


const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = ROLES[roleIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % ROLES.length);
        }
      } else {
        if (charIndex < currentRole.length) {
          setText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), DELAY_AFTER_TYPING);
        }
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? DELETING_SPEED : TYPING_SPEED);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, charIndex, roleIndex]);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center -mt-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight text-shadow-dark">
          George David Tembo
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-sky-500 mb-8 text-shadow-dark h-12 md:h-16">
          <span className="blinking-cursor">{text}</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 text-shadow-dark">
          Crafting robust and scalable solutions with a passion for clean code and innovative technology.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#projects" className="bg-sky-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/30">
            View My Work
          </a>
          <a href="/Resume George David Tembo (1).docx" download className="bg-slate-700 text-white font-semibold py-3 px-8 rounded-md hover:bg-slate-600 transition-all duration-300 transform hover:scale-105">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;