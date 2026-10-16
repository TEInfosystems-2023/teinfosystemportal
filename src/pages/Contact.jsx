
import { useState } from "react";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/api/contact"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      let result = {};

      try {
        result = await response.json();
      } catch {
        // The server may return an empty or non-JSON response.
      }

      if (!response.ok || result.success !== true) {
        throw new Error(
          result.message || "Unable to submit your enquiry. Please try again."
        );
      }

      setSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setError(
        err.message ||
          "Unable to connect to the server. Please check your connection and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-xl border border-slate-700 bg-[#050816]/70 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10";

  const labelClass =
    "mb-2 block text-sm font-medium text-slate-300";

  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* Hero */}
      <section className="relative border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-[#050816] to-[#050816]" />

        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Contact Us
          </p>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Extraordinary
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
            Have a project in mind or need expert technology guidance?
            Tell us about your goals, and let's explore the right solution
            for your business.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-5 md:py-24">
        {/* Contact Information */}
        <div className="md:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            We'd love to hear from you.
          </h2>

          <p className="mt-5 leading-7 text-slate-400">
            Whether you're looking to develop custom software, automate
            business processes, or modernize your infrastructure, our team
            is ready to discuss your requirements.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                ✉
              </div>

              <div>
                <h3 className="font-semibold">Email Us</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Send us your project enquiry.
                </p>
                <a
                  href="mailto:contact@teinfosystems.com"
                  className="mt-2 inline-block text-sm text-blue-400 hover:text-blue-300"
                >
                  contact@teinfosystems.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                ◷
              </div>

              <div>
                <h3 className="font-semibold">Business Enquiries</h3>
                <p className="mt-1 max-w-xs text-sm leading-6 text-slate-400">
                  Contact us to discuss partnerships, projects, and
                  technology consulting.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400">
                ↗
              </div>

              <div>
                <h3 className="font-semibold">Our Expertise</h3>
                <p className="mt-1 max-w-xs text-sm leading-6 text-slate-400">
                  AI and automation, software development, cloud solutions,
                  data engineering, and cybersecurity.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-slate-800 bg-white/[0.02] p-5">
            <p className="text-sm font-semibold text-slate-200">
              Let's discuss your next project
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Share your requirements through the form, and our team can
              follow up with you.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0c1429] to-[#080d1c] p-6 shadow-2xl shadow-black/20 sm:p-9">
            {submitted ? (
              <div
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
                role="status"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10 text-3xl text-blue-400">
                  ✓
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  Thank you for reaching out!
                </h2>

                <p className="mt-3 max-w-md leading-7 text-slate-400">
                  Your enquiry has been submitted successfully. Our team
                  will review your requirements and follow up with you.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialFormData);
                    setSubmitted(false);
                    setError("");
                  }}
                  className="mt-7 rounded-lg border border-slate-700 px-5 py-3 text-sm font-medium transition hover:border-blue-500"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold">
                  Tell us about your project
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Fill out the form below with a few details about your
                  requirements.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-6"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Work Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className={labelClass}>
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your company (optional)"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className={labelClass}>
                      Service You're Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className={`${inputClass} bg-[#050816]`}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="AI & Automation">
                        AI & Automation
                      </option>
                      <option value="Software Development">
                        Software Development
                      </option>
                      <option value="Cloud & Data">Cloud & Data</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Odoo & CRM Integration">
                        Odoo & CRM Integration
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Tell us about your project, goals, or challenges..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${inputClass} resize-y leading-6`}
                    />
                  </div>

                  {error && (
                    <p
                      className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm leading-6 text-red-300"
                      role="alert"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {loading ? "Submitting Enquiry..." : "Submit Enquiry"}
                    {!loading && <span aria-hidden="true">→</span>}
                  </button>

                  <p className="text-center text-xs leading-5 text-slate-500">
                    Your information should be handled securely and used
                    only for responding to your enquiry.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
