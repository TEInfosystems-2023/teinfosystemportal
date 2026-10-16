import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useReveal from "../hooks/useReveal";

const services = [
  {
    number: "01",
    icon: "✦",
    title: "AI & Business Automation",
    text: "Automate repetitive business processes with intelligent solutions that improve productivity and operational efficiency.",
    tags: ["Artificial Intelligence", "RPA", "Workflow Automation"],
  },
  {
    number: "02",
    icon: "◇",
    title: "Software Development",
    text: "Build custom software, web applications, APIs, and scalable SaaS platforms around your business requirements.",
    tags: ["Web Applications", "Enterprise Software", "SaaS"],
  },
  {
    number: "03",
    icon: "☁",
    title: "Cloud & Data Solutions",
    text: "Modernize infrastructure, connect business systems, and transform data into meaningful business insights.",
    tags: ["Cloud Migration", "Data Engineering", "Analytics"],
  },
  {
    number: "04",
    icon: "◉",
    title: "Cybersecurity Solutions",
    text: "Build security into applications and infrastructure to help protect business systems and sensitive information.",
    tags: ["Application Security", "Secure Architecture", "Risk Reduction"],
  },
];

const benefits = [
  {
    number: "01",
    title: "Intelligent Solutions",
    text: "Apply modern technologies to solve business challenges and simplify complex workflows.",
  },
  {
    number: "02",
    title: "Scalable Technology",
    text: "Develop flexible software solutions designed to support changing business requirements.",
  },
  {
    number: "03",
    title: "Security by Design",
    text: "Consider security throughout the software development and deployment lifecycle.",
  },
  {
    number: "04",
    title: "Business-Focused Delivery",
    text: "Align technical decisions with business priorities, practical needs, and measurable outcomes.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your business goals, challenges, and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    text: "Plan the architecture, user experience, and implementation strategy.",
  },
  {
    number: "03",
    title: "Develop",
    text: "Build, integrate, test, and refine your digital solution.",
  },
  {
    number: "04",
    title: "Deliver",
    text: "Deploy the solution and support continuous improvement.",
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

function Home() {
  const [servicesRef, servicesVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [whyRef, whyVisible] = useReveal();
  const [processRef, processVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  const reveal = (visible) =>
    `transition-all duration-700 ease-out motion-reduce:transition-none ${
      visible
        ? "translate-y-0 opacity-100"
        : "translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100"
    }`;

  return (
    <>
      <Helmet>
        <title>
          TE Infosystems | IT Services, Software Development & AI Solutions
        </title>

        <meta
          name="description"
          content="Discover TE Infosystems technology services, including custom software development, AI and business automation, cloud solutions, data engineering, and cybersecurity."
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="TE Infosystems | Technology Solutions for Business"
        />

        <meta
          property="og:description"
          content="Explore software development, AI automation, cloud, data, and cybersecurity solutions from TE Infosystems."
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="TE Infosystems | Technology Solutions"
        />

        <meta
          name="twitter:description"
          content="Technology solutions designed around your business goals."
        />
      </Helmet>

      <main className="overflow-hidden  text-white">

        {/* ================= HERO ================= */}
        <section
          aria-labelledby="hero-heading"
          className="relative isolate border-b border-white/10"
        >
          {/* Background decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
          >
            <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[120px]" />

            <div className="absolute -bottom-40 left-0 h-[350px] w-[350px] rounded-full bg-indigo-600/10 blur-[110px]" />

            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-36">

            {/* Hero Content */}
            <div>
              

              <h1
                id="hero-heading"
                className="mt-8 max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl"
              >
                Technology that moves your business{" "}
                <span className="bg-gradient-to-r from-blue-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  forward.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                TE Infosystems helps businesses turn ideas into practical
                digital solutions through software engineering, intelligent
                automation, cloud technologies, and secure development.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Discuss Your Project
                  
                </Link>

                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/15 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 hover:border-blue-400/50 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                >
                  Explore Our Services
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              
            </div>

            {/* Hero Visual */}
            

              
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section
          id="services"
          ref={servicesRef}
          aria-labelledby="services-heading"
          className={reveal(servicesVisible)}
        >
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  What We Do
                </p>

                <h2
                  id="services-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Technology solutions for real business challenges.
                </h2>
              </div>

              <Link
                to="/service"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
              >
                View all services <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <p className="mt-6 max-w-2xl leading-7 text-slate-400">
              From building modern applications to automating operations,
              we help organizations explore technology that fits their needs.
            </p>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.04] sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] text-2xl text-blue-300">
                      {service.icon}
                    </span>

                    <span className="text-sm text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-semibold leading-7">
                    {service.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">
                    {service.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.08] px-2.5 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/servicedetails"
                    aria-label={`Explore ${service.title}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition-colors hover:text-blue-200"
                  >
                    Explore service
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          ref={aboutRef}
          aria-labelledby="about-heading"
          className={`border-y border-white/10 bg-white/[0.015] ${reveal(aboutVisible)}`}
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 lg:gap-20 lg:py-28">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                About TE Infosystems
              </p>

              <h2
                id="about-heading"
                className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Turning business ideas into digital solutions.
              </h2>

              <p className="mt-6 leading-8 text-slate-400">
                TE Infosystems focuses on software development,
                AI-powered automation, cloud technologies, and digital
                transformation. We aim to make technology useful,
                practical, and aligned with business priorities.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                Our approach combines thoughtful planning, modern
                engineering practices, and an understanding of the
                challenges organizations face as they grow.
              </p>

              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-blue-200"
              >
                Learn more about us
                <span aria-hidden="true">↗</span>
              </Link>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-3xl bg-blue-500/[0.05] blur-2xl"
              />

              <div className="relative rounded-2xl border border-white/10 bg-[#0C1324] p-7 sm:p-10">
                <div className="flex items-center gap-4 border-b border-white/10 pb-7">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-700 text-2xl font-bold shadow-lg shadow-blue-900/20">
                    TE
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">
                      TE Infosystems
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Technology · Innovation · Growth
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-6">
                  {[
                    ["Business First", "Technology guided by real requirements."],
                    ["Engineering Focus", "Solutions built with scalability in mind."],
                    ["Continuous Improvement", "A practical approach to evolving needs."],
                  ].map(([title, text]) => (
                    <div key={title} className="flex gap-4">
                      <span
                        aria-hidden="true"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-blue-400/20 bg-blue-500/[0.08] text-blue-300"
                      >
                        ✓
                      </span>

                      <div>
                        <h3 className="text-sm font-semibold">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section
          ref={whyRef}
          aria-labelledby="why-heading"
          className={reveal(whyVisible)}
        >
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                Why TE Infosystems
              </p>

              <h2
                id="why-heading"
                className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Built around your business goals.
              </h2>

              <p className="mt-6 max-w-2xl leading-7 text-slate-400">
                Technology delivers value when it solves the right
                problems. We focus on practical engineering,
                thoughtful implementation, and long-term usability.
              </p>
            </div>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="bg-[#0A1020] p-7 transition-colors duration-300 hover:bg-[#101A30] sm:p-9"
                >
                  <p className="text-sm font-medium tracking-wider text-blue-300">
                    {benefit.number}
                  </p>

                  <h3 className="mt-5 text-xl font-semibold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-md leading-7 text-slate-400">
                    {benefit.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= OUR PROCESS ================= */}
        <section
          ref={processRef}
          aria-labelledby="process-heading"
          className={`border-y border-white/10 bg-white/[0.015] ${reveal(processVisible)}`}
        >
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                How We Work
              </p>

              <h2
                id="process-heading"
                className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                From initial idea to implementation.
              </h2>

              <p className="mt-5 leading-7 text-slate-400">
                A structured process helps keep requirements,
                engineering, and delivery aligned throughout a project.
              </p>
            </div>

            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step, index) => (
                <li key={step.number} className="relative">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-semibold tracking-tight text-blue-300/70">
                      {step.number}
                    </span>

                    {index < process.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="hidden h-px flex-1 bg-gradient-to-r from-blue-400/40 to-transparent lg:block"
                      />
                    )}
                  </div>

                  <h3 className="mt-6 text-xl font-semibold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= TECHNOLOGY ================= */}
        <section aria-labelledby="technology-heading">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-28">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Our Technology Stack
                </p>

                <h2
                  id="technology-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  The right tools for the right solution.
                </h2>
              </div>

              <p className="max-w-md leading-7 text-slate-400">
                Technology choices depend on project requirements,
                security, performance, and long-term maintainability.
              </p>
            </div>

            <ul
              aria-label="Technologies used"
              className="mt-10 flex flex-wrap gap-3"
            >
              {technologies.map((technology) => (
                <li
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/[0.025] px-5 py-3 text-sm text-slate-300 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.05]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section
          ref={ctaRef}
          aria-labelledby="cta-heading"
          className={`mx-auto max-w-7xl px-6 pb-24 sm:pb-28 ${reveal(ctaVisible)}`}
        >
          <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#111F40] via-[#0E1730] to-[#0A1020] px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-28 h-72 w-72 rounded-full bg-blue-500/15 blur-[90px]"
            />

            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Let's Build Together
                </p>

                <h2
                  id="cta-heading"
                  className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
                >
                  Have a technology challenge?
                </h2>

                <p className="mt-5 max-w-xl leading-7 text-slate-400">
                  Tell us about your goals, your challenges, and the
                  solution you want to build. Let's start a conversation.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
              >
                Start a Conversation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default Home;