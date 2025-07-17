"use client";

import { useState } from "react";
import { CheckCircle, Loader2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactForm() {
  const [data, setData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      setErrors(Object.fromEntries(Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [k, v?.[0] || ""])));
      return;
    }
    setErrors({});
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      setData({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("Failed to send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 p-6">
      {["name", "email", "subject"].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium mb-1 capitalize">{field}</label>
          <input
            type={field === "email" ? "email" : "text"}
            name={field}
            value={data[field as keyof typeof data]}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-lg border ${errors[field] ? "border-red-500" : "border-gray-300"} focus:ring-2`}
          />
          {errors[field] && <p className="text-red-500 text-sm mt-1">{errors[field]}</p>}
        </div>
      ))}
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          rows={4}
          value={data.message}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 rounded-lg border ${errors.message ? "border-red-500" : "border-gray-300"} focus:ring-2`}
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#f36100] hover:bg-[#e05500] text-white py-3 rounded-lg flex justify-center gap-2"
      >
        {loading ? <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</> : "Send Message"}
      </button>
      {success && (
        <div className="flex items-center gap-2 text-green-600 mt-2">
          <CheckCircle className="h-5 w-5" /> Message sent successfully!
        </div>
      )}
    </form>
  );
}
