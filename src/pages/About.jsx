
import { useState } from "react";
import logo from "../assets/linkedin.png";

const leadership = [
  {
    name: "Mr. Goloknath Mishra",
    role: "Founder",
    description:
      "Founded TE Infosystems in 2023 with a vision to deliver innovative technology services and digital solutions.",
    image: "/team/goloknath-mishra.jpg",
    linkedin: "https://www.linkedin.com/in/goloknath-mishra/",
  },
  {
    name: "Jeevan Jyoti Mohakud",
    role: "Team Leader",
    description:
      "Leads project coordination, team collaboration, and technology initiatives.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFvS-LBVPRsaQ/profile-displayphoto-crop_800_800/B56aCdcsqoGQAI-/0/1789347942953?e=1793836800&v=beta&t=hfwQK_el8r7hIExFGPy1Wk9AlQCR3rHWG_9HF1NLf3s",
    linkedin: "https://www.linkedin.com/in/jeevan-jyoti-mahakud-40b1003a/",
  },
];

const developers = [
  {
    name: "Shibu Kumar Ghosh",
    role: "Full-Stack Developer",
    technologies: ["MERN Stack", "AI"],
    image: "/team/shibu-kumar.jpg",
    linkedin: "https://www.linkedin.com/in/shibu-ghosh-6101b733b/",
  },
  {
    name: "Anannya Samal",
    role: "Full-Stack Developer",
    technologies: ["MERN Stack"],
    image: "/team/anannya-samal.jpg",
  },
  {
    name: "Subhashis Sahu",
    role: "Java Full-Stack Developer",
    designation: "Odoo Coordinator",
    technologies: ["Java", "Spring Boot", "React", "Odoo CRM"],
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQFvLd_pWk1dQQ/profile-displayphoto-crop_800_800/B4DaAidyuWK8AM-/0/1787284631316?e=1793836800&v=beta&t=F0YGvfa9DXocFnGE4tqBDSZ-RTwpgv-H7C90b9W1GMU",
    linkedin: "https://www.linkedin.com/in/subhashis01/",
  },
  {
    name: "Anshuman Rath",
    role: "Python Developer",
    technologies: ["Python", "AI"],
    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHp3qNf5X5YHg/profile-displayphoto-crop_800_800/B4DZ7edzOoJcAI-/0/1781848816052?e=1793836800&v=beta&t=2nYuPrbIXiVgqyM1p7-i75dAOrUe4FPyg0ckFsg1BCQ",
    linkedin: "https://www.linkedin.com/in/anshuman-rath/",
  },
  {
    name: "Monali Dash",
    role: "Full-Stack Developer",
    technologies: ["MERN Stack"],
    image:
      "https://media.licdn.com/dms/image/v2/D5635AQHUEzJ1UBK9GQ/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1720929028807?e=1792742400&v=beta&t=ueqcEx6PLgMTHz2_FKmG9knW7FvyTXIf9L2H1kCWdX0",
    linkedin: "https://www.linkedin.com/in/monali-dash-556066255/",
  },
];

function ProfileImage({ src, name }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-24 sm:w-24">
      {!failed && src ? (
        <img
          src={src}
          alt={name}
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-xl font-semibold text-gray-600">
          {name
            .split(" ")
            .slice(0, 2)
            .map((word) => word[0])
            .join("")
            .toUpperCase()}
        </div>
      )}
    </div>
  );
}

function PersonCard({ person }) {
  return (
    <article className="flex h-full flex-col border border-gray-200 bg-white p-5 transition-colors hover:border-gray-400 sm:p-6">

      <div className="flex items-center gap-4">
        <ProfileImage src={person.image} name={person.name} />

        <div className="min-w-0">
          <h3 className="text-base font-semibold text-black sm:text-lg">
            {person.name}
          </h3>

          <p className="mt-1 text-sm text-gray-600">
            {person.role}
          </p>

          {person.designation && (
            <p className="mt-1 text-xs text-gray-500">
              {person.designation}
            </p>
          )}
        </div>
      </div>

      {person.description && (
        <p className="mt-5 text-sm leading-6 text-gray-600">
          {person.description}
        </p>
      )}

      {person.technologies?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {person.technologies.map((tech) => (
            <span
              key={tech}
              className="border border-gray-200 px-2.5 py-1 text-xs text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {person.linkedin && (
        <div className="mt-auto pt-5">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-black underline underline-offset-4 hover:text-gray-500"
          >
            <div>
              <img src={logo} alt="linkedin" className="w-[18px] h-[18px]"></img>
            </div>
          </a>
        </div>
      )}
    </article>
  );
}

export default function About() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* Hero */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24 lg:px-12">

      

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Technology that moves business forward.
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            TE Infosystems, also known as TEK Experts Infosystem Private
            Limited, provides technology services, AI-powered software
            development, and digital solutions for businesses.
          </p>

          <a
            href="#team"
            className="mt-8 inline-flex border border-black bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Meet Our Team →
          </a>

        </div>
      </section>

      {/* About Company */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12">

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Who We Are
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Building practical digital solutions.
          </h2>
        </div>

        <div className="space-y-4 text-sm leading-7 text-gray-600 sm:text-base">
          <p>
            We focus on software development, artificial intelligence,
            and digital transformation to solve real business challenges.
          </p>

          <p>
            Our team combines different technical skills to build
            applications, improve workflows, and create useful
            digital experiences.
          </p>
        </div>

      </section>

      {/* Leadership */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Leadership
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Meet our leadership.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {leadership.map((person) => (
              <PersonCard key={person.name} person={person} />
            ))}
          </div>

        </div>
      </section>

      {/* Developers */}
      <section id="team" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Our Team
          </p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Meet our developers.
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600">
            A team bringing together expertise in web development,
            backend engineering, and artificial intelligence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {developers.map((person) => (
            <PersonCard key={person.name} person={person} />
          ))}
        </div>

      </section>

      {/* Contact */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">

          <div>
            <h2 className="text-2xl font-semibold">
              Have a project in mind?
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Let's discuss how technology can help your business.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-fit border border-black bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          >
            Contact Us →
          </a>

        </div>
      </section>

    </main>
  );
}
