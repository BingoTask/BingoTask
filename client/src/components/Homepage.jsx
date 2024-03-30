import React, { useState, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import ThreeAnimation from './ThreeAnimation';

const HomePage = () => {
  const languages = ['Welcome to', 'Bienvenue à', 'Bienvenido a']; // Add more languages if needed
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const languageInterval = setInterval(() => {
      if (currentIndex < languages[currentLanguageIndex].length) {
        setCurrentText(languages[currentLanguageIndex].substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(languageInterval);
        setTimeout(() => {
          setCurrentLanguageIndex((prevIndex) =>
            prevIndex === languages.length - 1 ? 0 : prevIndex + 1
          );
        }, 2000); // Delay before switching to the next language
      }
    }, typingSpeed);

    return () => {
      clearInterval(languageInterval);
    };
  }, [currentLanguageIndex]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-10">
      <div className="max-w-4xl space-y-8">
        <h1 className="text-5xl font-bold text-white">
          {currentText},
        </h1>
        <h1 className="text-5xl font-bold text-white">
          BingoTask
        </h1>
        <p className="text-xl font-light text-white opacity-80">
          Empowering Your Digital Journey with Innovative Solutions
        </p>

        <div className="flex flex-wrap space-y-4 md:space-y-0 md:space-x-4">
          <RouterLink to="/pricing" className="block w-full md:w-auto text-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg transition-transform transform md:hover:scale-105">
            Our Services
          </RouterLink>
          <RouterLink to="/about" className="block w-full md:w-auto text-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg transition-transform transform md:hover:scale-105">
            Learn More
          </RouterLink>
          <RouterLink to="/login" className="block w-full md:w-auto text-center px-6 py-3 text-white font-light underline hover:text-opacity-80">
            Already with us? Log In
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default HomePage;