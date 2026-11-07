
import her from "../../assets/HeroImage.png";

function Hero() {
  return (
    <section className="relative isolate min-h-screen w-full mx-auto flex  items-center px-6 py-20 overflow-hidden">

      {/* Background Image */}
      <img
        src={her}
        alt="Technology background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute  inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 text-white">

        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          Technology That
          <span className="block">
            Moves Business Forward.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          We build intelligent software, AI-powered solutions, cloud
          platforms, and secure digital experiences for modern businesses.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">

          <a href="/contact"
            className="rounded-lg bg-blue-900 px-6 py-3 hover:bg-blue-800 transition">
            Start a Project
          </a>

          <a href="/service"
            className="rounded-lg border border-white px-6 py-3 hover:bg-white/10 transition">
            Explore Services
          </a>

        </div>
      </div>

    </section>
  );
}

export default Hero;
