"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import {
  ChevronDown,
  Cloud,
  ShieldCheck,
  BarChart3,
  Smartphone,
  Code,
} from "lucide-react";
import Link from "next/link";
import "keen-slider/keen-slider.min.css";

const slides = [
  {
    id: 1,
    type: "Web Development",
    title: "Modern Web Experiences",
    subtitle:
      "High-performance websites and web apps built for speed, security, and scalability.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    icon: Code,
    color: "bg-gradient-to-r from-blue-600 to-indigo-700",
    link: "/services#web-development",
  },
  {
    id: 2,
    type: "Mobile App Development",
    title: "Intuitive Mobile Solutions",
    subtitle:
      "Beautifully crafted iOS and Android apps that deliver seamless user experiences.",
    image:
      "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    icon: Smartphone,
    color: "bg-gradient-to-r from-blue-600 to-indigo-700",
    link: "/services#mobile-app-development",
  },
  {
    id: 3,
    type: "Data Science & Analysis",
    title: "Data-Driven Decisions",
    subtitle:
      "Transforming raw data into actionable insights with analytics, dashboards, and machine learning.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    icon: BarChart3,
    color: "bg-gradient-to-r from-blue-600 to-indigo-700",
    link: "/services#data-science-analysis",
  },
  {
    id: 4,
    type: "Cybersecurity",
    title: "Advanced Protection",
    subtitle:
      "Security solutions that safeguard your digital infrastructure, applications, and data from threats.",
    image:
      "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    icon: ShieldCheck,
    color: "bg-gradient-to-r from-blue-600 to-indigo-700",
    link: "/services#cybersecurity",
  },
  {
    id: 5,
    type: "DevOps & Cloud Engineering",
    title: "Automate & Scale",
    subtitle:
      "CI/CD pipelines, cloud architecture, and infrastructure automation tailored for modern teams.",
    image:
      "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    icon: Cloud,
    color: "bg-gradient-to-r from-blue-600 to-indigo-700",
    link: "/services#devops-cloud-engineering",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    duration: 1000,
    slides: {
      perView: 1,
      spacing: 0,
    },
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // Auto-play functionality
  useEffect(() => {
    if (!instanceRef.current) return;

    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-slate-950"
    >
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, idx) => (
          <div key={slide.id} className="keen-slider__slide relative h-full">
            {/* Background Image + dark overlay */}
            <div
              className="absolute inset-0 z-0 transition-transform duration-2000 ease-out"
              style={{
                backgroundImage: `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.9)), url('${slide.image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: currentSlide === idx ? "scale(1)" : "scale(1.05)",
              }}
            />

            {/* Type Label */}
            <div className="absolute top-16 sm:top-20 left-4 sm:left-8 z-20 md:pt-4">
              <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 shadow-lg backdrop-blur-md border border-white/15 bg-slate-900/70">
                <div className="h-7 w-7 rounded-full flex items-center justify-center bg-blue-500/20">
                  <slide.icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-200" />
                </div>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-100">
                  {slide.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1
                  className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight transition-all duration-1000 ${
                    currentSlide === idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 leading-relaxed transition-all duration-1000 delay-200 px-4 ${
                    currentSlide === idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {slide.subtitle}
                </p>
                <div
                  className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center transition-all duration-1000 delay-400 ${
                    currentSlide === idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <Link
                    href={slide.link}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/40 text-center"
                  >
                    Explore {slide.type}
                  </Link>
                  <Link
                    href="/about"
                    className="w-full sm:w-auto border-2 border-white/70 text-white hover:bg-white hover:text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 text-center"
                  >
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 z-20">
          <div className="flex space-x-2 sm:space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-blue-500 scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="h-1 bg-white/10">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-linear"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={scrollToPortfolio}
          className="text-white hover:text-blue-300 transition-colors duration-200"
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </div>

      {/* Side Navigation */}
      {loaded && instanceRef.current && (
        <>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="hidden sm:block absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </section>
  );
}
