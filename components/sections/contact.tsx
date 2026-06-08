"use client";

import { Send } from "lucide-react";
import ScrollReveal from "@/components/scroll-reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-6 max-w-4xl mx-auto">
      <ScrollReveal>
        <div className="glass-card p-8 md:p-16 rounded-[32px] md:rounded-[40px]">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-on-surface mb-4 tracking-tight">
              Get In <span className="text-surface-tint">Touch</span>
            </h2>
            <p className="text-on-surface-variant">
              Let&apos;s build the future of intelligence together.
            </p>
          </div>

          {/* Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Taruh API Key Web3Forms Anda di value bawah ini */}
              <input type="hidden" name="access_key" value="82eceec9-a1eb-4b22-bad6-52cfa56326a6" />
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="font-mono text-xs text-surface-tint uppercase tracking-[0.1em]"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="subject"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="cyber-input"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="font-mono text-xs text-surface-tint uppercase tracking-[0.1em]"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="cyber-input"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="font-mono text-xs text-surface-tint uppercase tracking-[0.1em]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="body"
                required
                rows={5}
                placeholder="Your project vision..."
                className="cyber-input resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-4 text-base flex items-center justify-center gap-2"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
