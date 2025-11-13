
import React from 'react';
import { GithubIcon, EmailIcon, WhatsAppIcon } from './icons/SocialIcons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4 text-shadow-dark">Get In Touch</h2>
        <div className="w-20 h-1 bg-sky-500 mx-auto rounded"></div>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 my-8 text-shadow-dark">
          I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out.
        </p>
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=georgechivalo01@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-sky-500 text-white font-semibold text-lg py-3 px-8 rounded-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/30"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6 mt-12">
          <a href="https://github.com/GeorgeDrift" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors"><GithubIcon className="w-8 h-8" /></a>
          <a href="https://wa.me/265992661958" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors"><WhatsAppIcon className="w-8 h-8" /></a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=georgechivalo01@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-white transition-colors"><EmailIcon className="w-8 h-8" /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
