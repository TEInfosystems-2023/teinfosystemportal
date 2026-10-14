
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
    <div className="min-h-screen text-white">

      {/* ================= SERVICES ================= */}
      <section
        id="services"
        className="mx-auto flex min-h-[85vh] max-w-7xl flex-col px-6 py-20"
      >
        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            What We Do
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Solutions for the digital world.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            From intelligent automation to secure cloud infrastructure, we
            combine technology and business understanding to create practical
            digital solutions.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.map((item, index) => (
            <div
              key={item.title}
              className={`group rounded-2xl border border-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-800 text-2xl text-blue-300 transition-all duration-300 group-hover:border-blue-900">
                  {item.icon}
                </div>

                <span className="text-sm text-slate-600">
                  0{index + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-7 text-2xl font-semibold">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                {item.description}
              </p>

              {/* Features */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.features.map((feature) => (
                  <span
                    key={feature}
                    className="rounded-full border border-slate-800 px-3 py-1.5 text-xs text-slate-400 transition-colors duration-300 group-hover:border-slate-700"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <Link
                to="/servicedetails"
                className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-all duration-300 hover:text-blue-200"
              >
                Explore Service

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="border-y border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              How We Work
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              From idea to implementation.
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              We follow a structured approach to understand your needs,
              develop the right solution, and deliver technology that
              creates real business value.
            </p>
          </div>

          {/* Process */}
          <div className="mt-12 grid gap-8 md:grid-cols-4">

            <div>
              <span className="text-4xl font-bold text-blue-300/40">
                01
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                Discover
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Understand your business, challenges, goals, and technical
                requirements.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-blue-300/40">
                02
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                Design
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Plan the architecture, user experience, technology stack,
                and implementation strategy.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-blue-300/40">
                03
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                Develop
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Build, integrate, test, and refine the solution using
                modern development practices.
              </p>
            </div>

            <div>
              <span className="text-4xl font-bold text-blue-300/40">
                04
              </span>

              <h3 className="mt-4 text-xl font-semibold">
                Deliver
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Deploy the solution and continue improving it as your
                business grows.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNOLOGY ================= */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Technology
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Built with modern technologies.
          </h2>

          <p className="mt-4 leading-7 text-slate-400">
            We choose technologies based on the requirements, scalability,
            performance, security, and long-term goals of each project.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-slate-800 px-5 py-2.5 text-sm text-slate-400 transition-all duration-300 hover:border-blue-900 hover:text-white"
            >
              {technology}
            </span>
          ))}
        </div>

      </section>

      {/* ================= CTA ================= */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="rounded-2xl border border-slate-800 px-6 py-16 text-center transition-colors duration-300 hover:border-slate-700">

          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Let's Build Together
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Have a technology challenge?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
            Let's discuss your idea and build a digital solution that
            fits your business.
          </p>

          <Link
            to="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#172554] px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e3a8a]"
          >
            Start a Project
            <span>→</span>
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Service;
