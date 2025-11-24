"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // TODO: Replace YOUR_FORM_ID with your actual Formspree ID
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-16 md:py-20">
        {/* Glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-16 h-64 w-64 rounded-full bg-blue-500/25 blur-3xl" />
          <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl" />
        </div>

        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 mb-5 md:mt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs font-semibold tracking-[0.2em] text-blue-100 uppercase">
                Contact
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Let&apos;s talk about
              <span className="bg-gradient-to-r from-blue-300 via-sky-300 to-emerald-300 bg-clip-text text-transparent">
                {" "}
                your next project
              </span>
              .
            </h1>

            <p className="text-lg md:text-xl text-slate-200 max-w-xl">
              Share a bit about what you&apos;re building, and we&apos;ll follow
              up with ideas, timelines, and practical next steps.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Get in touch with Gleam Digital Technologies
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-8">
                Whether you&apos;re exploring an idea, planning a migration, or
                scaling an existing product, we&apos;re here to help. Expect a
                response within one business day.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/40">
                    <Mail className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100 mb-1">Email</h3>
                    <a
                      href="mailto:hello@digitaltechnologies.dev"
                      className="text-sm md:text-base text-blue-300 hover:text-blue-200"
                    >
                      hello@digitaltechnologies.dev
                    </a>
                    <p className="text-xs text-slate-400 mt-1">
                      Best for project briefs, RFPs, and general questions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/40">
                    <Phone className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100 mb-1">Phone</h3>
                    <p className="text-sm md:text-base text-slate-300">
                      Available upon request
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Share your details and we&apos;ll schedule a call.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 border border-blue-500/40">
                    <MapPin className="w-5 h-5 text-blue-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-100 mb-1">
                      Location
                    </h3>
                    <p className="text-sm md:text-base text-slate-300">
                      Serving clients worldwide
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Remote-first team working across time zones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 md:p-7 shadow-md shadow-slate-900/70">
                <h3 className="text-lg md:text-xl font-semibold text-slate-100 mb-3">
                  What you can expect
                </h3>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400 mr-3" />
                    <span>
                      Free initial consultation to understand your needs.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-blue-400 mr-3" />
                    <span>Clear next steps, budget ranges, and timelines.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-purple-400 mr-3" />
                    <span>Senior engineers involved from day one.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-1 h-2 w-2 rounded-full bg-sky-400 mr-3" />
                    <span>
                      Long-term partnership and ongoing support if you need it.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-2xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-900/80 p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Tell us about your project
                </h2>
                <p className="text-sm md:text-base text-slate-300 mb-6">
                  A few details are enough to get the conversation started.
                  We&apos;ll follow up with questions if we need more context.
                </p>

                {status === "success" && (
                  <div className="mb-6 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                    Thank you! Your message has been sent. We&apos;ll be in
                    touch soon.
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                    Something went wrong. Please try again or email us directly
                    at{" "}
                    <a
                      href="mailto:hello@digitaltechnologies.dev"
                      className="underline"
                    >
                      hello@digitaltechnologies.dev
                    </a>
                    .
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-300"
                    >
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs font-semibold uppercase tracking-wide text-slate-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-500/40 resize-none"
                      placeholder="What are you looking to build or improve?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="flex w-full items-center justify-center rounded-full bg-blue-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/40 transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                    <Send className="ml-2 h-5 w-5" />
                  </button>
                </form>

                <p className="mt-4 text-center text-[11px] text-slate-500">
                  {/* Don&apos;t forget to replace{" "}
                  <span className="font-mono">YOUR_FORM_ID</span> in the code
                  with your Formspree form ID to enable submissions. */}
                  To do: Add sendgrid or formspree integration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
