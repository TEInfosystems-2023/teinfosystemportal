import { useState } from "react";

const leadership = {
  name: "Mr. Goloknath Mishra",
  role: "Founder",
  description:
    "Founded TE Infosystems in 2023 with a vision to deliver innovative technology services and digital solutions.",
  image: "/team/goloknath-mishra.jpg",
  linkedin: "https://www.linkedin.com/in/goloknath-mishra/",
};

const leader = {
  name: "Jeevan Jyoti Mohakud",
  role: "Team Leader",
  description:
    "Leads the team in coordinating projects, supporting collaboration, and driving technology initiatives.",
  image: "https://media.licdn.com/dms/image/v2/D5603AQFvS-LBVPRsaQ/profile-displayphoto-crop_800_800/B56aCdcsqoGQAI-/0/1789347942953?e=1793836800&v=beta&t=hfwQK_el8r7hIExFGPy1Wk9AlQCR3rHWG_9HF1NLf3s",
  linkedin: "https://www.linkedin.com/in/jeevan-jyoti-mahakud-40b1003a/",
};

const developers = [
  {
    name: "Shibu Kumar Ghosh",
    role: "Full-Stack Developer",
    technologies: ["MERN Stack", "AI"],
    image: "/team/shibu-kumar.jpg",
    linkedin: "https://media.licdn.com/dms/image/v2/D5635AQHY5QFgOS6wLA/profile-framedphoto-shrink_800_800/B56Z4MiBBNGoAg-/0/1778326704974?e=1792742400&v=beta&t=QWqZ2p99Y3bnNoX8kYI2PSP4r3s36nbhjm6Bv0NdnGE",
    github: "https://www.linkedin.com/in/shibu-ghosh-6101b733b/",
  },
  {
    name: "Anannya Samal",
    role: "Full-Stack Developer",
    technologies: ["MERN Stack"],
    image: "/team/anannya-samal.jpg",
    linkedin: "",
    github: "",
  },
  {
    name: "Subhashis Sahu",
    role: "Java Full-Stack Developer",
    designation: "Odoo Coordinator",
    technologies: ["Java", "Spring Boot", "React", "Odoo CRM"],
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFvLd_pWk1dQQ/profile-displayphoto-crop_800_800/B4DaAidyuWK8AM-/0/1787284631316?e=1793836800&v=beta&t=F0YGvfa9DXocFnGE4tqBDSZ-RTwpgv-H7C90b9W1GMU",
    linkedin: "https://www.linkedin.com/in/subhashis01/?isSelfProfile=true",
    github: "",
  },
  {
    name: "Anshuman Rath",
    role: "Python Developer",
    technologies: ["Python", "AI"],
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHp3qNf5X5YHg/profile-displayphoto-crop_800_800/B4DZ7edzOoJcAI-/0/1781848816052?e=1793836800&v=beta&t=2nYuPrbIXiVgqyM1p7-i75dAOrUe4FPyg0ckFsg1BCQ",
    linkedin: "https://www.linkedin.com/in/anshuman-rath/",
    github: "",
  },
  {
    name: "Monali Dash",
    role: "Full-Stack Developer",
    technologies: ["MERN Stack"],
    image: "https://media.licdn.com/dms/image/v2/D5635AQHUEzJ1UBK9GQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1720929028807?e=1792742400&v=beta&t=ueqcEx6PLgMTHz2_FKmG9knW7FvyTXIf9L2H1kCWdX0",
    linkedin: "https://www.linkedin.com/in/monali-dash-556066255/",
    github: "",
  },
];

function ProfileImage({ src, name, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900 to-slate-800 ${className}`}
    >
      {!failed ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="text-4xl font-bold text-blue-200">
          {name
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join("")
            .toUpperCase()}
        </span>
      )}
    </div>
  );
}

function SocialLinks({ linkedin, github }) {
  const links = [
    { label: "LinkedIn", url: linkedin },
    { label: "GitHub", url: github },
  ].filter((item) => item.url);

  if (!links.length) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-300 transition hover:text-white"
        >
          {link.label} ↗
        </a>
      ))}
    </div>
  );
}

function PersonCard({ person, featured = false }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/40 hover:bg-white/[0.07] sm:p-6">
      <div className="flex items-start gap-4">
        <ProfileImage
          src={person.image}
          name={person.name}
          className={`h-20 w-20 ${featured ? "sm:h-24 sm:w-24" : ""}`}
        />

        <div className="min-w-0 flex-1 pt-1">
          <h3 className="text-lg font-semibold leading-snug text-white">
            {person.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-blue-300">
            {person.role}
          </p>
          {person.designation && (
            <p className="mt-1 text-xs text-slate-400">
              {person.designation}
            </p>
          )}
        </div>
      </div>

      {person.description && (
        <p className="mt-5 text-sm leading-7 text-slate-300">
          {person.description}
        </p>
      )}

      {person.technologies && (
        <div className="mt-5 flex flex-wrap gap-2">
          {person.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto">
        <SocialLinks linkedin={person.linkedin} github={person.github} />
      </div>
    </article>
  );
}

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d1c] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/70 via-[#080d1c] to-cyan-950/20" />
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
            About TE Infosystems
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Technology that moves{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              business forward.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            TE Infosystems, also known as TEK Experts Infosystem Private
            Limited, is a technology services provider focused on AI-powered
            software development and digital solutions that help businesses
            move forward.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#team"
              className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-500"
            >
              Meet Our Team
            </a>
            <a
              href="/contact"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
            >
              Contact Us
            </a>
          </div>

          <p className="mt-5  opacity-50 text-2xl sm:text-[24px] lg:text-[12px]">
            2023 TE Infosystems
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-24">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Who We Are
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Building practical solutions for a digital world.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-8 text-slate-300">
          <p>
            We focus on software development, artificial intelligence, and
            digital transformation to address real business challenges.
          </p>
          <p>
            Our team brings together different technical skills and
            perspectives to build applications, streamline workflows, and
            explore smarter ways to work.
          </p>
          <p>
            Our goal is to combine technology, creativity, and collaboration
            to create useful digital experiences.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Leadership
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              The people behind our vision.
            </h2>
            <p className="mt-4 leading-7 text-slate-400">
              Meet the founder and team leader guiding our journey.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <PersonCard person={leadership} featured />
            <PersonCard person={leader} featured />
          </div>
        </div>
      </section>

      {/* Developers */}
      <section id="team" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Our Team
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Meet our developers.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              A team of developers bringing together web technologies,
              backend engineering, and AI.
            </p>
          </div>
          <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
            {developers.length} Developers
          </span>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {developers.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950 via-slate-900 to-cyan-950/50 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Let’s Build Something
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Have an idea? Let’s turn it into a digital solution.
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-300">
            Connect with TE Infosystems to discuss your next technology
            project.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex rounded-lg bg-white px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-100"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}