import Hero from "../component/common/Hero";
import useReveal from "../hooks/useReveal";

function Home() {
  const [servicesRef, servicesVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [whyRef, whyVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <div className="text-white">

      <Hero/>

      {/* Services */}
      <section
        ref={servicesRef}
        className={`mx-auto max-w-7xl px-6 py-20 transition-all duration-700 ease-out ${
          servicesVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
          Our Services
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Solutions for the digital world.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-slate-400">
          We combine technology, creativity, and business understanding
          to build solutions that solve real problems.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              icon: "✦",
              title: "AI & Automation",
              text: "Custom AI solutions and automation systems that help businesses work smarter and faster.",
            },
            {
              icon: "◇",
              title: "Software Development",
              text: "Scalable enterprise software and SaaS applications built around your business needs.",
            },
            {
              icon: "☁",
              title: "Cloud & Data",
              text: "Cloud integration, migration, and data solutions for modern digital businesses.",
            },
            {
              icon: "◉",
              title: "Security",
              text: "Secure and scalable systems designed to protect your digital infrastructure.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-900 hover:bg-white/5"
            >
              <div className="mb-6 text-2xl text-blue-300">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {service.text}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* About */}
      <section
        ref={aboutRef}
        className={`border-y border-slate-800 transition-all duration-700 ease-out ${
          aboutVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Turning ideas into digital solutions.
            </h2>

            <p className="mt-6 leading-7 text-slate-400">
              TE Infosystems is an IT services company focused on
              AI-powered software development, cloud computing,
              automation, and digital transformation.
            </p>

            <p className="mt-4 leading-7 text-slate-400">
              We help businesses simplify complex processes, improve
              efficiency, and build scalable digital products.
            </p>

            <a
              href="/about"
              className="mt-7 inline-block text-sm font-medium text-blue-300 transition-colors duration-300 hover:text-blue-200"
            >
              Learn More →
            </a>
          </div>

          <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-slate-800 transition-all duration-500 hover:border-blue-900">

            <div className="text-center">
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


      {/* Why Us */}
      <section
        ref={whyRef}
        className={`mx-auto max-w-7xl px-6 py-20 transition-all duration-700 ease-out ${
          whyVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
          Why TE Infosystems
        </p>

        <h2 className="mt-3 text-3xl font-bold md:text-4xl">
          Built around your goals.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">

          {[
            ["Intelligent Solutions", "We use modern technologies and AI to create smarter solutions for complex business problems."],
            ["Scalable Technology", "Our solutions are designed to grow with your business and changing requirements."],
            ["Secure by Design", "Security is considered throughout development and deployment."],
            ["Business Focused", "We focus on practical technology that creates meaningful business value."],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-xl border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-900"
            >
              <h3 className="text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-2 leading-7 text-slate-400">
                {text}
              </p>
            </div>
          ))}

        </div>
      </section>


      {/* CTA */}
      <section
        ref={ctaRef}
        className={`mx-auto max-w-7xl px-6 pb-20 transition-all duration-700 ease-out ${
          ctaVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        <div className="rounded-2xl border border-slate-800 px-6 py-16 text-center">

          <h2 className="text-3xl font-bold md:text-4xl">
            Have a project in mind?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Let's turn your idea into a powerful digital solution.
          </p>

          <a
            href="/contact"
            className="mt-7 inline-block rounded-lg bg-[#172554] px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e3a8a]"
          >
            Let's Talk
          </a>

        </div>
      </section>

    </div>
  );
}

export default Home;