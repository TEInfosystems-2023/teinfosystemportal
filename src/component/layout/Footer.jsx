
function Footer() {
  const faqs = [
    {
      question: "What does TE Infosystems do?",
      answer:
        "TE Infosystems is an IT services company providing AI-powered software development, cloud computing, and digital transformation solutions.",
    },
    {
      question: "What AI and automation services do you provide?",
      answer:
        "We develop custom artificial intelligence solutions and robotic process automation (RPA) to help businesses automate processes and improve efficiency.",
    },
    {
      question: "What software development services do you offer?",
      answer:
        "We build tailored enterprise software and SaaS applications designed around specific business requirements.",
    },
    {
      question: "Do you provide cloud and data solutions?",
      answer:
        "Yes. Our services include cloud integration, cloud migration, and advanced data analytics to help businesses manage and utilize their data effectively.",
    },
    {
      question: "Do you provide cybersecurity solutions?",
      answer:
        "Yes. We provide cybersecurity solutions focused on building secure, scalable, and reliable digital systems.",
    },
  ];

  return (
    <footer className="text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">
              TE Infosystems
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-400">
              Building smart digital solutions that help businesses grow,
              connect, and move forward.
            </p>

            <div className="mt-6 flex gap-8 text-sm text-gray-400">
              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Home
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Services
              </a>

              <a
                href="#"
                className="transition-colors duration-300 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Frequently Asked Questions
            </h3>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {faqs.map((faq, index) => (
                <details key={index} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-gray-200">
                    {faq.question}

                    <span className="ml-4 text-xl text-gray-400 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-3 pr-8 text-sm leading-6 text-gray-400">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-gray-500 md:flex-row">
          <p>© 2023 TE Infosystems. All rights reserved.</p>
          <p>Designed & Developed with care.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

