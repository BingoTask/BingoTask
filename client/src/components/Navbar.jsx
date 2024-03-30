import React, { useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover } from '@headlessui/react';
import {HiBars3 as Bars3Icon} from 'react-icons/hi2';
import {BsChevronDoubleDown as ChevronDownIcon} from 'react-icons/bs';
import {FaCircleXmark as XMarkIcon} from 'react-icons/fa6';
import { gsap } from 'gsap';
import { CSSPlugin } from 'gsap/CSSPlugin';
import logo from '../images/logo.jpg'; 
import {Link} from 'react-router-dom';
// Define your AnimatedLogo component
const AnimatedLogo = () => {
  const [text, setText] = useState('');
  const fullText = 'BINGO';
  const typingSpeed = 100; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <img src={logo} alt="logo" className="w-12 cursor-pointer" />
      <div className="text-white text-xl font-bold">{text}</div>
    </div>
  );
};

gsap.registerPlugin(CSSPlugin);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
    gsap.to('.mobile-menu', { opacity: 1, x: 0, duration: 0.3, ease: 'power3.out' });
  };

  const handleMobileMenuClose = () => {
    gsap.to('.mobile-menu', { opacity: 0, x: -20, duration: 0.3, ease: 'power3.out', onComplete: () => setMobileMenuOpen(false) });
  };


  const products = [
    { name: 'Tasks', href: '#' },
    { name: 'Product 2', href: '#' },
    { name: 'Product 3', href: '#' },
    // Add more products as needed
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <header className="gradient-bg-navbar" style={{ position: 'fixed', top: '0', width: '100%', zIndex: '100' }}>
      <nav className="flex max-w-7xl items-center justify-between p-6 lg:px-8 " aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/">
            <AnimatedLogo />
          </Link>

        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={handleMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {products.map((product) => (
            <a href={product.href} className="text-sm font-semibold leading-6 text-gray-900" key={product.name}>
              {product.name}
            </a>
          ))}
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Contact Us
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Login
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={handleMobileMenuClose}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className={`mobile-menu fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  white-glassmorphism px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ${mobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}`}>
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src={logo}
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={handleMobileMenuClose}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover-bg-gray-50"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact Us
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Login
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;