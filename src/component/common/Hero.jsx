

function Hero() {
  return (
    <div>
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl animate-fade-up">

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Technology That
            <span className="block bg-gradient-to-r from-blue-200 to-blue-500 bg-clip-text text-transparent">
              Moves Business Forward.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            We build intelligent software, AI-powered solutions, cloud
            platforms, and secure digital experiences for modern businesses.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-lg bg-[#172554] px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1e3a8a]"
            >
              Start a Project
            </a>

            <a
              href="/service"
              className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/5"
            >
              Explore Services
            </a>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Hero
