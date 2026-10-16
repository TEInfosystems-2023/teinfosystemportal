
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Service() {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      icon: "✦",
      title: "AI & Automation",
      description:
        "Build smarter workflows and automate repetitive business processes with modern AI and automation technologies.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
      features: [
        "Artificial Intelligence",
        "Machine Learning",
        "RPA",
        "Business Process Automation",
      ],
    },
    {
      icon: "◇",
      title: "Software Development",
      description:
        "Transform your ideas into scalable, reliable, and user-focused software applications built around your business needs.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
      features: [
        "Custom Software",
        "Enterprise Applications",
        "SaaS Platforms",
        "API Development",
      ],
    },
    {
      icon: "☁",
      title: "Cloud & Data",
      description:
        "Build modern cloud infrastructure and turn your business data into useful insights for better decisions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=85",
      features: [
        "Cloud Migration",
        "Cloud Integration",
        "Data Engineering",
        "Data Analytics",
      ],
    },
    {
      icon: "◉",
      title: "Security",
      description:
        "Protect applications, infrastructure, and business data with security-focused technology and development practices.",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1800&q=85",
      features: [
        "Cybersecurity",
        "Application Security",
        "Infrastructure Security",
        "Secure Architecture",
      ],
    },
  ];

  const technologies = [
    "React",
    "Java",
    "Spring Boot",
    "Python",
    "JavaScript",
    "AWS",
    "PostgreSQL",
    "Docker",
    "AI / ML",
    "REST APIs",
  ];

  // Slider navigation
  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + services.length) % services.length
    );
  };

  // Automatic slider
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <main
      id="main-content"
      className="min-h-screen bg-[#050816] text-white mt-5"
      aria-label="TE Infosystems services "
      
    >
      {/* ================= SERVICES SLIDER ================= */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-6 md:py-20"
      >
        {/* Section Heading */}
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            What We Do
          </p>

          <h1
            id="services-heading"
            className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
          >
            Technology Solutions for the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Digital World
            </span>
          </h1>

          <p className="mt-5 max-w-2xl leading-7 text-slate-400">
            TE Infosystems helps businesses modernize their operations through
            AI and automation, custom software development, cloud
            infrastructure, data engineering, and cybersecurity. We combine
            technology and business understanding to create practical digital
            solutions.
          </p>
        </header>

        {/* Image Slider */}
        <div
          className="group relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl shadow-blue-950/20"
          aria-roledescription="carousel"
          aria-label="Our services"
        >
          {/* Slides */}
          {services.map((item, index) => (
            <article
              key={item.title}
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${services.length}: ${item.title}`}
              aria-hidden={activeSlide !== index}
              className={`relative min-h-[540px] md:min-h-[570px] ${
                activeSlide === index
                  ? "block animate-[fadeIn_0.6s_ease-in-out]"
                  : "hidden"
              }`}
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/30" />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-[#050816]/20" />

              {/* Slide Content */}
              <div className="relative z-10 flex min-h-[540px] flex-col justify-center px-7 py-16 sm:px-12 md:min-h-[570px] md:px-16">
                {/* Label */}
                <div className="mb-7 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/30 bg-blue-500/10 text-2xl text-blue-300 backdrop-blur-md">
                    {item.icon}
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                      Our Expertise
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Service 0{index + 1}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h2 className="max-w-2xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                  {item.title}
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
                  {item.description}
                </p>

                {/* Features */}
                <ul
                  aria-label={`${item.title} capabilities`}
                  className="mt-7 flex max-w-2xl flex-wrap gap-2"
                >
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-slate-200 backdrop-blur-md sm:text-sm"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Explore Button */}
                <div className="mt-9">
                  <Link
                    to="/servicedetails"
                    aria-label={`Explore ${item.title} services`}
                    className="inline-flex items-center gap-3 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    Explore Service
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}

          {/* Previous Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous service"
            className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-3xl text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:left-6"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next service"
            className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-3xl text-white backdrop-blur-md transition hover:border-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:right-6"
          >
            ›
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-5 right-6 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-md sm:bottom-7 sm:right-8">
            <span
              className="mr-1 text-xs font-medium tracking-wider text-slate-300"
              aria-live="polite"
            >
              0{activeSlide + 1} / 0{services.length}
            </span>

            {services.map((item, index) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to ${item.title}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                  activeSlide === index
                    ? "w-8 bg-blue-400"
                    : "w-2 bg-white/40 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section
        aria-labelledby="process-heading"
        className="border-y border-slate-800/80 bg-[#080d1c]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <header className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              How We Work
            </p>

            <h2
              id="process-heading"
              className="mt-4 text-3xl font-bold md:text-4xl"
            >
              From Idea to Implementation
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              We follow a structured approach to understand your needs,
              develop the right solution, and deliver technology that creates
              real business value.
            </p>
          </header>

          <ol className="mt-12 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Discover",
                description:
                  "Understand your business, challenges, goals, and technical requirements.",
              },
              {
                number: "02",
                title: "Design",
                description:
                  "Plan the architecture, user experience, technology stack, and implementation strategy.",
              },
              {
                number: "03",
                title: "Develop",
                description:
                  "Build, integrate, test, and refine the solution using modern development practices.",
              },
              {
                number: "04",
                title: "Deliver",
                description:
                  "Deploy the solution and continue improving it as your business grows.",
              },
            ].map((step) => (
              <li key={step.number} className="group">
                <span
                  className="text-4xl font-bold text-blue-400/50 transition-colors group-hover:text-blue-400"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= TECHNOLOGIES ================= */}
      <section
        aria-labelledby="technology-heading"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <header className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Technology
          </p>

          <h2
            id="technology-heading"
            className="mt-4 text-3xl font-bold md:text-4xl"
          >
            Built with Modern Technologies
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            We choose technologies based on the requirements, scalability,
            performance, security, and long-term goals of each project.
          </p>
        </header>

        <ul
          aria-label="Technologies we work with"
          className="mt-10 flex flex-wrap gap-3"
        >
          {technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-slate-800 bg-white/[0.02] px-5 py-3 text-sm text-slate-300 transition duration-300 hover:border-blue-500/60 hover:bg-blue-500/5 hover:text-white"
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section
        aria-labelledby="contact-cta-heading"
        className="mx-auto max-w-7xl px-6 pb-20"
      >
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-[#101c3d] via-[#080d1c] to-black px-6 py-16 text-center sm:px-12">
          {/* Decorative Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-48 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Build Together
            </p>

            <h2
              id="contact-cta-heading"
              className="mt-5 text-3xl font-bold md:text-4xl"
            >
              Have a Technology Challenge?
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">
              Let's discuss your idea and build a digital solution that fits
              your business.
            </p>

            <Link
              to="/contact"
              aria-label="Contact TE Infosystems to start a project"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-600 px-7 py-3.5 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Service;
