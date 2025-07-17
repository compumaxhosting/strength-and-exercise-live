"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import { z } from "zod";

const services = [
  "Physical Therapy (60 mins)",
  "Corrective Exercise (45 mins)",
  "Rehab Consultation (30 mins)",
  "Post-Surgical Recovery (60 mins)",
];

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  service: z.string().min(1, "Service is required"),
});

type FormData = z.infer<typeof schema>;

export default function Appointment() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      setErrors(
        Object.fromEntries(
          Object.entries(result.error.flatten().fieldErrors).map(([k, v]) => [
            k,
            v?.[0] || "",
          ])
        )
      );
      return;
    }
    setErrors({});
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/appoint-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
      setForm({ name: "", email: "", date: "", time: "", service: "" });
    } catch {
      alert("Failed to book appointment.");
    } finally {
      setLoading(false);
    }
  };

  const Input = ({
    name,
    type = "text",
    icon: Icon,
  }: {
    name: string;
    type?: string;
    icon?: React.ElementType;
  }) => (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-3 top-3.5 h-5 w-5 text-gray-500" />
      )}
      <input
        type={type}
        name={name}
        value={form[name as keyof FormData]}
        onChange={handleChange}
        placeholder={
          name === "name"
            ? "Full Name"
            : name === "email"
              ? "Email"
              : undefined
        }
        className={`w-full ${Icon ? "pl-10" : "px-4"} py-3 rounded-lg border ${errors[name] ? "border-red-500" : "border-gray-300"
          }`}
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
    </div>
  );

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Book <span className="text-[#f36100]">Your Session</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Schedule your rehabilitation appointment
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 space-y-4"
        >
          <Input name="name" />
          <Input name="email" type="email" />

          <div className="grid grid-cols-2 gap-4">
            <Input name="date" type="date" icon={Calendar} />
            <Input name="time" type="time" icon={Clock} />
          </div>

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border ${errors.service ? "border-red-500" : "border-gray-300"
              } bg-white dark:bg-gray-700 text-gray-900 dark:text-white`}
          >
            <option value="" disabled>
              Select service
            </option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-500 text-sm">{errors.service}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#f36100] hover:bg-[#e05500] text-white font-medium rounded-lg"
          >
            {loading ? "Booking..." : "Confirm Appointment"}
          </button>

          {success && (
            <div className="flex items-center gap-2 text-green-600 mt-2">
              <CheckCircle className="h-5 w-5" /> Appointment booked successfully!
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
