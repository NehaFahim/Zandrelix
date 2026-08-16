"use client";

import { useState, type FormEvent } from "react";
import { UserIcon, ChevronDownIcon, SendIcon, LockIcon, MessageSquareIcon } from "@/components/ContactIcons";
import { MailIcon, PhoneIcon } from "@/components/FooterIcons";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setFeedback(data.message || "Your message has been sent!");
        setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
      } else {
        setStatus("error");
        setFeedback(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setFeedback("Network error — please check your connection and try again.");
    }

    // auto-dismiss the popup after a few seconds
    window.setTimeout(() => setStatus("idle"), 5000);
  }

  return (
    <div id="formCard" className="tilt-card opacity-0 relative rounded-2xl border border-white/10 bg-card2/60 p-8 max-sm:p-6">
      <div className="flex items-center gap-2.5 mb-6">
        <span className="w-7 h-7 rounded-md bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center flex-shrink-0">
          <MessageSquareIcon />
        </span>
        <h2 className="font-bold text-[13px] tracking-[1.5px] uppercase">Send Us a Message</h2>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="relative">
            <span className="contact-field-icon">
              <UserIcon />
            </span>
            <input
              type="text"
              required
              placeholder="Full Name"
              className="contact-input"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
            />
          </div>
          <div className="relative">
            <span className="contact-field-icon">
              <MailIcon />
            </span>
            <input
              type="email"
              required
              placeholder="Email Address"
              className="contact-input"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
          <div className="relative">
            <span className="contact-field-icon">
              <PhoneIcon />
            </span>
            <input
              type="tel"
              placeholder="Phone Number (Optional)"
              className="contact-input"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </div>
          <div className="relative rounded-[10px] border border-white/10  bg-white/[0.02] px-4 py-2 focus-within:border-brand-400/60 transition-colors">
            <label className="block text-[10.5px] text-low leading-tight">Subject</label>
            <select
              className="w-full bg-transparent text-[13.5px] text-[#e5e7ef] outline-none appearance-none pr-6"
              value={form.subject}
              onChange={(e) => update("subject", e.target.value)}
            >
              <div className="text-slate-900">
              <option>General Inquiry</option>
              <option>Website Development</option>
              <option>Mobile App</option>
              <option>Shopify Store</option>
              <option>Partnership</option>
              <option>Other</option>
              </div>
            </select>
            <span className="absolute right-4 top-[60%] -translate-y-1/2 pointer-events-none">
              <ChevronDownIcon />
            </span>
          </div>
        </div>

        <textarea
          required
          placeholder="Tell us about your project..."
          className="contact-textarea"
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-500 to-violet-500 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-[14px] tracking-[0.5px] uppercase py-[13px] rounded-full transition-opacity shadow-[0_10px_30px_-8px_rgba(139,92,246,0.6)]"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
          <SendIcon />
        </button>
        <p className="flex items-center justify-center gap-1.5 text-[12px] text-low">
          <LockIcon /> We respect your privacy. Your information is safe with us.
        </p>
      </form>

      {/* status popup */}
      <div
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
          status === "success" || status === "error"
            ? "opacity-100 translate-y-0 bottom-6"
            : "opacity-0 translate-y-2 bottom-4"
        }`}
      >
        {(status === "success" || status === "error") && (
          <div
            className={`pointer-events-auto flex items-center gap-2.5 rounded-full border px-5 py-3 text-[13px] font-medium shadow-[0_12px_30px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl ${
              status === "success"
                ? "bg-[#0a1f13]/95 border-emerald-500/40 text-emerald-300"
                : "bg-[#26090f]/95 border-red-500/40 text-red-300"
            }`}
          >
            {status === "success" ? <CheckCircleIcon /> : <AlertIcon />}
            {feedback}
          </div>
        )}
      </div>
    </div>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.4 2.4L16 10" />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="8" x2="12" y2="13" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
