"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Something went wrong.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 mt-6">
      <div className="max-w-xl w-full bg-background p-8 rounded-xl">
         <p className="text-center text-[#e5c88b] text-sm md:text-base leading-relaxed my-6">
                   we’re to help and we’d love to hear from you!
              </p>
        <h2 className="text-3xl text-foreground font-semibold text-center mb-8 uppercase tracking-widest">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 bg-white hover:border-black border border-[#e5c88b] text-black rounded-md"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-white hover:border-black border border-[#e5c88b] text-black rounded-md"
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 bg-white hover:border-black border border-[#e5c88b] text-black rounded-md"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e5c88b] hover:cursor-pointer text-black py-3 rounded-md font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p className="text-center text-[#e5c88b] mt-4">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
