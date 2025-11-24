"use client";

import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Quote } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Ada Nwachukwu",
    role: "Founder",
    company: "FinEdge Labs",
    quote:
      "Gleam Digital Technologies helped us go from idea to production in months, not years. Their team felt like an extension of ours.",
    image:
      "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlight: "full-stack MVP development and product launch",
  },
  {
    name: "Michael Johnson",
    role: "CTO",
    company: "NovaRetail",
    quote:
      "They modernized our infrastructure, set up CI/CD, and hardened our security. Deployments are now boring—which is exactly what we wanted.",
    image:
      "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlight: "DevOps automation and security hardening",
  },
  {
    name: "Sarah Kim",
    role: "Head of Operations",
    company: "BrightPath Health",
    quote:
      "The analytics dashboards they built completely changed how we make decisions. We finally have a single source of truth for our data.",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlight: "BI dashboards and predictive analytics",
  },
  {
    name: "Daniel Okafor",
    role: "Engineering Manager",
    company: "CloudStream",
    quote:
      "Their DevOps and cloud work gave us confidence to scale. Our releases are faster, safer, and fully observable.",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlight: "scalable cloud architecture and observability",
  },

  // NEW TESTIMONIALS BELOW
  {
    name: "Maria Lopez",
    role: "Product Director",
    company: "Skyline AI",
    quote:
      "Their team improved our mobile app performance by over 40% and redesigned critical flows that increased engagement across all segments.",
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlight: "mobile performance optimization and UX redesign",
  },
  {
    name: "David Chen",
    role: "Data Lead",
    company: "OptiLogistics",
    quote:
      "The machine learning models they developed reduced our operational costs significantly. We now predict delays with incredible accuracy.",
    image:
      "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlight: "machine learning forecasting and data pipelines",
  },
  {
    name: "Renee Thompson",
    role: "Security Analyst",
    company: "Harbor Financial",
    quote:
      "They conducted a full security audit and helped us close critical vulnerabilities fast. Their cybersecurity expertise is trustworthy.",
    image:
      "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlight: "security audits and vulnerability remediation",
  },
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
    created() {
      setLoaded(true);
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // simple autoplay
  useEffect(() => {
    if (!instanceRef.current) return;
    const timer = setInterval(() => {
      instanceRef.current?.next();
    }, 6000);
    return () => clearInterval(timer);
  }, [instanceRef]);

  return (
    <section className="relative py-20 bg-slate-950 overflow-hidden">
      {/* glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-10 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-emerald-400/25 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6">
        {/* heading */}
        <div className="flex justify-center items-center">
          <div className="mb-10 md:mb-14 max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
                Testimonials
              </span>
            </div>
            <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-white mb-3">
              What our clients say
            </h2>
            <p className="text-slate-300 text-center text-base md:text-lg">
              Teams across fintech, retail, health, and SaaS trust Gleam Digital
              Technologies to build, secure, and scale their products.
            </p>
          </div>
        </div>

        {/* slider */}
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, index) => (
            <article key={index} className="keen-slider__slide">
              <div className="h-full flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-7 shadow-xl shadow-slate-900/60 backdrop-blur-sm">
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-700">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-slate-400">
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                  <Quote className="h-5 w-5 text-blue-400/80" />
                </div>

                <p className="text-slate-100 text-sm md:text-base leading-relaxed mb-4">
                  “{t.quote}”
                </p>

                <div className="mt-auto pt-3 text-xs text-slate-400">
                  Partnered on{" "}
                  <span className="text-emerald-300">{t.highlight}</span>.
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* dots */}
        {loaded && instanceRef.current && (
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  currentSlide === idx
                    ? "w-5 bg-blue-400"
                    : "bg-slate-500 hover:bg-slate-300"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
