
import { Helmet } from "react-helmet-async";
import Hero from "../component/common/Hero";
import useReveal from "../hooks/useReveal";

const services = [
  {
    icon: "✦",
    title: "AI & Business Automation",
    text: "Automate repetitive business processes with AI-powered solutions that improve productivity and operational efficiency.",
  },
  {
    icon: "◇",
    title: "Software Development",
    text: "Build custom software, web applications, and scalable SaaS products tailored to your business requirements.",
  },
  {
    icon: "☁",
    title: "Cloud & Data Solutions",
    text: "Modernize business infrastructure with cloud integration, migration, and data management solutions.",
  },
  {
    icon: "◉",
    title: "Cybersecurity Solutions",
    text: "Strengthen digital infrastructure with security-focused development and practices that help protect business data.",
  },
];

const benefits = [
  [
    "Intelligent Solutions",
    "We apply modern technologies and AI to solve business challenges and streamline complex workflows.",
  ],
  [
    "Scalable Technology",
    "Our software solutions are designed to support evolving requirements and business growth.",
  ],
  [
    "Security by Design",
    "We consider security throughout the software development and deployment lifecycle.",
  ],
  [
    "Business-Focused Approach",
    "We align technology solutions with business goals, practical needs, and measurable outcomes.",
  ],
];

function Home() {
  const [servicesRef, servicesVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [whyRef, whyVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <>
      <Helmet>
        <title>
          TE Infosystems | Software Development & IT Solutions
        </title>

        <meta
          name="description"
          content="Explore TE Infosystems' software development, AI and business automation, cloud computing, and cybersecurity solutions for modern businesses."
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://yourdomain.com/"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="TE Infosystems | Software Development & IT Solutions"
        />

        <meta
          property="og:description"
          content="Discover software development, AI automation, cloud, and digital technology solutions from TE Infosystems."
        />

        <meta
          property="og:url"
          content="https://yourdomain.com/"
        />

        <meta
          name="twitter:card"
          content="summary"
        />

        <meta
          name="twitter:title"
          content="TE Infosystems | IT Solutions"
        />

        <meta
          name="twitter:description"
          content="Explore software development, AI automation, cloud, and cybersecurity services from TE Infosystems."
        />
      </Helmet>

      <main className="text-white">
        {/* Hero */}
        <Hero />

        {/* Services */}
        <section
          ref={servicesRef}
          aria-labelledby="services-heading"
          className={`mx-auto max-w-7xl px-6 py-20 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            servicesVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:opacity-100"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Our Services
          </p>

          <h2
            id="services-heading"
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Software and IT solutions for modern businesses.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            TE Infosystems helps businesses solve real-world challenges
            through software development, artificial intelligence,
            automation, cloud computing, and secure digital solutions.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 hover:bg-white/5 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <div
                  aria-hidden="true"
                  className="mb-6 text-2xl text-blue-300"
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {service.text}
                </p>
              </article>
            ))}
          </div>

          <a
            href="/services"
            className="mt-8 inline-block text-sm font-medium text-blue-300 hover:text-blue-200"
          >
            Explore all our services →
          </a>
        </section>

        {/* About */}
        <section
          ref={aboutRef}
          aria-labelledby="about-heading"
          className={`border-y border-slate-800 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            aboutVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:opacity-100"
          }`}
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
                Who We Are
              </p>

              <h2
                id="about-heading"
                className="mt-3 text-3xl font-bold md:text-4xl"
              >
                Turning business ideas into digital solutions.
              </h2>

              <p className="mt-6 leading-7 text-slate-400">
                TE Infosystems is an IT services company focused on
                software development, AI-powered automation, cloud
                computing, and digital transformation.
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                We help businesses simplify workflows, improve
                operational efficiency, and develop scalable digital
                products aligned with their goals.
              </p>

              <a
                href="/about"
                className="mt-7 inline-block text-sm font-medium text-blue-300 transition-colors duration-300 hover:text-blue-200"
              >
                Learn more about TE Infosystems →
              </a>
            </div>

            <div
              role="img"
              aria-label="TE Infosystems brand identity representing technology, innovation, and growth"
              className="flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-800 transition-all duration-500 hover:border-blue-900"
            >
              <div aria-hidden="true" className="text-center">
                <div className="bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-7xl font-bold text-transparent">
                  TE
                </div>

                <p className="mt-3 text-sm text-slate-500">
                  Technology • Innovation • Growth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section
          ref={whyRef}
          aria-labelledby="why-heading"
          className={`mx-auto max-w-7xl px-6 py-20 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            whyVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:opacity-100"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Why TE Infosystems
          </p>

          <h2
            id="why-heading"
            className="mt-3 text-3xl font-bold md:text-4xl"
          >
            Technology built around your business goals.
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-slate-400">
            We focus on practical, reliable technology that helps
            businesses improve processes and prepare for growth.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {benefits.map(([title, text]) => (
              <article
                key={title}
                className="rounded-xl border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 motion-reduce:transform-none motion-reduce:transition-none"
              >
                <h3 className="text-xl font-semibold">{title}</h3>

                <p className="mt-2 leading-7 text-slate-400">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section
          ref={ctaRef}
          aria-labelledby="cta-heading"
          className={`mx-auto max-w-7xl px-6 pb-20 transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${
            ctaVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0 motion-reduce:opacity-100"
          }`}
        >
          <div className="rounded-2xl border border-slate-800 px-6 py-16 text-center">
            <h2
              id="cta-heading"
              className="text-3xl font-bold md:text-4xl"
            >
              Ready to build your next digital solution?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Tell us about your business challenges and let's explore
              how technology can help you achieve your goals.
            </p>

            <a
              href="/contact"
              className="mt-7 inline-block rounded-lg bg-[#172554] px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e3a8a] motion-reduce:transform-none motion-reduce:transition-none"
            >
              Discuss Your Project →
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
