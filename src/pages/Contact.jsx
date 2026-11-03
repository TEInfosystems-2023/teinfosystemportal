
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

    setFormData((prev) => ({
      ...prev,
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
        // Empty response
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
        err.message || "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-gray-300 bg-white px-4 py-3 text-sm text-black outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black";

  const labelClass =
    "mb-2 block text-sm font-medium text-gray-800";

  return (
    <main className="min-h-screen bg-white text-black">

      {/* Header */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Contact Us
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Let's start a conversation.
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Have a project in mind? Share your requirements with us.
            We'd be happy to discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-5 lg:gap-16 lg:px-12">

        {/* Contact Information */}
        <div className="lg:col-span-2">

          <h2 className="text-2xl font-semibold">
            Get in touch
          </h2>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Whether you need software development, business automation,
            or technology consulting, feel free to reach out.
          </p>

          <div className="mt-9 space-y-7">

            <div>
              <p className="text-sm font-semibold">
                Email
              </p>

              <a
                href="mailto:contact@teinfosystems.com"
                className="mt-2 inline-block text-sm text-gray-600 underline underline-offset-4 hover:text-black"
              >
                contact@teinfosystems.com
              </a>
            </div>

            <div>
              <p className="text-sm font-semibold">
                Business Enquiries
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Partnerships, projects, and technology consulting.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">
                Our Expertise
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                AI and automation, software development, cloud,
                data engineering, and cybersecurity.
              </p>
            </div>

          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">

          <div className="border border-gray-200 bg-white p-5 sm:p-8">

            {submitted ? (

              <div
                className="flex min-h-[350px] flex-col items-center justify-center text-center"
                role="status"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-300 text-2xl">
                  ✓
                </div>

                <h2 className="mt-5 text-2xl font-semibold">
                  Thank you!
                </h2>

                <p className="mt-3 max-w-md text-sm leading-7 text-gray-600">
                  Your enquiry has been submitted successfully.
                  Our team will review your requirements and
                  get back to you.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData(initialFormData);
                    setError("");
                  }}
                  className="mt-6 border border-black px-5 py-3 text-sm font-medium transition hover:bg-black hover:text-white"
                >
                  Send Another Enquiry
                </button>
              </div>

            ) : (

              <>
                <h2 className="text-2xl font-semibold">
                  Send us an enquiry
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Fill in the details below.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
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
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="AI & Automation">AI & Automation</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Cloud & Data">Cloud & Data</option>
                      <option value="Cybersecurity">Cybersecurity</option>
                      <option value="Odoo & CRM Integration">Odoo & CRM Integration</option>
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
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="border border-red-300 bg-red-50 p-3 text-sm text-red-700"
                    >
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full border border-black bg-black px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry →"}
                  </button>

                  <p className="text-xs leading-5 text-gray-500">
                    Your information will be used to respond to your enquiry.
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
