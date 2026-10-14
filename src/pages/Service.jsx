import { Link } from "react-router-dom";

function Service() {
  const services = [
    {
      icon: "✦",
      title: "AI & Automation",
      description:
        "Build smarter workflows and automate repetitive business processes with modern AI and automation technologies.",
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

  return (
    <main
      id="main-content"
      className="min-h-screen text-white"
      aria-label="TE Infosystems services"
    >
      {/* ================= SERVICES ================= */}
      <section
        id="services"
        aria-labelledby="services-heading"
        className="mx-auto flex min-h-[85vh] max-w-7xl flex-col px-6 py-20"
      >
        {/* Section Heading */}
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            What We Do
          </p>

          <h1
            id="services-heading"
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Technology Solutions for the Digital World
          </h1>

          <p className="mt-4 leading-7 text-slate-400">
            TE Infosystems helps businesses modernize their operations through
            AI and automation, custom software development, cloud
            infrastructure, data engineering, and cybersecurity. We combine
            technology and business understanding to create practical digital
            solutions.
          </p>
        </header>

        {/* Service Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((item, index) => (
            <article
              key={item.title}
              aria-labelledby={`service-title-${index}`}
              className={`group rounded-2xl border border-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 text-2xl text-blue-300 transition-all duration-300 group-hover:border-blue-900"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>

                <span className="text-sm text-slate-600" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h2
                id={`service-title-${index}`}
                className="mt-7 text-2xl font-semibold"
              >
                {item.title}
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                {item.description}
              </p>

              {/* Features */}
              <ul
                aria-label={`${item.title} capabilities`}
                className="mt-6 flex flex-wrap gap-2"
              >
                {item.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 group-hover:border-slate-700"
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <Link
                to="/servicedetails"
                aria-label={`Explore ${item.title} services`}
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:text-blue-200"
              >
                Explore Service
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section
        aria-labelledby="process-heading"
        className="border-y border-slate-800"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <header className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              How We Work
            </p>

            <h2
              id="process-heading"
              className="mt-3 text-3xl font-bold md:text-4xl"
            >
              From Idea to Implementation
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              We follow a structured approach to understand your needs, develop
              the right solution, and deliver technology that creates real
              business value.
            </p>
          </header>

          {/* Process */}
          <ol className="mt-12 grid gap-8 md:grid-cols-4">
            <li>
              <span
                className="text-4xl font-bold text-blue-300/40"
                aria-hidden="true"
              >
                01
              </span>

              <h3 className="mt-4 text-xl font-semibold">Discover</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Understand your business, challenges, goals, and technical
                requirements.
              </p>
            </li>

            <li>
              <span
                className="text-4xl font-bold text-blue-300/40"
                aria-hidden="true"
              >
                02
              </span>

              <h3 className="mt-4 text-xl font-semibold">Design</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Plan the architecture, user experience, technology stack, and
                implementation strategy.
              </p>
            </li>

            <li>
              <span
                className="text-4xl font-bold text-blue-300/40"
                aria-hidden="true"
              >
                03
              </span>

              <h3 className="mt-4 text-xl font-semibold">Develop</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Build, integrate, test, and refine the solution using modern
                development practices.
              </p>
            </li>

            <li>
              <span
                className="text-4xl font-bold text-blue-300/40"
                aria-hidden="true"
              >
                04
              </span>

              <h3 className="mt-4 text-xl font-semibold">Deliver</h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Deploy the solution and continue improving it as your business
                grows.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section
        aria-labelledby="technology-heading"
        className="mx-auto max-w-7xl px-6 py-20"
      >
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Technology
          </p>

          <h2
            id="technology-heading"
            className="mt-3 text-3xl font-bold md:text-4xl"
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
              className="rounded-full border border-slate-800 px-5 py-2.5 text-sm text-slate-400 transition-all duration-300 hover:border-blue-900 hover:text-white"
            >
              {technology}
            </li>
          ))}
        </ul>
      </section>

      {/* ================= CTA ================= */}
      <section
        aria-labelledby="contact-cta-heading"
        className="mx-auto max-w-7xl px-6 pb-20"
      >
        <div className="rounded-2xl border border-slate-800 px-6 py-16 text-center transition-colors duration-300 hover:border-slate-700">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Let's Build Together
          </p>

          <h2
            id="contact-cta-heading"
            className="mt-4 text-3xl font-bold md:text-4xl"
          >
            Have a Technology Challenge?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Let's discuss your idea and build a digital solution that fits your
            business.
          </p>

          <Link
            to="/contact"
            aria-label="Contact TE Infosystems to start a project"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#172554] px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e3a8a]"
          >
            Start a Project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Service;
