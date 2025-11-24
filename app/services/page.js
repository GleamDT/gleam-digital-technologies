import Link from "next/link";
import {
  Code,
  Smartphone,
  Database,
  Shield,
  Cloud,
  Server,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "Explore Gleam Digital Technologies services across web development, mobile apps, data analytics, cybersecurity, and DevOps & cloud engineering.",
  openGraph: {
    title: "Services | Gleam Digital Technologies",
    description:
      "End-to-end technology services to help you build, secure, and scale modern digital products.",
    // url will be derived from metadataBase + path
  },
};

export default function Services() {
  const services = [
    {
      slug: "web-development",
      icon: <Code className="w-12 h-12" />,
      title: "Web Development",
      description:
        "We design and build fast, responsive, and accessible websites and web applications that reflect your brand and drive real business results.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      features: [
        "Marketing sites, dashboards, and full-stack web applications",
        "Modern stacks: Next.js, React, Node.js, and TypeScript",
        "SEO, performance optimization, and Core Web Vitals tuning",
        "Design systems and reusable component libraries",
      ],
    },
    {
      slug: "mobile-app-development",
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "We craft intuitive mobile experiences that feel native on every device, from MVPs to production-grade applications.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      features: [
        "Cross-platform apps with React Native and Flutter",
        "Native-like performance and polished UX",
        "Prototyping, product design, and usability testing",
        "App store launch support and ongoing improvements",
      ],
    },
    {
      slug: "data-science-analysis",
      icon: <Database className="w-12 h-12" />,
      title: "Data Analytics & Data Science",
      description:
        "We turn your raw data into clear, actionable insights so you can make confident, data-driven decisions.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      features: [
        "Interactive BI dashboards and executive reporting",
        "Predictive models for churn, demand, and forecasting",
        "Data pipelines, ETL/ELT, and data warehouse design",
        "Analytics strategy and data literacy enablement",
      ],
    },
    {
      slug: "cybersecurity",
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity",
      description:
        "We help you protect your systems, customers, and reputation with proactive security and continuous hardening.",
      image: "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5",
      features: [
        "Security audits, hardening, and vulnerability assessments",
        "Penetration testing and threat modeling",
        "Security-by-design for apps, APIs, and cloud platforms",
        "Incident response planning and ongoing monitoring",
      ],
    },
    {
      slug: "devops-cloud-engineering",
      icon: <Cloud className="w-12 h-12" />,
      title: "DevOps & Cloud Engineering",
      description:
        "We build reliable, scalable cloud infrastructure so your products can grow without friction or downtime.",
      image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
      features: [
        "Cloud-native architectures on AWS, Azure, and GCP",
        "CI/CD pipelines, automated testing, and release workflows",
        "Containerization with Docker and Kubernetes",
        "Infrastructure as Code and observability (logs, metrics, traces)",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
        {/* Glow accents */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-purple-600/25 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-5 md:mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-200 uppercase">
                OUR SERVICES
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
              Services that power your
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                {" "}
                digital growth
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-6">
              From web and mobile experiences to data, cloud, and cybersecurity,
              we deliver end-to-end technology solutions that help you build,
              secure, and scale high-performing digital products.
            </p>

            {/* Quick service tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
                Web &amp; Mobile Development
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
                Data &amp; Analytics
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
                Cybersecurity
              </span>
              <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-200">
                DevOps &amp; Cloud
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {/* If you're using Next.js, import Link from "next/link" and use <Link href="/contact"> */}
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:bg-blue-400 transition"
              >
                Book a consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-transparent px-6 py-3 text-sm font-semibold text-slate-100 hover:border-slate-400 hover:bg-slate-900/60 transition"
              >
                Explore all services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          {/* Section heading */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.25em] text-blue-400 uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              End-to-end digital solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Gleam Digital Technologies helps you design, build, secure, and
              scale modern digital products across web, mobile, data, cloud, and
              security.
            </p>
          </div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                id={service.slug}
                key={service.title}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >
                {/* Text side */}
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  {/* Icon + label */}
                  <div className="inline-flex items-center gap-3 rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 mb-6">
                    <div className="text-blue-400">{service.icon}</div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                      {service.title}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>

                  <p className="text-base sm:text-lg text-slate-300 mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0 mt-1" />
                        <span className="text-slate-200 text-sm sm:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Image side */}
                <div
                  className={`${
                    index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/5 bg-slate-900/40 shadow-2xl shadow-blue-500/10">
                    <img
                      src={`${service.image}?auto=format&fit=crop&w=1000&q=80`}
                      alt={service.title}
                      className="h-72 sm:h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-blue-500/40" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your
            goals.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors inline-flex items-center group"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
