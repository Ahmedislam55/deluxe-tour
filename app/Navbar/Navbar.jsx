"use client";
import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  X,
  Phone,
  MapPin,
  Globe,
  Search,
  ChevronDown,
} from "lucide-react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuItems,
  MenuItem,
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/image/logo.png";
import styles from "./Navbar.module.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const languages = ["EN", "EN-US", "EN-UK"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (isLangOpen && !event.target.closest(".lang-selector")) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLangOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Destinations",
      href: "#",
      dropdown: [
        { name: "Egypt", href: "/egypt" },
        { name: "Jordan", href: "/jordan" },
      ],
    },
    { name: "Multy Country Tours", href: "/" },
    { name: "Shore Excursions", href: "/" },
    { name: "Blogs", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <div className="fixed w-full z-50">
      {/* Top Bar - Logo, Contact & Socials */}
      <div
        className={`w-full transition-all duration-500 bg-white sm:px-10 ${scrolled ? "max-h-0 py-0 opacity-0 overflow-hidden" : "max-h-20 py-2 opacity-100 border-b border-gray-100"}`}
      >
        <div className="container mx-auto flex justify-center md:justify-between items-center relative">
          {/* Contact Info (Desktop Only - Left) */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="mailto:info@deluxetourseg.com"
              className="flex items-center gap-2 text-xs md:text-sm font-medium transition-colors"
            >
              <MapPin
                size={20}
                className="text-[#0165B5] hover:text-amber-500 duration-300"
              />
              <span className="text-zinc-600 duration-300 hover:scale-105">
                info@deluxetourseg.com
              </span>
            </a>
            <a
              href="tel:+201001363330"
              className="flex items-center gap-2 text-xs md:text-sm font-medium transition-colors "
            >
              <Phone
                size={20}
                className="text-[#0165B5] hover:text-amber-500 duration-300"
              />
              <span className="text-zinc-600 duration-300 hover:scale-105">
                +20 100 136 3330
              </span>
            </a>
          </div>

          {/* Social Icons (Mobile Only - Centered) */}
          <div className="flex md:hidden items-center justify-center gap-6 w-full">
            <a
              href="#"
              className="text-[#0165B5] hover:text-amber-500 duration-300 transition-colors"
            >
              <FaWhatsapp size={20} />
            </a>
            <a
              href="#"
              className="text-[#0165B5] hover:text-amber-500 duration-300 transition-colors"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="#"
              className="text-[#0165B5] hover:text-amber-500 duration-300 transition-colors"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="#"
              className="text-[#0165B5] hover:text-amber-500 duration-300 transition-colors"
            >
              <FaFacebookF size={20} />
            </a>
          </div>

          {/* Social Icons & Language (Desktop Only - Right) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="transition-colors duration-300 bg-[#0165B5] text-white rounded"
              >
                <FaWhatsapp
                  size={35}
                  className="border p-2 rounded hover:border-none hover:bg-amber-500 duration-300"
                />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 bg-[#0165B5] text-white rounded"
              >
                <FaFacebookF
                  size={35}
                  className="border p-2 rounded hover:border-none hover:bg-amber-500 duration-300"
                />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 bg-[#0165B5] text-white rounded"
              >
                <FaYoutube
                  size={35}
                  className="border p-2 rounded hover:border-none hover:bg-amber-500 duration-300"
                />
              </a>
              <a
                href="#"
                className="transition-colors duration-300 bg-[#0165B5] text-white rounded"
              >
                <FaLinkedinIn
                  size={35}
                  className="border p-2 rounded hover:border-none hover:bg-amber-500 duration-300"
                />
              </a>
            </div>

            <div className="relative ml-2 lang-selector">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 transition-all duration-300 border-l border-[#0165B5] pl-4 font-bold text-sm text-[#0165B5] hover:text-[#0165B5] hover:border-[#0165B5] cursor-pointer hover:text-amber-500"
              >
                <span>{lang}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`absolute right-0 mt-4 w-44 origin-top-right rounded-2xl bg-white/90 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] ring-1 ring-black/5 focus:outline-none transition-all duration-300 z-[100] border border-white/20 py-1.5 overflow-hidden ${
                  isLangOpen
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible translate-y-2 scale-95"
                }`}
              >
                <div className="absolute -top-1.5 right-4 w-3 h-3 bg-white rotate-45 border-l border-t border-black/5"></div>

                <div className="relative flex flex-col gap-0.5 px-1.5">
                  {languages.map((l) => (
                    <button
                      key={l}
                      className={`group relative flex items-center justify-between w-full px-4 py-2.5 text-sm font-semibold transition-all duration-200 rounded-xl ${
                        lang === l
                          ? "bg-[#0165B5]/10 text-[#0165B5]"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                      onClick={() => {
                        setLang(l);
                        setIsLangOpen(false);
                      }}
                    >
                      <span className="relative z-10 uppercase tracking-wide">
                        {l}
                      </span>

                      <div className="relative flex items-center justify-center">
                        {lang === l ? (
                          <span className="w-2 h-2 rounded-full bg-[#0165B5] shadow-[0_0_8px_rgba(1,101,181,0.5)]"></span>
                        ) : (
                          <span className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-gray-300 transition-colors"></span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar - Links & CTA */}
      <nav
        className={`w-full transition-all duration-300 ${scrolled ? "bg-white shadow-lg md:py-8 py-4" : "bg-transparent border-b border-white/10 py-4 md:py-8"}`}
      >
        <div className="container mx-auto px-6 flex justify-between md:justify-center items-center relative">
          {/* Desktop Logo (Added) */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-2 group absolute left-10"
          >
            <Image
              src={logo}
              alt="delux tours egypt"
              className="w-4 lg:w-14 hover:scale-105 duration-300"
            />
            <span
              className={` ${styles.logoText} ${scrolled ? "text-[#0165B5]" : "text-white"} text-xl font-bold pl-2`}
            >
              Deluxe <br /> Tours{" "}
            </span>
          </Link>
          {/* Mobile: Logo (Left) */}
          <Link href="/" className="md:hidden block flex items-center gap-2">
            <Image
              src={logo}
              alt="delux tours egypt"
              width={80}
              height={80}
              className="w-14"
            />
            <span
              className={` ${styles.logoText} ${scrolled ? "text-[#0165B5]" : "text-white"}  text-xl font-bold pl-2 `}
            >
              Deluxe <br /> Tours{" "}
            </span>
          </Link>

          {/* Mobile: Toggle Button (Right) */}
          <button
            className="md:hidden focus:outline-none text-amber-500 border py-1 px-2 rounded hover:bg-amber-500 hover:text-white hover:border-none cursor-pointer duration-300 "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.dropdown) {
                      e.preventDefault();
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name,
                      );
                    }
                  }}
                  className={`relative tracking-wider font-bold flex items-center gap-1 transition-colors duration-300 group ${scrolled ? "text-[#0165B5]" : "text-white"} hover:text-amber-500 font-serif`}
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 min-w-[220px] bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-100 overflow-visible transform transition-all duration-300 z-[60] origin-top ${
                      activeDropdown === link.name
                        ? "opacity-100 visible translate-y-0 scale-100"
                        : "opacity-0 invisible translate-y-4 scale-95"
                    }`}
                  >
                    {/* Arrow Indicator */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45 border-l border-t border-gray-100 shadow-sm z-0"></div>

                    {/* Content */}
                    <div className="relative z-10 bg-white rounded-2xl overflow-hidden py-2">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setActiveDropdown(null)}
                          className="group/item flex items-center justify-between px-6 py-3 text-sm font-medium text-gray-600 hover:text-[#0165B5] hover:bg-gray-50 transition-all duration-300"
                        >
                          <span className="transform group-hover/item:translate-x-1 transition-transform duration-300">
                            {subLink.name}
                          </span>
                          <ChevronDown
                            size={14}
                            className="-rotate-90 opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 text-[#0165B5]"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Absolute Right */}
          <div className="hidden md:flex items-center gap-4 absolute right-10">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="transition-colors duration-300 bg-[#0165B5] hover:bg-amber-500 text-white text-[#0165B5] rounded"
            >
              <Search
                size={35}
                className="border cursor-pointer border-[#0165B5] p-2 rounded hover:border-none"
              />
            </button>
            <Link
              href="/boooking"
              className="px-4 py-3 font-serif rounded font-bold text-base tracking-widest transition-all duration-300 border-none bg-[#0165B5] text-white hover:bg-amber-500"
            >
              Tailor Made
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar (Headless UI Dialog) */}
      <Transition show={isOpen}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={() => setIsOpen(false)}
        >
          {/* Backdrop */}
          <TransitionChild
            enter="transition-opacity duration-300 ease-linear"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300 ease-linear"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
          </TransitionChild>

          {/* Sidebar Position */}
          <div className="fixed inset-0 flex justify-end">
            <TransitionChild
              enter="transition duration-500 ease-in-out transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition duration-500 ease-in-out transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative w-full sm:w-80 backdrop-blur-3xl bg-black/50 shadow-2xl h-full overflow-hidden border-l border-white/10">
                <div className="flex flex-col h-full">
                  {/* Header: Logo & Close */}
                  <div className="flex justify-between px-6 py-4 bg-white/5 items-center mb-6 border-b border-white/10">
                    <Link
                      className="flex justify-center items-center gap-4"
                      href="/"
                      onClick={() => setIsOpen(false)}
                    >
                      <Image
                        src={logo}
                        alt="delux tours egypt"
                        width={80}
                        height={80}
                        className="w-16"
                      />
                      <span
                        className={`text-white font-bold text-lg tracking-wider ${styles.logoText}`}
                      >
                        Deluxe <br /> Tours{" "}
                      </span>
                    </Link>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white cursor-pointer transition-colors p-2 hover:text-amber-500 hover:scale-110 duration-300"
                    >
                      <X size={32} />
                    </button>
                  </div>

                  <div className="flex flex-col px-6 py-4 space-y-1 overflow-y-auto no-scrollbar flex-1 justify-start">
                    {navLinks.map((link, index) => (
                      <div
                        key={link.name}
                        className="flex flex-col transform transition-all duration-500 ease-out"
                        style={{
                          opacity: 0,
                          animation: `fadeInUp 0.5s ease-out forwards ${
                            index * 0.1
                          }s`,
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => {
                            if (link.dropdown) {
                              e.preventDefault();
                              setActiveDropdown(
                                activeDropdown === link.name ? null : link.name,
                              );
                            } else {
                              setIsOpen(false);
                            }
                          }}
                          className={`group flex justify-between items-center p-3 rounded-xl transition-all duration-300 ${
                            activeDropdown === link.name
                              ? "bg-white/20 text-white shadow-lg backdrop-blur-md"
                              : "text-white/80 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span className="font-bold text-base tracking-wide">
                            {link.name}
                          </span>
                          {link.dropdown && (
                            <ChevronDown
                              size={18}
                              className={`transition-transform duration-300 ${
                                activeDropdown === link.name ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </Link>
                        {link.dropdown && (
                          <div
                            className={`flex flex-col space-y-1 overflow-hidden transition-all duration-500 ease-in-out ${
                              activeDropdown === link.name
                                ? "max-h-[300px] opacity-100 mt-2 p-2 bg-black/20 rounded-xl border border-white/5"
                                : "max-h-0 opacity-0"
                            }`}
                          >
                            {link.dropdown.map((subLink, subIndex) => (
                              <Link
                                key={subLink.name}
                                href={subLink.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300 font-medium border-l-2 border-transparent hover:border-[#0165B5]"
                                style={{
                                  animation:
                                    activeDropdown === link.name
                                      ? `fadeInRight 0.3s ease-out forwards ${
                                          subIndex * 0.1
                                        }s`
                                      : "none",
                                }}
                              >
                                {subLink.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    {/* Search Button for Mobile */}
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        setIsSearchOpen(true);
                      }}
                      className="group flex justify-between items-center p-3 rounded-xl text-white/80 hover:bg-white/10 hover:text-white transition-all duration-300 animate-[fadeInUp_0.5s_ease-out_forwards_0.6s] opacity-0"
                      style={{ animationDelay: `${navLinks.length * 0.1}s` }}
                    >
                      <span className="font-bold text-base tracking-wide">
                        Search
                      </span>
                      <Search
                        size={18}
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </button>
                    {/* Language Selector for Mobile */}
                    <div
                      className="flex flex-col animate-[fadeInUp_0.5s_ease-out_forwards] opacity-0"
                      style={{
                        animationDelay: `${navLinks.length * 0.1 + 0.1}s`,
                      }}
                    >
                      <button
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === "lang" ? null : "lang",
                          )
                        }
                        className={`group flex justify-between items-center p-3 rounded-xl transition-all duration-300 ${
                          activeDropdown === "lang"
                            ? "bg-white/20 text-white shadow-lg backdrop-blur-md"
                            : "text-white/80 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span className="font-bold text-base tracking-wide">
                          Language ({lang})
                        </span>
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-300 ${
                            activeDropdown === "lang" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`flex flex-col space-y-1 overflow-hidden transition-all duration-500 ease-in-out ${
                          activeDropdown === "lang"
                            ? "max-h-40 opacity-100 mt-2 p-2 bg-black/20 rounded-xl"
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {languages.map((l) => (
                          <button
                            key={l}
                            onClick={() => {
                              setLang(l);
                              setIsOpen(false);
                            }}
                            className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                              lang === l
                                ? "bg-white/20 text-white font-bold"
                                : "text-white/70 hover:bg-white/10 hover:text-white"
                            }`}
                          >
                            {l}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="mt-2 flex flex-col gap-2">
                      <a
                        href="mailto:info@deluxetourseg.com"
                        className="flex items-center gap-3 font-medium text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                      >
                        <MapPin size={20} className="text-amber-500" />
                        <span className="truncate">info@deluxetourseg.com</span>
                      </a>
                      <a
                        href="tel:+201001363330"
                        className="flex items-center gap-3 font-medium text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                      >
                        <Phone size={20} className="text-amber-500" />
                        <span>+20 100 136 3330</span>
                      </a>
                    </div>

                    <Link
                      href="/booking"
                      onClick={() => setIsOpen(false)}
                      className="mt-4 block w-fit text-center ms-4 p-3 py-2 bg-amber-500 text-white font-bold tracking-widest hover:bg-amber-600 transition-colors rounded shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40"
                    >
                      Tailor Made
                    </Link>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      <Transition show={isSearchOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-[100]"
          onClose={() => setIsSearchOpen(false)}
        >
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <TransitionChild
                as={React.Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel className="relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                  <div className="relative">
                    <button
                      onClick={() => setIsSearchOpen(false)}
                      className="absolute -top-12 right-0 text-white hover:text-amber-500 transition-colors"
                    >
                      <X size={32} />
                    </button>
                    <div className="bg-transparent">
                      <div className="relative flex items-center border-b-2 border-white/30 focus-within:border-amber-500 transition-colors duration-300">
                        <Search
                          className="absolute left-4 text-white/70"
                          size={24}
                        />
                        <input
                          type="text"
                          placeholder="Search for tours, destinations..."
                          className="w-full bg-transparent py-4 pl-12 pr-4 text-2xl text-white placeholder-white/50 focus:outline-none font-light"
                          autoFocus
                        />
                      </div>
                      <p className="mt-4 text-white/50 text-sm text-center">
                        Press Enter to search
                      </p>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
